export function printNumericValue(val: string) {
  const floatIndex = val.split('.');

  if (floatIndex[0] !== undefined && floatIndex[1] !== undefined) {
    return `${parseFloat(floatIndex[0]).toString()}.${floatIndex[1]}`;
  }

  return parseFloat(val).toLocaleString();
}
