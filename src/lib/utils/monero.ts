
export const atomicstr = (atomic: number) => (atomic * 1e-12).toString(10);

export const atomic2dec = (atomic: number, decimals: number) => {
  const str = atomicstr(atomic)
  return str.slice(0, str.indexOf('.') + 1 + decimals)

}