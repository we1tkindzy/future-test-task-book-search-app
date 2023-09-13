import { takeEvery, put, call, all } from "redux-saga/effects";
import { googleBooksApi } from "services/booksApi";
import { GET_BOOKS_PENDING, GET_MORE_BOOKS_PENDING } from "constants/index";
import {
  getBooksSuccess,
  getBooksFailure,
  getMoreBooksSuccess,
  getMoreBooksFailure,
} from "../actions/actionCreators";

function* getBooks({ payload }: any) {
  try {
    const searchData = payload;

    const { totalItems, items } = yield call(
      googleBooksApi.getBooks,
      searchData
    );

    yield put(getBooksSuccess({ totalItems, items, searchData }));
  } catch (err: any) {
    yield put(getBooksFailure(err.response.data.error));
  }
}

function* getMoreBooks({ payload }: any) {
  try {
    const searchData = payload;

    const { totalItems, items } = yield call(
      googleBooksApi.getBooks,
      searchData
    );

    yield put(getMoreBooksSuccess({ totalItems, items, searchData }));
  } catch (err: any) {
    yield put(getMoreBooksFailure(err.response.data.error));
  }
}

export function volumeListSaga() {
  return all([
    takeEvery(GET_BOOKS_PENDING, getBooks),
    takeEvery(GET_MORE_BOOKS_PENDING, getMoreBooks),
  ]);
}
