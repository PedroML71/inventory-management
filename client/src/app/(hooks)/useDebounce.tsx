import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, steDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      steDebouncedValue(value);
    }, delay || 500);

    return () => {
      clearInterval(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
