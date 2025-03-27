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
      <span className="todo-count" style={{ color: "blue", fontSize: "20px" }}>
        <strong>{total}</strong>
        {total === 1 ? " item" : " items"} left
      </span>

      <ul className="filters" style={{ color: "blue", fontSize: "16px" }}>
        <li>
          <a
            className={clsx({
              selected: !Object.prototype.hasOwnProperty.call(
                filterValues,
                "completed",
              ),
            })}
            href="#"
            onClick={(event) => {
              setFilters({});
              event.preventDefault();
            }}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={clsx({ selected: filterValues.completed === false })}
            href="#"
            onClick={(event) => {
              setFilters({ completed: false });
              event.preventDefault();
            }}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={clsx({ selected: filterValues.completed === true })}
            href="#"
            onClick={(event) => {
              setFilters({ completed: true });
              event.preventDefault();
            }}
          >
            Completed
          </a>
        </li>
      </ul>

      {total != null && (
        <button
          className="clear-completed"
          onClick={handleClearCompleted}
          style={{ color: "blue" }}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};
