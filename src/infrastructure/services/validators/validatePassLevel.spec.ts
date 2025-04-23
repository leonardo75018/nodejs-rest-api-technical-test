import { validatePassLevel } from './validatePassLevel'

describe('validatePassLevel', () => {
  it('should return false if the level is less than 1', () => {
    expect(validatePassLevel(0)).toBe(false)
  })

  it('should return false if the level is greater than 5', () => {
    expect(validatePassLevel(6)).toBe(false)
  })

  it('should return true if the level is between 1 and 5', () => {
    expect(validatePassLevel(1)).toBe(true)
    expect(validatePassLevel(3)).toBe(true)
    expect(validatePassLevel(5)).toBe(true)
  })
})
