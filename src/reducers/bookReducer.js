import * as AC from "../constants/bookContstants";

const initial_state = {
  books: false,
  loading: false,
  error: false,
  selectedBook: false,
  showPopup: false,
  totalBooks: false,
  currentPageNo: false,
  cart: false,
};
const bookReducer = (state = initial_state, action) => {
  switch (action.type) {
    case AC.BOOK_FETCH_REQUEST:
      return { ...state, loading: true };
    case AC.BOOK_FETCH_SUCCESS: {
      let prevBooks = state.books;
      if (!prevBooks) prevBooks = [];
      const newCollection = prevBooks.concat(action.books);
      const lastPageNo = newCollection[newCollection.length - 1].pageNo;

      return {
        ...state,
        books: newCollection,
        totalBooks: newCollection.length,
        loading: false,
        currentPageNo: lastPageNo,
      };
    }
    case AC.BOOK_FETCH_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    }
    case AC.ADD_TO_CART: {
      let prevCart = state.cart;
      if (!prevCart) prevCart = [];
      return {
        ...state,
        cart: prevCart.concat(action.bookId),
      };
    }
    case AC.REMOVE_FROM_CART: {
      let prevCart = state.cart;

      prevCart = prevCart.filter((c) => c !== action.bookId);

      return { ...state, cart: prevCart };
    }
    default:
      return { ...state };
  }
};

export default bookReducer;
