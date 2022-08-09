import React from 'react'
import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";

import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ className, img, style }: Props) => {
  const { product } = useContext(ProductContext);

  const imgToShow = img ? img : product.img ? product.img : noImage;

  return (
    <img
      alt="Product"
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      style={style}
    />
  );
};
