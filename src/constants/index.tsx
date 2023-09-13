export const MAX_RESULTS = 12;

export const GET_BOOKS_PENDING = "GET_BOOKS_PENDING";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE";

export const GET_MORE_BOOKS_PENDING = "GET_MORE_BOOKS_PENDING";
export const GET_MORE_BOOKS_SUCCESS = "GET_MORE_BOOKS_SUCCESS";
export const GET_MORE_BOOKS_FAILURE = "GET_MORE_BOOKS_FAILURE";

export const CategoryOptions = [
  { name: "All", value: "" },
  { name: "Art", value: "Art" },
  { name: "Biography", value: "Biography" },
  { name: "Computers", value: "Computers" },
  { name: "History", value: "History" },
  { name: "Medical", value: "Medical" },
  { name: "Poetry", value: "Poetry" },
];

export const SortOptions = [
  { name: "Relevance", value: "Relevance" },
  { name: "Newest", value: "Newest" },
];

export const AppRoute = {
  MAIN: "/",
  CATALOG: "/catalog",
  BOOK: `/book/:id`,
};
