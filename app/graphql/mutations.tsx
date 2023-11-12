import { ADD_TASK, GRAPHQL_URL } from "./constants";

export async function createTask(title: FormDataEntryValue) {
  const response = await fetch(GRAPHQL_URL, {
    body: JSON.stringify({
      query: ADD_TASK,
      variables: {
        title
      }
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })

  return await response.json();
}
