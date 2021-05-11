import { useState } from "react";

const useInputState = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reSet = () => {
    setValue("");
  };
  return [value, handleChange, reSet];
};

export default useInputState;
