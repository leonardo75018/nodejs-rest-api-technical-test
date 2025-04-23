export function validatePassLevel(level: number): boolean {
  if (level < 1 || level > 5) {
    return false
  } else {
    return true
  }
}
