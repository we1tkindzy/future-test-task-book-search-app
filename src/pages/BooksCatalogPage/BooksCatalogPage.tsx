import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "components/Loader/Loader";
import BooksList from "components/BooksList/BooksList";
import { getMoreBooks } from "store/actions/actionCreators";
import { MAX_RESULTS, AppRoute } from "constants/index";
import { volumeListStateProps } from "types/index";

import "./style.scss";

const BooksCatalogPage = () => {
  const { isLoading, isLoadingButton, total, books, searchData } = useSelector(
    (state: volumeListStateProps) => state.volumeList
  );

  const currentPage = searchData.page;
  const nextPage = currentPage + 1;
  const possibleCount = nextPage * MAX_RESULTS;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && books?.length === 0) {
      navigate(AppRoute.MAIN, { replace: true });
    }
  }, [books, isLoading, navigate]);

  const handleOnClick = () => {
    dispatch(getMoreBooks({ ...searchData, page: nextPage }));
  };

  return (
    <div className="books-catalog">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <p className="books-catalog__count">Found {total} results</p>

          <BooksList books={books} />

          <div className="books-catalog__button-wrapper">
            {total > possibleCount && (
              <>
                {isLoadingButton ? (
                  <Loader />
                ) : (
                  <button
                    className="books-catalog__button"
                    onClick={handleOnClick}>
                    Load more
                  </button>
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default BooksCatalogPage;
