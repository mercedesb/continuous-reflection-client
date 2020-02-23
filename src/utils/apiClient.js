const GET = 'GET'
const POST = 'POST'
const PUT = 'PUT'
const DEL = 'DEL'

async function fetchData(path, method, data, onUnauthorized, onError) {
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
  }).then(response => {
    debugger
    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem('token')
        if (!!onUnauthorized) onUnauthorized()
      } else {
        if (!!onError) onError()
        else throw new Error(response)
      }
    }
    return response.json()
  })

  return await response
}

export const apiClient = {
  get: async function(path, onUnauthorized, onError) {
    return fetchData(path, GET, null, onUnauthorized, onError)
  },
  post: async function(path, data, onUnauthorized, onError) {
    return fetchData(path, POST, data, onUnauthorized, onError)
  },
  put: async function(path, data, onUnauthorized, onError) {
    return fetchData(path, PUT, data, onUnauthorized, onError)
  },
  del: async function(path, onUnauthorized, onError) {
    return fetchData(path, DEL, null, onUnauthorized, onError)
  }
}
