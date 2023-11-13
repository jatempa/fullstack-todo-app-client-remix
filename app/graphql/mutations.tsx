import { ADD_TASK, GRAPHQL_URL, UPDATE_TASK } from "./constants";

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

export async function updateTask(id: string | undefined) {
  const response = await fetch(GRAPHQL_URL, {
    body: JSON.stringify({
      query: UPDATE_TASK,
      variables: {
        id
      }
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })

  return await response.json();
}
