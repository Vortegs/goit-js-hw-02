function isLoginValid(login, min = 4, max = 16) {
  if (login.length < min || login.length > max) {
    return false;
  }
  return true;
}

function isLoginUnique(allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  }
  return true;
}

function addLogin(allLogins, login) {
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;

  if (isLoginValid(login) === false) {
    message = ERROR;
    return message;
  } else if (isLoginUnique(allLogins, login) === false) {
    message = REFUSAL;
    return message;
  } else allLogins.push(login);
  message = SUCCESS;

  return message;
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
