import { 
  json,
  type ActionFunctionArgs,
  type MetaFunction
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import CustomTaskInput from "~/components/CustomTaskInput";
import ItemList from "~/components/ItemList";
import Results from "~/components/Results";
import type { Task } from "~/components/Item";

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

  const all = tasks.length;
  const complete = tasks.filter((task: Task) => task.done).length;
  const incomplete = all - complete;

  return (
    <>
      <CustomTaskInput />
      <ItemList items={tasks} />
      <Results
        all={all}
        complete={complete}
        incomplete={incomplete}
      />
    </>
  );
}
