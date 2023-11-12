import type { LinksFunction } from "@remix-run/node";

import Item, { type Task } from "./Item";

import styles from "../styles/item_list.css";
import Mark from "./Mark";
import { useFetcher } from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles }
];

export default function ItemList({ items }: { items: Task[] }) {
  const fetcher = useFetcher({ key: "update-task" });

  return (
    <fetcher.Form method="POST">
      <ul>
        {items.map((item: Task) => {
          return (
            <li key={item.id}>
              <Item item={item} />
              <Mark item={item} />
            </li>
          );
        })}
      </ul>
    </fetcher.Form>
  );
}
