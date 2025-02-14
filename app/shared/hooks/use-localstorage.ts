"use client";

import { useState, useEffect, useCallback } from "react";

const IS_SERVER = typeof window === "undefined";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prevValue: T) => T)) => void] => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(
        `다음 키에 대한 스토리지 값을 불러오는 중 에러 발생 "${key}":`,
        error
      );
      setStoredValue(initialValue);
    }
  }, [key, initialValue]);

  const setValue = useCallback(
    (value: T | ((prevValue: T) => T)) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;

        setStoredValue(valueToStore);

        if (!IS_SERVER) {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.error(
          `다음 키에 대한 스토리지 값 설정 중 에러 발생 "${key}":`,
          error
        );
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
};
