import * as AC from "../constants/bookContstants";

export function fetchBooks(pageNo) {
  return {
    pageNo,
    type: AC.BOOK_FETCH_REQUEST,
  };
}
export function AddToCart(bookId) {
  return {
    type: AC.ADD_TO_CART,
    bookId: bookId,
  };
}
export function removeInCart(bookId) {
  return {
    type: AC.REMOVE_FROM_CART,
    bookId: bookId,
  };
}
export function fetchBooksSuccess(books) {
  return { type: AC.BOOK_FETCH_SUCCESS, books };
}
export function fetchBooksFailure(message) {
  return { type: AC.BOOK_FETCH_FAILURE, message };
}
