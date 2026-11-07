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

/**
 * Преобразует строку времени вида 'часы:минуты' в количество минут с начала суток.
 * @param {string} time - Время в формате 'HH:MM' или 'H:M'.
 * @returns {number} Количество минут с начала суток.
 */
function parseTimeToMinutes(time) {
  const parts = time.split(':');
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  return hours * 60 + minutes;
}

/**
 * Проверяет, укладывается ли встреча в рамки рабочего дня.
 * @param {string} workStart - Время начала рабочего дня ('HH:MM' или 'H:M').
 * @param {string} workEnd - Время окончания рабочего дня ('HH:MM' или 'H:M').
 * @param {string} meetingStart - Время начала встречи ('HH:MM' или 'H:M').
 * @param {number} duration - Длительность встречи в минутах.
 * @returns {boolean} true, если встреча укладывается в рабочий день, иначе false.
 */
function isMeetingWithinWorkingHours(workStart, workEnd, meetingStart, duration) {
  const startWorkMinutes = parseTimeToMinutes(workStart);
  const endWorkMinutes = parseTimeToMinutes(workEnd);
  const startMeetingMinutes = parseTimeToMinutes(meetingStart);
  const endMeetingMinutes = startMeetingMinutes + duration;

  return startMeetingMinutes >= startWorkMinutes && endMeetingMinutes <= endWorkMinutes;
}
