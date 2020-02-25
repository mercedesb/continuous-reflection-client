import { fetchData } from '../_fetchData'

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
      let response = fetchData('path', method, data)
      expect(response).toEqual(mockJsonPromise)

      process.nextTick(() => {
        global.fetch.mockClear()
        done()
      })
    })
  })

  xdescribe('when the response is not successful', () => {
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

    it('throws an Error', () => {
      expect(() => fetchData('path', method, null)).toThrow()
    })
  })
})
