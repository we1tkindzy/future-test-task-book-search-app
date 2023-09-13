import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_PENDING,
  GET_BOOKS_SUCCESS,
  GET_MORE_BOOKS_FAILURE,
  GET_MORE_BOOKS_PENDING,
  GET_MORE_BOOKS_SUCCESS,
} from "constants/index";
import { DataProps } from "types/index";
import { ErrorInfo } from "react";

interface PayloadProps {
  totalItems: string;
  items: string;
  searchData: DataProps;
}

export const getBooks = ({ searchField, category, page, sort }: DataProps) => ({
  type: GET_BOOKS_PENDING,
  payload: { searchField, category, sort, page },
});

export const getBooksSuccess = (data: PayloadProps) => ({
  type: GET_BOOKS_SUCCESS,
  payload: data,
});

export const getBooksFailure = (error: ErrorInfo) => ({
  type: GET_BOOKS_FAILURE,
  payload: error,
});

export const getMoreBooks = ({
  searchField,
  category,
  page,
  sort,
}: DataProps) => ({
  type: GET_MORE_BOOKS_PENDING,
  payload: { searchField, category, sort, page },
});

export const getMoreBooksSuccess = (data: PayloadProps) => ({
  type: GET_MORE_BOOKS_SUCCESS,
  payload: data,
});

export const getMoreBooksFailure = (error: ErrorInfo) => ({
  type: GET_MORE_BOOKS_FAILURE,
  payload: error,
});
