const initialState = {
  loading: true,
  error: null,
  books: [],

  cartItems: [],
  orderTotal: 220
};


const updateCartItems = (cartItems, item, ndx) => {
  if (ndx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, ndx),
    item,
    ...cartItems.slice(ndx + 1)
  ];
};


const updateCartItem = (book, item = {}) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0
  } = item;

  return {
    id,
    title,
    count: count + 1,
    total: total + book.price
  }
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

    case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);

      const itemNdx = state.cartItems.findIndex(({ id }) => id === bookId);
      const item = state.cartItems[itemNdx];

      const newItem = updateCartItem(book, item);

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemNdx)
      }

    default:
      return state;
  }
};
