function truncate(str, num) {
  if (str.length <= num) return str;
  return str.slice(0, num - 1) + '…'
}
