import type { LinksFunction } from "@remix-run/node";

import styles from "../styles/results.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles }
];

interface Result {
  all: number;
  complete: number;
  incomplete: number;
}

export default function Results({ all, complete, incomplete }: Result) {
  return (
    <>
      <hr />
      <div id="results">
        <span>
          <strong>Total:</strong> {all}
        </span>
        <span>
          <strong>Complete:</strong> {complete}
        </span>
        <span>
          <strong>Incomplete:</strong> {incomplete}
        </span>
      </div>
    </>
  );
}
