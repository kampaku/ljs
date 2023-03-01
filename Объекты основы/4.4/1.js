function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser(); // теряется this

alert(user.ref.name); // ошибка
