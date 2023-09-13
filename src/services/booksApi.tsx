import axios from "axios";
import { MAX_RESULTS } from "constants/index";
import { DataProps } from "types";

export const googleBooksApi = {
  async getBooks({
    searchField,
    category = "",
    sort = "relevance",
    page = 0,
  }: DataProps) {
    const startIndex = MAX_RESULTS * page;

    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchField}+subject:${category}&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${sort}&key=AIzaSyBuS2wBRQiWOi3LvQiunmfF4B9fTZWsRec`
    );

    return response.data;
  },
};
