import { useState, SyntheticEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchIcon from "assets/icons/icon-search.svg";
import Filter from "components/Filter/Filter";
import { CategoryOptions, SortOptions } from "constants/index";
import { getBooks } from "../../store/actions/actionCreators";
import { AppRoute } from "constants/index";

import "./style.scss";

const SerchForm = () => {
  const initialValues = {
    searchField: "",
    category: "",
    sort: "Relevance",
    page: 0,
  };

  const [values, setValues] = useState(initialValues);
  const [isInvalid, setIsInvalid] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleOnChange = (e: SyntheticEvent) => {
    const { target } = e;
    const value = (target as HTMLButtonElement).value;
    const name = (target as HTMLButtonElement).name;

    setValues({ ...values, [name]: value });

    setIsInvalid(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (values.searchField === "") {
      setIsInvalid(true);

      return;
    }

    dispatch(getBooks(values));

    navigate(AppRoute.CATALOG);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__search-input">
        <label className="visually-hidden" htmlFor="searchField">
          Search
        </label>

        <input
          className="search-form__input"
          onChange={handleOnChange}
          type="text"
          name="searchField"
          id="searchField"
          placeholder="Search"
          value={values.searchField}
        />

        {isInvalid && (
          <span className="search-form__error">must be filled</span>
        )}

        <button className="search-form__submit" type="submit">
          <img src={SearchIcon} width="30" height="30" alt="search" />
        </button>
      </div>

      <div className="search-form__filters">
        <Filter
          label="Categories"
          name="category"
          value={values.category}
          options={CategoryOptions}
          handleOnChange={handleOnChange}
        />

        <Filter
          label="Sorting By"
          name="sort"
          value={values.sort}
          options={SortOptions}
          handleOnChange={handleOnChange}
        />
      </div>
    </form>
  );
};

export default SerchForm;
