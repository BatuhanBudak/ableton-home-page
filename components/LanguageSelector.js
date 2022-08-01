import React from "react";
import Select from "react-select";

const options = [
  { value: "English", label: "English" },
  { value: "Türkçe", label: "Turkish" },
  { value: "Deutsch", label: "Deutsch" },
];

const LanguageSelector = () => (
  <Select placeholder="English" options={options} />
);

export default LanguageSelector;
