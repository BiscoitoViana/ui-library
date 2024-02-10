import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay: number): T => {
  const [debounced, setDebounced] = useState<T>(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounced(value)
    }, delay)

    return () => clearTimeout(timeout)
  }, [value, delay])

  return debounced
}

export default useDebounce