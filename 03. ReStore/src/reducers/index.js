const initialState = {
  loading: true,
  error: null,
  books: [],

  cartItems: [
    {
      id: 1,
      title: 'Book 1',
      count: 3,
      total: 150
    },
    {
      id: 2,
      title: 'Book 2',
      count: 2,
      totla: 70
    }
  ],

  orderTotal: 220
};


export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
