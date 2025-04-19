import { AppError } from '../utils'

export function validatePassLevel(level: number): boolean {
  if (level < 1 || level > 5) {
    false
  }
  return true
}
