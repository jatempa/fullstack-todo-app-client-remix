import { type ActionFunctionArgs, json } from "@remix-run/node";
import { updateTask } from "~/graphql/mutations";

export const action = async ({ params }: ActionFunctionArgs) => {
  const response = await updateTask(params.id);
  return json({ task: response.data } );
};