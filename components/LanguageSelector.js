import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "English", label: "English" },
  { value: "Türkçe", label: "Turkish" },
  { value: "Deutsch", label: "Deutsch" },
];

function LanguageSelector() {
  const [selectedOption, setSelectedOption] = useState("English");

  return (
    <Select
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
    />
  );
}

export default LanguageSelector;
