
export const atomicstr = (atomic: number) => (atomic * 1e-12).toString(10);

export const atomic2dec = (atomic: number, decimals: number) => {
  const str = atomicstr(atomic)
  return str.slice(0, str.indexOf('.') + 1 + decimals)

}

export const dec2atomic = (dec: string | number) => typeof dec === 'string' ? parseFloat(dec) * 1e12 : dec * 1e12

export function shortenAddress (address: string, chars = 6) {
  return (
    address.substring(0, chars) + '...' + address.substring(address.length - chars)
  );
}
