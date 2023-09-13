import Book from "components/Book/Book";
import { CardProps } from "types";

import "./style.scss";

const CardsGrid = ({ books }: { books: CardProps[] }) => {
  return (
    <ul className="books-list">
      {books?.length > 0 &&
        books.map((el: CardProps, id: number) => {
          const authors = el.volumeInfo.authors?.join(", ");
          const img = el.volumeInfo.imageLinks?.thumbnail;
          const title = el.volumeInfo.title;
          const firstCategory = el.volumeInfo.categories?.[0];

          return (
            <Book
              key={el.id + id}
              id={el.id}
              img={img}
              title={title}
              firstCategory={firstCategory}
              authors={authors}
            />
          );
        })}
    </ul>
  );
};

export default CardsGrid;
