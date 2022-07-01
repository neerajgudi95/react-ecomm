import React from "react";
import styles from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { categoryCode, productId } = useParams();

  console.log(categoryCode, productId);

  return <div className={styles.container}>Product Details</div>;
};

export default ProductDetails;
