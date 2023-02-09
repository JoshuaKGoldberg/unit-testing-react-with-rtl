import { useCallback, useEffect, useState } from "react";

import { tryParse } from "../libs/tryParse";

/**
 * @param {string} key Key to store in localStorage.
 * @param {*} blankValue Blank value to use before mounting.
 * @param {*} [initialValue] Value to fill in if not already stored.
 * @returns {[*, Function]} Item and a function to update it.
 */
export function useLocalStorageItem(
  key,
  blankValue,
  initialValue = blankValue
) {
  const [item, setItem] = useState(blankValue);

  useEffect(() => {
    setItem(tryParse(localStorage.getItem(key)) ?? initialValue);
  }, [initialValue, key]);

  const updateItem = useCallback(
    (value) => {
      setItem(value);
      localStorage.setItem(key, JSON.stringify(value)); // 🤔
    },
    [key]
  );

  return [item, updateItem];
}
