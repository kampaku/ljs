function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while (isNaN(num));

  if (num === null || num === "") return null;

  return +num;
}
