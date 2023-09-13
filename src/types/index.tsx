export interface DataProps {
  searchField: string;
  category: string;
  page: number;
  sort: string;
}

export interface CardProps {
  id: string;
  volumeInfo: {
    authors?: string[];
    imageLinks: {
      thumbnail?: string;
    };
    title?: string;
    categories?: string[];
    description?: string;
  };
}

export interface BooksProps {
  items: CardProps[];
  searchData: DataProps;
  totalItems: number;
}

export interface ReducerProps {
  type: string;
  payload: BooksProps;
}

export interface volumeListStateProps {
  volumeList: {
    isLoading: boolean;
    isLoadingButton: boolean;
    total: number;
    books: CardProps[];
    searchData: DataProps;
  };
}
