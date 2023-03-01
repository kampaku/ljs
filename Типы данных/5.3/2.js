const checkSpam = (str) =>
  str
    .split(" ")
    .some(
      (word) =>
        word.toLowerCase().includes("viagra") ||
        word.toUpperCase().includes("XXX")
    );
