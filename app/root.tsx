import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "~/styles/index.css";
import Card, { links as cardStyles } from "~/components/Card";
import { links as inputStyles } from "~/components/CustomTaskInput";
import { links as itemListStyles } from "~/components/ItemList";
import { links as resultStyles } from "~/components/Results";
import Header from "./components/Header";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...cardStyles(),
  ...inputStyles(),
  ...itemListStyles(),
  ...resultStyles()
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Card>
          <Header>To Do</Header>
          <Outlet />
        </Card>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
