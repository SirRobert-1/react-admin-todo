import { useListContext, useDeleteMany } from "ra-core";
import clsx from "clsx";

import type { Todo } from "./types";

export const Footer = () => {
  const { data, total, filterValues, setFilters, isPending, error } =
    useListContext<Todo>();
  const [deleteMany] = useDeleteMany();

  if (isPending || error) return null;

  const handleClearCompleted = () => {
    const completedIds = data
      .filter((todo) => todo.completed)
      .map((todo) => todo.id);
    deleteMany("todos", { ids: completedIds });
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{total}</strong>
        {total === 1 ? " item" : " items"} left
      </span>

      <ul className="filters">
        <li>
          <a
            className={clsx({
              selected: !Object.prototype.hasOwnProperty.call(
                filterValues,
                "completed",
              ),
            })}
            href="#"
            onClick={() => setFilters({})}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={clsx({ selected: filterValues.completed === false })}
            href="#"
            onClick={() => setFilters({ completed: false })}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={clsx({ selected: filterValues.completed === true })}
            href="#"
            onClick={() => setFilters({ completed: true })}
          >
            Completed
          </a>
        </li>
      </ul>

      {total != null && (
        <button className="clear-completed" onClick={handleClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};
