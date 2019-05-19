const initialState = {
  loading: true,
  books: [],
  error: null
};


export default (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_REQUESTED':
      return {
        books: [],
        loading: true,
        error: null
      };

    case 'BOOKS_LOADED':
      return {
        books: action.payload,
        loading: false,
        error: null
      };

    case 'BOOKS_ERROR':
      return {
        books: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
