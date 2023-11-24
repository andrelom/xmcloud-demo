// This method will rename any property that does not adhere to the Camel Case
// naming convention, in accordance with what is expected in a standard JSON
// object. Example: From "User Name" to "userName".
export default function fixPropertyNames(source: any): any {
  if (source === null || typeof source !== 'object') return source

  if (Array.isArray(source)) {
    return source.map((item) => fixPropertyNames(item))
  }

  const target: any = {}

  for (const key in source) {
    if (!source.hasOwnProperty(key)) continue

    const name = key.replace(/\s+/g, '').replace(/(\w)(\w*)/, (_, first, rest) => `${first.toLowerCase()}${rest}`)

    target[name] = fixPropertyNames(source[key])
  }

  return target
}
