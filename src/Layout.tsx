import type { ReactNode } from "react";
import "todomvc-app-css/index.css";
import "todomvc-common/base.css";

import "./app.css";

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <section className="todoapp">{children}</section>
    <footer className="info">
      <p>Double-click to edit a todo</p>
      <p>
        Created by the{" "}
        <a href="https://marmelab.com/react-admin">react-admin</a> team (
        <a href="https://github.com/marmelab/react-admin-todo">source</a>)
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  </>
);
