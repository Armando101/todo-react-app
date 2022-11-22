import { useEffect } from "react";
import { useState } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem = initialValue;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch {
        setError(true);
      }
    }, 3000);
  }, [initialValue, itemName]);

  const savedItem = (newItem) => {
    try {
      setItem(newItem);
      localStorage.setItem(itemName, JSON.stringify(newItem));
    } catch {
      setError(true);
    }
  };

  return { item, savedItem, loading, error };
}
