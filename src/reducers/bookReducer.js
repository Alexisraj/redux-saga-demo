import * as AC from "../constants/bookContstants";

const initial_state = {
  books: false,
  loading: false,
  error: false,
  selectedBook: false,
  showPopup: false,
  totalBooks: false,
  currentPageNo: false,
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
    case AC.SELECTED_BOOK: {
      return {
        ...state,
        selectedBook: action.selectedBook,
        showPopup: true,
      };
    }
    case AC.CLEAR_SELECTION: {
      return { ...state, selectedBook: false, showPopup: false };
    }
    default:
      return { ...state };
  }
};

export default bookReducer;
