import { useApiUrl } from '../useApiUrl'

describe('useApiUrl', () => {
  describe('with a query string parameter', () => {
    it('appends the token to the query string with an ampersand', () => {
      expect(useApiUrl('path?query=string')).toEqual(expect.stringMatching(/&token=/))
    })
  })

  describe('without a query string parameter', () => {
    it('appends the token to the query string with a question mark', () => {
      expect(useApiUrl('path')).toEqual(expect.stringMatching(/\?token=/))
    })
  })
})
