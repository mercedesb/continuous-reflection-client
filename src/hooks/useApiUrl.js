export function useApiUrl(path) {
  const token = localStorage.getItem('token')
  const origin = process.env.REACT_APP_API_CLIENT_URL
  return `${origin}/${path}?token=${token}`
}
