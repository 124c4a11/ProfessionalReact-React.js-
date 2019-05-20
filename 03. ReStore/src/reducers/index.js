import updateBookList from './bookList';
import updateShoppingCart from './shoppingCart';


export default (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};
