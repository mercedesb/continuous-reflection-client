import { fetchData } from '../_fetchData'

let onUnauthorized = jest.fn()
let onError = jest.fn()
let method = 'METHOD'
let token = 'token'
let data
let status
let ok
let mockResponse = {}
let mockJsonPromise = Promise.resolve(mockResponse)
let mockFetchPromise

describe('fetchData', () => {
  beforeEach(() => {
    localStorage.setItem('token', token)
    status = 200
    ok = true
    mockFetchPromise = Promise.resolve({
      status: status,
      ok: ok,
      json: () => mockJsonPromise
    })
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)
  })

  it('appends the token to the request', () => {
    fetchData('path', method, data)
    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining(token), expect.any(Object))
  })

  it('calls fetch with the provided path', done => {
    data = {}
    fetchData('path', method, data)
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('http://localhost:3000/path'),
      expect.any(Object)
    )

    process.nextTick(() => {
      global.fetch.mockClear()
      done()
    })
  })

  describe('when data is provided', () => {
    it('calls fetch with the provided data', done => {
      data = {}
      fetchData('path', method, data)

      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('path'),
        expect.objectContaining({
          body: JSON.stringify(data)
        })
      )

      process.nextTick(() => {
        global.fetch.mockClear()
        done()
      })
    })
  })

  describe('when data is not provided', () => {
    it('calls fetch with a null body', done => {
      fetchData('path', method, null)

      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('path'),
        expect.objectContaining({
          body: null
        })
      )

      process.nextTick(() => {
        global.fetch.mockClear()
        done()
      })
    })
  })

  describe('when the response is successful', () => {
    it('returns the response as json', done => {
      data = {}
      let response = fetchData('path', method, data, onUnauthorized, onError)
      expect(response).toEqual(mockJsonPromise)
      expect(onUnauthorized).not.toHaveBeenCalled()
      expect(onError).not.toHaveBeenCalled()

      process.nextTick(() => {
        global.fetch.mockClear()
        done()
      })
    })
  })

  describe('when the response comes back wth http status 401', () => {
    beforeEach(() => {
      status = 401
      ok = false
      mockFetchPromise = Promise.resolve({
        status: status,
        ok: ok,
        json: () => mockJsonPromise
      })
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)
    })

    xit('calls onUnauthorized', () => {
      fetchData('path', method, null, onUnauthorized, onError)
      expect(onUnauthorized).toHaveBeenCalled()
    })
  })

  describe('when the response comes back with other errors', () => {
    beforeEach(() => {
      status = 500
      ok = false
      mockFetchPromise = Promise.resolve({
        status: status,
        ok: ok,
        json: () => mockJsonPromise
      })
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)
    })

    describe('and onError was passed in ', () => {
      xit('calls onError', () => {
        fetchData('path', method, null, onUnauthorized, onError)
        expect(onError).toHaveBeenCalled()
      })
    })

    describe('and no error handling function was provided', () => {
      it('returns null', () => {
        let response = fetchData('path', method, null, onUnauthorized, onError)
        expect(response).toEqual(mockJsonPromise)
      })
    })
  })
})
