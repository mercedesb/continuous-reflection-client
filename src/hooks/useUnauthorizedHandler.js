import { useHistory } from 'react-router-dom'

export function useUnauthorizedHandler() {
  let history = useHistory()

  const handler = err => {
    // remove token?
    history.push('/login')
  }

  return handler
}
