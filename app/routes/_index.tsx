import type { MetaFunction } from "@remix-run/node";
import Card from "~/components/Card";
import CustomTaskInput from "~/components/CustomTaskInput";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "To Do App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Card>
      <Header>To Do</Header>
      <CustomTaskInput />
    </Card>
  );
}
