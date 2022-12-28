import { useState } from "react";
import { TODOS_STORAGE } from "../constants";

export const useStorageListener = (sincronize) => {
  const [storageChange, setStorageChange] = useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === TODOS_STORAGE) {
      console.warn("Hubo cambios en TODO V1");
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };

  return [storageChange, toggleShow];
};
