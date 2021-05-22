import { connect } from "react-redux";
import App from "../App";
import * as actions from "../actoins/bookAction";

const mapStateToProps = (state) => {
  return {
    books: state.books,
    selectedBook: state.selectedBook,
    totalBooks: state.totalBooks,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    fetchBooks: (pageNo) => dispatch(actions.fetchBooks(pageNo)),
    updateSelectedBook: (bookId) =>
      dispatch(actions.UpdateSelectedBook(bookId)),
    clearSelection: () => dispatch(actions.clearSelection()),
  };
};
const BookContainer = connect(mapStateToProps, mapDispathToProps)(App);
export default BookContainer;