import type { LinksFunction } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";

import styles from "../styles/custom_task_input.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles }
];

export default function CustomTaskInput() {
  const fetcher = useFetcher({ key: "create-task" });

  const createTask = (event: any) => {
    if (event.key === 'Enter') {
      fetcher.submit(event.target.value);
      event.target.value = "";
    }
  }

  return (
    <fetcher.Form method="POST">
      <input
        name="task"
        onKeyUp={createTask}
        placeholder='Enter your task ...' />
    </fetcher.Form>
  );
}
