import type { MetaFunction } from "@remix-run/node";
import Card from "~/components/Card";

export const meta: MetaFunction = () => {
  return [
    { title: "To Do App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Card>
      <h1>To Do</h1>
    </Card>
  );
}
