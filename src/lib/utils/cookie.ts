export const parseCookie = (str) => {
  const result = {}
  for (const cookie of str.split(';')) {
    const [name, value] = cookie.trim().split('=')
    result[name] = value
  }
  return result
}
