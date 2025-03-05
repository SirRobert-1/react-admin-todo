import { useCreate } from "ra-core";
import type { KeyboardEvent } from "react";

export const Header = () => {
  const [create] = useCreate();

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    create("todos", {
      data: {
        title: event.currentTarget.value,
        completed: false,
      },
    });
    event.currentTarget.value = "";
  };

  return (
    <header className="header">
      <h1>todos</h1>

      <input
        className="new-todo"
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  );
};
