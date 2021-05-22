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
  // console.log("saga called", payload.pageNo);
  yield delay(5000);
  const newData = filterJson(payload.pageNo);
  yield put(actions.fetchBooksSuccess(newData));
}

function* bookSaga() {
  yield takeLatest(AC.BOOK_FETCH_REQUEST, fetchBooks);
}

export default bookSaga;
