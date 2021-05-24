import { useState } from "react";

const useToggle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);
  const Toggle = () => {
    setState(!state);
  };
  return [state, Toggle];
};

export default useToggle;
