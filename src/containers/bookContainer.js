import { connect } from "react-redux";
import App from "../App";
import * as actions from "../actoins/bookAction";
// import * as Selecters from '../selectors/bookSelector';

const mapStateToProps = (state) => {
  return {
    books: state.bookStore.books,
    loading: state.bookStore.loading,
    error: state.bookStore.error,
    selectedBook: state.bookStore.selectedBook,
    totalBooks: state.bookStore.totalBooks,
    showPopup: state.bookStore.showPopup,
    currentPageNo: state.bookStore.currentPageNo,
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
