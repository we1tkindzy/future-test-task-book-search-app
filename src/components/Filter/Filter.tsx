import { SyntheticEvent } from "react";

import "./style.scss";

interface OptionProps {
  name: string;
  value: string;
}

interface FilterProps {
  label: string;
  name: string;
  value: string;
  options: OptionProps[];
  handleOnChange: (e: SyntheticEvent) => void;
}

const Filter = ({
  label,
  name,
  value,
  options,
  handleOnChange,
}: FilterProps) => {
  return (
    <div className="filter">
      <label className="filter__label" htmlFor={name}>
        {label}:
      </label>
      <select
        onChange={handleOnChange}
        value={value}
        className="filter__select"
        name={name}
        id={name}>
        {options.map(({ name, value }, id) => (
          <option key={id + 1} className="filter__option" value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
