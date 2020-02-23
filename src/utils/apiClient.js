const GET = 'GET'
const POST = 'POST'
const PUT = 'PUT'
const DEL = 'DEL'

async function fetchData(path, method, data) {
  const token = localStorage.getItem('token')
  const origin = process.env.REACT_APP_API_CLIENT_URL
  const url = `${origin}/${path}?token=${token}`

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': origin
    }
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.json())
    }
    return response.json()
  })

  return await response
}

export const apiClient = {
  get: async function(path) {
    return fetchData(path, GET).catch
  },
  post: async function(path, data) {
    return fetchData(path, POST, data)
  },
  put: async function(path, data) {
    return fetchData(path, PUT, data)
  },
  del: async function(path) {
    return fetchData(path, DEL)
  }
}
