import { call, delay, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actoins/bookAction";
import * as AC from "../constants/bookContstants";
import axios from "axios";

const API_URL = "http://localhost:3000/books?";

function fetchAPI(pageNo) {
  const response = axios.get(`${API_URL}pageNo=${pageNo}`);
  return response;
}

function* fetchBooks(payload) {
  yield delay(4000);
  const pageNo = payload?.pageNo;
  const response = yield call(fetchAPI, pageNo);
  if (response?.data) yield put(actions.fetchBooksSuccess(response?.data));
  else yield put(actions.fetchBooksFailure("Error in Fetching Records..."));
}

function* bookSaga() {
  yield takeLatest(AC.BOOK_FETCH_REQUEST, fetchBooks);
}

export default bookSaga;
