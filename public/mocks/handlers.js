import { rest } from 'msw';

class Book {
  constructor(id, name) {
    this.name = name;
    this.id = id
  }

  toJSONAPI() {
    return {
      type: 'books',
      id: this.id,
      attributes: {
        name: this.name,
      },
    };
  }
}

const books = [
  new Book(1, 'A Tale of Two Cities'),
  new Book(2, 'Oliver Twist'),
  new Book(3, 'Great Expectations'),
];

export const handlers = [
  rest.get('/books', (_req, res, ctx) => {
    const response = { data: books.map((book) => book.toJSONAPI()) };

    return res(ctx.json(response));
  }),
];
