import * as AC from "../constants/bookContstants";

export function fetchBooks(pageNo) {
  return {
    pageNo,
    type: AC.BOOK_FETCH_REQUEST,
  };
}
export function UpdateSelectedBook(data) {
  return {
    type: AC.SELECTED_BOOK,
    selectedBook: data,
  };
}
export function clearSelection() {
  return {
    type: AC.CLEAR_SELECTION,
  };
}
export function fetchBooksSuccess(books) {
  return { type: AC.BOOK_FETCH_SUCCESS, books };
}
