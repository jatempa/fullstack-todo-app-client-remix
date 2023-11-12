import type { LinksFunction } from "@remix-run/node";

import styles from "../styles/card.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles }
];

export default function Card(props: any) {
  return (
    <div id="app">
      {props.children}
    </div>
  );
}