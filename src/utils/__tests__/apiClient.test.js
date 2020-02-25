import { apiClient } from '../apiClient'
import { fetchData } from '../_fetchData'

jest.mock('../_fetchData')

let data = { ta: 'da' }
let path = 'path'

describe('apiClient', () => {
  describe('get', () => {
    beforeEach(() => {
      apiClient.get(path)
    })

    it('calls fetchData with the provided path', () => {
      expect(fetchData).toHaveBeenCalledWith(path, 'GET', null)
    })

    it('calls fetchData with the correct verb', () => {
      expect(fetchData).toHaveBeenCalledWith(expect.any(String), 'GET', expect.any(Object))
    })

    it('calls fetchData with a null body', () => {
      expect(fetchData).toHaveBeenCalledWith(expect.any(String), expect.any(String), null)
    })
  })

  describe('post', () => {
    beforeEach(() => {
      apiClient.post(path, data)
    })

    it('calls fetchData with the provided path', () => {
      expect(fetchData).toHaveBeenCalledWith(path, expect.any(String), expect.any(Object))
    })

    it('calls fetchData with the correct verb', () => {
      expect(fetchData).toHaveBeenCalledWith(expect.any(String), 'POST', expect.any(Object))
    })

    it('calls fetchData with the provided body', () => {
      expect(fetchData).toHaveBeenCalledWith(expect.any(String), expect.any(String), data)
    })
  })

  describe('put', () => {
    beforeEach(() => {
      apiClient.put(path, data)
    })

    it('calls fetchData with the provided path', () => {
      expect(fetchData).toHaveBeenCalledWith(path, expect.any(String), expect.any(Object))
    })

    it('calls fetchData with the correct verb', () => {
      expect(fetchData).toHaveBeenCalledWith(expect.any(String), 'PUT', expect.any(Object))
    })

    it('calls fetchData with the provided body', () => {
      expect(fetchData).toHaveBeenCalledWith(expect.any(String), expect.any(String), data)
    })
  })

  describe('del', () => {
    beforeEach(() => {
      apiClient.del(path)
    })

    it('calls fetchData with the provided path', () => {
      expect(fetchData).toHaveBeenCalledWith(path, expect.any(String), expect.any(Object))
    })

    it('calls fetchData with the correct verb', () => {
      expect(fetchData).toHaveBeenCalledWith(expect.any(String), 'DEL', expect.any(Object))
    })

    it('calls fetchData with a null body', () => {
      expect(fetchData).toHaveBeenCalledWith(expect.any(String), expect.any(String), null)
    })
  })
})
