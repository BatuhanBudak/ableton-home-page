import { useState, useId } from "react";
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
      instanceId={useId()}
    />
  );
}

export default LanguageSelector;
