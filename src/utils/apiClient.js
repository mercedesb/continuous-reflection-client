import { fetchData } from './_fetchData'

const GET = 'GET'
const POST = 'POST'
const PUT = 'PUT'
const DEL = 'DEL'

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
