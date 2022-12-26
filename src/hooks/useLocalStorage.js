import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState([...initialValue]);
  const [sincronizedItem, setSincronizedItem] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // eslint-disable-next-line
  const defaultValue = useMemo(() => initialValue, []);

  useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem = [];

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(defaultValue));
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);
      }, 1500);
    } catch {
      setError(true);
    }
    // eslint-disable-next-line
  }, [defaultValue, sincronizedItem]);

  const savedItem = (newItem) => {
    try {
      setItem(newItem);
      localStorage.setItem(itemName, JSON.stringify(newItem));
    } catch {
      setError(true);
    }
  };

  const sincronize = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

  return { item, savedItem, loading, error, sincronize };
}
