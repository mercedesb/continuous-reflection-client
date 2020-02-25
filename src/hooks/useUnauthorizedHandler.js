import { useHistory } from 'react-router-dom'

export async function useUnauthorizedHandler() {
  let history = useHistory()

  const handler = err => {
    if (err === 401) {
      history.push('/login')
    } else {
      throw err
    }
  }

  return handler
}
