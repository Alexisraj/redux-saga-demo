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
    cart: state.bookStore.cart,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    fetchBooks: (pageNo) => dispatch(actions.fetchBooks(pageNo)),
    addToCart: (bookId) => dispatch(actions.AddToCart(bookId)),
    removeItem: (bookId) => dispatch(actions.removeInCart(bookId)),
  };
};
const BookContainer = connect(mapStateToProps, mapDispathToProps)(App);
export default BookContainer;
