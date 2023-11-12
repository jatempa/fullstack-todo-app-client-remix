import type { LinksFunction } from "@remix-run/node";

import Item, { type Task } from "./Item";

import styles from "../styles/item_list.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles }
];

export default function ItemList({ items }: { items: Task[] }) {
  return (
    <ul>
      {items.map((item: Task) => {
        return (
          <li key={item.id}>
            <Item item={item} />
          </li>
        );
      })}
    </ul>
  );
}
