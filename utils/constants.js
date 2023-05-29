const regExUrl = /https?:\/\/(www\.)?[a-zA-Z0-9-]{1,100}\.[a-zA-Z]{1,8}[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*/;

const badRequestMessage = 'Переданы некорректные данные';
const notFoundMessage = 'Данные не найдены';
const forbiddenMessage = 'Нет прав для удаления фильма';
const conflictMessage = 'Пoльзователь уже зарегистрирован';
const unauthorizedMessage = 'Необходима авторизация';
const serverErrorMessage = 'На сервере произошла ошибка';
const badFormatMessage = 'Неверный формат данных';

module.exports = {
  regExUrl,
  badRequestMessage,
  notFoundMessage,
  forbiddenMessage,
  conflictMessage,
  unauthorizedMessage,
  serverErrorMessage,
  badFormatMessage,
};
