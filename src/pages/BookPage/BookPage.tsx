import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import EmptyCoverImg from "assets/empty-cover.png";
import { volumeListStateProps, CardProps } from "types/index";
import { AppRoute } from "constants/index";

import "./style.scss";

const BookPage = () => {
  const { books } = useSelector(
    (state: volumeListStateProps) => state.volumeList
  );

  let { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (books?.length === 0) {
      navigate(AppRoute.MAIN);
    }
  }, [books, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentBook = books.find((e: CardProps) => e.id === id);

  const authors = currentBook?.volumeInfo.authors?.join(", ");
  const img = currentBook?.volumeInfo.imageLinks?.thumbnail;
  const title = currentBook?.volumeInfo.title;
  const categories = currentBook?.volumeInfo.categories;
  const description = currentBook?.volumeInfo.description;

  const handleOnClick = () => {
    navigate(AppRoute.CATALOG);
  };

  return (
    <div className="book-page">
      <div className="book-page__wrapper">
        <div className="book-page__img-wrapper">
          <img
            className={`book-page__img ${img && "book-page__img--shadow"}`}
            src={img || EmptyCoverImg}
            alt={title}
          />
        </div>

        <div className="book-page__info">
          <p className="book-page__categories">{categories}</p>
          <h3 className="book-page__title">{title}</h3>
          <div className="book-page__authors">{authors}</div>
          <p
            className={`book-page__description ${
              description && "book-page__description--border"
            }`}>
            {description}
          </p>
        </div>
      </div>

      <div className="book-page__button-wrapper">
        <button
          type="button"
          onClick={handleOnClick}
          className="book-page__button">
          Back to catalog
        </button>
      </div>
    </div>
  );
};

export default BookPage;
