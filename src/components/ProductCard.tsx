import React from 'react'
import { createContext, CSSProperties } from "react";
import { useProduct } from "../hooks/useProduct";
import {
  initialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export interface Props {
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  initialValues?: initialValues;
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  style?: CSSProperties;
  value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  className,
  initialValues,
  onChange,
  product,
  style,
  value,
}: Props) => {
  const { counter, isMaxCountReached, maxCount, increaseBy, reset } =
    useProduct({
      initialValues,
      product,
      value,
      onChange,
    });

  return (
    <Provider value={{ counter, maxCount, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
