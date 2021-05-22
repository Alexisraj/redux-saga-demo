import { connect } from "react-redux";
import App from "../App";
import * as actions from "../actoins/bookAction";

const mapStateToProps = (state) => {
  return {
    books: state.bookReducer.books,
    loading: state.bookReducer.loading,
    error: state.bookReducer.error,
    selectedBook: state.bookReducer.selectedBook,
    totalBooks: state.bookReducer.totalBooks,
    showPopup: state.bookReducer.showPopup,
    currentPageNo: state.bookReducer.currentPageNo,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    fetchBooks: (pageNo) => dispatch(actions.fetchBooks(pageNo)),
    updateSelectedBook: (book) => dispatch(actions.UpdateSelectedBook(book)),
    clearSelection: () => dispatch(actions.clearSelection()),
  };
};
const BookContainer = connect(mapStateToProps, mapDispathToProps)(App);
export default BookContainer;
