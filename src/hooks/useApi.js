import { useUnauthorizedHandler } from './useUnauthorizedHandler'
import { useErrorHandler } from './useErrorHandler'
import { apiClient } from 'utils'

export function useApi() {
  let unauthorizedHandler = useUnauthorizedHandler()
  let errorHandler = useErrorHandler()

  return {
    get: path =>
      apiClient
        .get(path)
        .catch(unauthorizedHandler)
        .catch(errorHandler),
    post: (path, data) =>
      apiClient
        .post(path, data)
        .catch(unauthorizedHandler)
        .catch(errorHandler),
    put: (path, data) =>
      apiClient
        .put(path, data)
        .catch(unauthorizedHandler)
        .catch(errorHandler),
    del: path =>
      apiClient
        .del(path)
        .catch(unauthorizedHandler)
        .catch(errorHandler)
  }
}

export default useApi
