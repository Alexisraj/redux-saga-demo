import { delay, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actoins/bookAction";
import * as AC from "../constants/bookContstants";

import data from "./books.json";

function filterJson(filterValue) {
  let filteredData = [];
  if (data && filterValue) {
    filteredData = data.filter((b) => b.pageNo === filterValue);
  }
  return filteredData;
}

function* fetchBooks(payload) {
  yield delay(5000);
  const newData = filterJson(payload.pageNo);
  if (newData) yield put(actions.fetchBooksSuccess(newData));
  else
    yield put(
      actions.fetchBooksFailure({ message: "Error in Fetching Records..." })
    );
}

function* bookSaga() {
  yield takeLatest(AC.BOOK_FETCH_REQUEST, fetchBooks);
}

export default bookSaga;
