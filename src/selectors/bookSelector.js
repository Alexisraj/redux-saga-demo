import { createSelector } from "reselect";

export const booksSelector = (state) => state.get("bookStore");

export const bookSelecter = createSelector(
  booksSelector,
  (bookStore) => bookStore["books"]
);
export const loadingSelecter = createSelector(
  booksSelector,
  (bookStore) => bookStore["loading"]
);
export const errorSelecter = createSelector(
  booksSelector,
  (bookStore) => bookStore["error"]
);
export const selectedBookSelecter = createSelector(
  booksSelector,
  (bookStore) => bookStore["selectedBook"]
);
export const totalBooksSelecter = createSelector(
  booksSelector,
  (bookStore) => bookStore["totalBooks"]
);
export const showPopupSelecter = createSelector(
  booksSelector,
  (bookStore) => bookStore["showPopup"]
);
export const currentPageNoSelecter = createSelector(
  booksSelector,
  (bookStore) => bookStore["currentPageNo"]
);
