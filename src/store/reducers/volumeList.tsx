import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_PENDING,
  GET_BOOKS_SUCCESS,
  GET_MORE_BOOKS_FAILURE,
  GET_MORE_BOOKS_PENDING,
  GET_MORE_BOOKS_SUCCESS,
} from "constants/index";
import { ReducerProps } from "types/index";

const initialState = {
  isLoading: false,
  isLoadingButton: false,
  books: [],
  total: 0,
  error: null,
  searchData: {},
};

const volumeListReducer = (
  state = initialState,
  { type, payload }: ReducerProps
) => {
  switch (type) {
    case GET_BOOKS_PENDING:
      return { ...state, isLoading: true };

    case GET_MORE_BOOKS_PENDING:
      return { ...state, isLoadingButton: true };

    case GET_MORE_BOOKS_SUCCESS:
      return {
        ...state,
        isLoadingButton: false,
        searchData: payload.searchData,
        books: [...state.books, ...payload.items],
        error: null,
      };

    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        total: payload.totalItems,
        searchData: payload.searchData,
        books: payload.items,
        error: null,
      };

    case GET_BOOKS_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };

    case GET_MORE_BOOKS_FAILURE:
      return {
        ...state,
        error: payload,
        isLoadingButton: false,
      };

    default:
      return state;
  }
};

export default volumeListReducer;
