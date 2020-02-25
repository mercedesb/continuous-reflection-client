import { fetchData } from './_fetchData'

const GET = 'GET'
const POST = 'POST'
const PUT = 'PUT'
const DEL = 'DEL'

export const apiClient = {
  get: async function(path) {
    return fetchData(path, GET, null)
  },
  post: async function(path, data) {
    return fetchData(path, POST, data)
  },
  put: async function(path, data) {
    return fetchData(path, PUT, data)
  },
  del: async function(path) {
    return fetchData(path, DEL, null)
  }
}
