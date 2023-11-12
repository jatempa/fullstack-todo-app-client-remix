import { 
  json,
  type ActionFunctionArgs,
  type MetaFunction
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Card from "~/components/Card";
import CustomTaskInput from "~/components/CustomTaskInput";
import Header from "~/components/Header";
import { createTask } from "~/graphql/mutations";
import { getTasks } from "~/graphql/queries";

export const meta: MetaFunction = () => {
  return [
    { title: "To Do App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const { task: title } = Object.fromEntries(formData);
  const response = await createTask(title);
  return json({ task: response.data });
};

export const loader = async () => {
  const response = await getTasks();
  return json({ tasks: response.data.tasks });
};

export default function Index() {
  const { tasks } = useLoaderData<typeof loader>();
  console.log(tasks)
  return (
    <Card>
      <Header>To Do</Header>
      <CustomTaskInput />
    </Card>
  );
}
