/**
 * Генерирует случайное целое число в диапазоне [min, max].
 * @param {number} min - Минимальное значение.
 * @param {number} max - Максимальное значение.
 * @returns {number} Случайное целое число.
 */
function getRandomInteger(min, max) {
  const lower = Math.ceil(min);
  const upper = Math.floor(max);
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

/**
 * Генерирует случайный элемент из массива.
 * @param {Array} items - Массив элементов.
 * @returns {*} Случайный элемент массива.
 */
function getRandomArrayElement(items) {
  return items[getRandomInteger(0, items.length - 1)];
}

export { getRandomInteger, getRandomArrayElement };
