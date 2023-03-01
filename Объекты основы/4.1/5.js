function multiplyNumeric(obj) {
  for (let [key, val] of Object.entries(obj)) {
    if (typeof val == "number") {
      obj[key] *= 2;
    }
  }
}
