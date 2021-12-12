import { BTN, btnLogin, message, id, password } from "./selectores.js";

function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export { setLocalStorage, getLocalStorage };
