export const GRAPHQL_URL = 'http://localhost:4000/'

export const GET_TASKS = `
  query GetTasks {
    tasks {
      id
      done
      title
    }
  }
`
export const ADD_TASK = `
  mutation AddTask($title: String!){
    addTask(title: $title) {
      id
      done
      title
    }
  }
`
