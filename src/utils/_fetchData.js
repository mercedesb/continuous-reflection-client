export async function fetchData(path, method, data, onUnauthorized, onError) {
  const token = localStorage.getItem('token')
  const origin = process.env.REACT_APP_API_CLIENT_URL
  const url = `${origin}/${path}?token=${token}`

  const response = await fetch(url, {
    method: method,
    body: !!data ? JSON.stringify(data) : null,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': origin
    }
  })
    .then(response => {
      if (response.status === 401) {
        localStorage.removeItem('token')
        if (!!onUnauthorized) onUnauthorized()

        throw new Error(response.json())
      }

      return response
    })
    .then(response => {
      if (!response.ok) {
        if (!!onError) onError()

        throw new Error(response.json())
      }
      return response
    })
    .then(response => response.json())
    .catch(err => console.log(err))

  return await response
}
