import { GET_TASKS, GRAPHQL_URL } from "./constants";

export async function getTasks() {
  const response = await fetch(GRAPHQL_URL, {
    body: JSON.stringify({
      query: GET_TASKS
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })

  return await response.json();
}