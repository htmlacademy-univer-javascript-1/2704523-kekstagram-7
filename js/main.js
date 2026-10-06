/* eslint-disable no-unused-vars */

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

// Набор предложений для комментариев
const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Набор имён для комментаторов
const COMMENT_NAMES = [
  'Александр', 'Мария', 'Иван', 'Елена', 'Дмитрий', 'Ольга',
  'Сергей', 'Анна', 'Павел', 'Наталья', 'Андрей', 'Екатерина'
];

// Набор описаний для фотографий
const PHOTO_DESCRIPTIONS = [
  'Красивый закат на море',
  'Городские огни ночью',
  'Лесная прогулка',
  'Встреча с друзьями',
  'Утренний кофе',
  'Путешествие в горы',
  'Домашний питомец',
  'Весенние цветы',
  'Зимний пейзаж',
  'Вкусный обед',
  'Спортивные достижения',
  'Музыкальный концерт',
  'Творческий вечер',
  'Отдых на природе',
  'Рабочий процесс',
  'Семейный праздник',
  'Учёба в универе',
  'Новая покупка',
  'Летний отдых',
  'Вечер с книгой',
  'Прогулка по парку',
  'Готовка дома',
  'Игры с друзьями',
  'Первый снег',
  'Автомобильное путешествие'
];

/**
 * Генерирует случайный комментарий с уникальным идентификатором.
 * @param {number} commentId - Уникальный идентификатор комментария.
 * @returns {Object} Объект комментария.
 */
function generateComment(commentId) {
  const avatarNumber = getRandomInteger(1, 6);
  return {
    id: commentId,
    avatar: `img/avatar-${avatarNumber}.svg`,
    message: getRandomArrayElement(COMMENT_MESSAGES),
    name: getRandomArrayElement(COMMENT_NAMES)
  };
}

/**
 * Генерирует массив комментариев.
 * @param {number} count - Количество комментариев.
 * @param {number} startId - Начальный идентификатор для комментариев.
 * @returns {Array} Массив объектов комментариев.
 */
function generateComments(count, startId) {
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push(generateComment(startId + i));
  }
  return comments;
}

/**
 * Генерирует один объект фотографии.
 * @param {number} id - Идентификатор фотографии.
 * @param {number} commentIdCounter - Счётчик идентификаторов комментариев.
 * @returns {Object} Объект фотографии.
 */
function generatePhoto(id, commentIdCounter) {
  const commentCount = getRandomInteger(0, 30);
  const comments = generateComments(commentCount, commentIdCounter);
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: PHOTO_DESCRIPTIONS[id - 1],
    likes: getRandomInteger(15, 200),
    comments: comments
  };
}

/**
 * Генерирует массив из 25 сгенерированных объектов фотографий.
 * @returns {Array} Массив из 25 объектов фотографий.
 */
function generatePhotos() {
  const photos = [];
  let commentId = 1;

  for (let i = 1; i <= 25; i++) {
    const commentCount = getRandomInteger(0, 30);
    const comments = generateComments(commentCount, commentId);
    commentId += commentCount;

    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: PHOTO_DESCRIPTIONS[i - 1],
      likes: getRandomInteger(15, 200),
      comments: comments
    });
  }

  return photos;
}
