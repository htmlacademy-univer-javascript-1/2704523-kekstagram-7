/* eslint-disable no-unused-vars */

/**
 * Проверяет, не превышает ли строка максимальную длину.
 * @param {string} str - Строка для проверки.
 * @param {number} maxLength - Максимальная длина.
 * @returns {boolean} true, если строка короче или равна maxLength, иначе false.
 */
function isStringWithinLength(str, maxLength) {
  return str.length <= maxLength;
}

/**
 * Проверяет, является ли строка палиндромом (игнорируя регистр и пробелы).
 * @param {string} str - Строка для проверки.
 * @returns {boolean} true, если строка палиндром, иначе false.
 */
function isPalindrome(str) {
  // Нормализуем строку: убираем пробелы и приводим к нижнему регистру
  const normalized = str.replaceAll(' ', '').toLowerCase();

  // Создаём перевёрнутую строку
  let reversed = '';
  for (let i = normalized.length - 1; i >= 0; i--) {
    reversed += normalized[i];
  }

  return normalized === reversed;
}

/**
 * Извлекает все цифры из строки и возвращает их в виде числа.
 * Если цифр нет — возвращает NaN.
 * @param {string|number} input - Строка или число для обработки.
 * @returns {number} Извлечённые цифры в виде числа или NaN.
 */
function extractNumbers(input) {
  // Преобразуем в строку на случай, если пришло число
  const str = String(input);

  // Собираем все цифры
  let digits = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const parsed = parseInt(char, 10);

    if (!Number.isNaN(parsed)) {
      digits += parsed;
    }
  }

  // Если цифр не было — возвращаем NaN
  if (digits === '') {
    return NaN;
  }

  return parseInt(digits, 10);
}
