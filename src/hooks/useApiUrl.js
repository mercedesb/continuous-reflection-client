export function useApiUrl(path) {
  const token = localStorage.getItem('token')
  const origin = process.env.REACT_APP_API_CLIENT_URL
  if (path.indexOf('?') > -1) {
    return `${origin}/${path}&token=${token}`
  } else {
    return `${origin}/${path}?token=${token}`
  }
}
