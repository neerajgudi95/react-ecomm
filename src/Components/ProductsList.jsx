import React from "react";
import ProductTile from "../UI/ProductTile";
import styles from "./ProductsList.module.css";
const ProductsList = ({ productsList }) => {
  return (
    <div className={styles.prodList}>
      <ul className={styles.prodList__items}>
        {productsList.map((product) => {
          return (
            <li key={product.item.tcin} className={styles.prodItem}>
              <ProductTile product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
