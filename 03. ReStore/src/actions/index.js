export const booksRequested = () => {
  return { type: 'BOOKS_REQUESTED' };
};


export const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  };
};
