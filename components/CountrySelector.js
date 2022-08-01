import React, { useState, useMemo } from "react";
import countryList from "react-select-country-list";
import Select from "react-select";

function CountrySelector() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <Select
      options={options}
      placeholder="UK"
      value={value}
      onChange={changeHandler}
    />
  );
}

export default CountrySelector;
