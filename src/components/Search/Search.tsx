import SerchForm from "components/SerchForm/SerchForm";

import "./style.scss";

const Serch = () => {
  return (
    <div className="search">
      <h1 className="search__title">Search for books</h1>

      <SerchForm />
    </div>
  );
};

export default Serch;
