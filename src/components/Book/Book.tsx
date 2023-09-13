import { Link } from "react-router-dom";
import EmptyCoverImg from "assets/empty-cover.png";
import getBookPath from "utils/getBookPath";

import "./style.scss";

interface BookProps {
  id: string;
  img?: string;
  title?: string;
  firstCategory?: string;
  authors?: string;
}

const Book = ({ id, img, title, firstCategory, authors }: BookProps) => {
  return (
    <li className="book">
      <Link to={getBookPath(id)} className="book__wrapper">
        <img
          className={`book__img ${img && "book__img--shadow"}`}
          src={img || EmptyCoverImg}
          alt={title}
        />

        <p className="book__category">{firstCategory}</p>
        <p className="book__title">{title}</p>
        <span className="book__author">{authors}</span>
      </Link>
    </li>
  );
};

export default Book;
