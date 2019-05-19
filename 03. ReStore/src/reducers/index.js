const initialState = {
  loading: true,
  books: []
};


export default (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
