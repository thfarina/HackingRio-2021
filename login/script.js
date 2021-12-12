import { setLocalStorage, getLocalStorage } from "./modules/functions.js";
import { BTN, btnLogin, message, id, password } from "./modules/selectores.js";

class User {
  constructor(login, password) {
    this.login = login;
    this.password = password;
  }
}

BTN.addEventListener("click", () => {
  const user = new User(id.value, password.value);
  setLocalStorage(id, user);
});

btnLogin.addEventListener("click", () => {
  let userName = getLocalStorage(id.value);
  if (userName.password === password.value && userName.login === id.value) {
    message.innerHTML = "Login successful";
    id.value = "";
    passwordValidate.value = "";
  } else {
    message.innerHTML = "Login failed";
    id.value = "";
    passwordValidate.value = "";
  }
  id.value = "";
});
