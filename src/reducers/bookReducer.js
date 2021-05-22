import * as AC from "../constants/bookContstants";

const initial_state = {
  books: false,
  loading: false,
  error: false,
  selectedBook: false,
  totalBooks: false,
};
const bookReducer = (state = initial_state, action) => {
  switch (action.type) {
    case AC.BOOK_FETCH_REQUEST:
      return { ...state, loading: true };
    case AC.BOOK_FETCH_SUCCESS: {
      let prevBooks = state.books;
      if (!prevBooks) prevBooks = [];
      const newCollection = prevBooks.concat(action.books);
      return {
        ...state,
        books: newCollection,
        totalBooks: newCollection.length,
        loading: false,
      };
    }
    case AC.BOOK_FETCH_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    }
    case AC.SELECTED_BOOK: {
      return {
        ...state,
        selectedBook: action.selectedBook,
      };
    }
    case AC.CLEAR_SELECTION: {
      return { ...state, selectedBook: false };
    }
    default:
      return { ...state };
  }
};

export default bookReducer;
