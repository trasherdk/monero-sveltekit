export const parseCookie = (str = ''): Record<string, unknown> => {
  const result = {}
  if (str === '') return result

  for (const cookie of str.split(';')) {
    const [name, value] = cookie.trim().split('=')
    result[name] = value
  }
  return result
}
