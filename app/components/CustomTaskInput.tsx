import type { LinksFunction } from "@remix-run/node";

import styles from "../styles/custom_task_input.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles }
];

export default function CustomTaskInput() {
  return <input placeholder='Enter your task ...' />;
}
