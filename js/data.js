import { getRandomInteger, getRandomArrayElement } from './util.js';

const PHOTOS_COUNT = 25;

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const COMMENT_NAMES = [
  'Александр', 'Мария', 'Иван', 'Елена', 'Дмитрий', 'Ольга',
  'Сергей', 'Анна', 'Павел', 'Наталья', 'Андрей', 'Екатерина'
];

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
 * Генерирует массив из сгенерированных объектов фотографий.
 * @param {number} [count=PHOTOS_COUNT] - Количество фотографий.
 * @returns {Array} Массив объектов фотографий.
 */
function generatePhotos(count = PHOTOS_COUNT) {
  const photos = [];
  let commentId = 1;

  for (let i = 1; i <= count; i++) {
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

export { generatePhotos };
