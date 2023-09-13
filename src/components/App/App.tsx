import { Route, Routes } from "react-router-dom";
import Header from "components/Header/Header";
import MainPage from "pages/MainPage/MainPage";
import BooksCatalog from "pages/BooksCatalogPage/BooksCatalogPage";
import BookPage from "pages/BookPage/BookPage";
import { AppRoute } from "constants/index";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={AppRoute.MAIN} element={<MainPage />} />
        <Route path={AppRoute.CATALOG} element={<BooksCatalog />} />
        <Route path={AppRoute.BOOK} element={<BookPage />} />
      </Routes>
    </>
  );
};

export default App;
