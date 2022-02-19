// провалидировать и получить нужные книжки

import * as yup from 'yup';

const books1 = [
    {
        name: 'besi',
        author: 'dostoevski',
        pagesCount: 100,
        genre: 'drama',
        link: 'https://some.ru',
    },
    {
        name: 'book',
        author: 'author',
    },
    {
        name: 'book 2',
        author: 'author 2',
        genre: 'fiction',
        pagesCount: '50 страниц', // должно быть числом
    },
    {
        name: 'book 3',
        author: 'author 3',
        genre: 'non fiction',
        pagesCount: -5,
    },
];

const books2 = [
    {
        name: 'besi',
        author: 'dostoevski',
        pagesCount: 100,
        genre: 'drama',
        link: 'верхняя правая полка', // должен быть url
    },
    {
        name: 'book 2',
        author: 'author 2',
    },
];

const books3 = [
    {
        name: 'besi',
        author: 'dostoevski',
        pagesCount: 100,
        genre: 'drama',
        link: 'https://some.ru',
    },
    {
        name: 'book',
        author: 'author',
        genre: 'fiction', // некорректный жанр
    },
    {
        name: 'book 2',
        author: 'author 2',
        genre: 'fantasy',
        pagesCount: 50,
    },
];

const books4 = [
    {
        name: 'besi',
        author: 'dostoevski',
        pagesCount: 100,
        genre: 'drama',
        link: 'https://some.ru',
    },
    {
        name: 'voina i mir',
        author: 'lev tolstoy',
        pagesCount: 1000,
        genre: 'drama',
        link: '', // не может быть пустой строкой
    },
];

const genres = [
    'drama', 'horror', 'fantasy', 'classic',
];

const bookSchema = yup.object().shape({
    name: yup.string().required(),
    author: yup.string().required(),
    pagesCount: yup.number().notRequired().integer().positive().min(1),
    link: yup.string().url().min(1),
    genre: yup.string().oneOf(genres)
});

const getInvalidBooks = (coll) => {
    return coll.filter(item => !bookSchema.isValidSync(item))
}

const filtered = getInvalidBooks(books1)  //?


