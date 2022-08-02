import React, { useState, useId } from "react";
import Select from "react-select";
const options = [
  { value: "Turkey", label: "Turkey" },
  { value: "UK", label: "UK" },
  { value: "Germany", label: "Germany" },
  { value: "USA", label: "USA" },
  { value: "India", label: "India" },
  { value: "Iraq", label: "Iraq" },
  { value: "Syria", label: "Syria" },
  { value: "Georgia", label: "Georgia" },
  { value: "Greece", label: "Greece" },
  { value: "Bulgaria", label: "Bulgaria" },
];

function CountrySelector() {
  const [value, setValue] = useState("");

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <Select
      options={options}
      defaultValue={"Turkey"}
      value={value}
      onChange={changeHandler}
      instanceId={useId()}
    />
  );
}

export default CountrySelector;
