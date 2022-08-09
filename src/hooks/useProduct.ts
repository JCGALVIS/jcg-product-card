import { useEffect, useRef, useState } from "react";
import { initialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface Props {
  initialValues?: initialValues;
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  value?: number;
}

export const useProduct = ({
  initialValues,
  onChange,
  product,
  value = 0,
}: Props) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount)
      newValue = Math.min(newValue, initialValues.maxCount);

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(initialValues?.count || value);
  }, [initialValues?.count, value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
