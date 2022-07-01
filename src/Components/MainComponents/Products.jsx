import React, { useState, useEffect, useCallback } from "react"; //
import styles from "./Products.module.css";
import { options, getProductsList } from "../../Utils/endPoints";
import { useParams } from "react-router-dom";
import ProductsLoader from "../../Loaders/ProductsLoader";
import ProductsList from "../ProductsList";

const Products = () => {
  const { categoryCode } = useParams();
  const [productsList, setProductsList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const getProducts = useCallback(async () => {
    try {
      setIsFetching(true);
      const response = await fetch(getProductsList(categoryCode), options);
      const { data } = await response.json();
      setProductsList(data.search.products);
      setIsFetching(false);
    } catch (error) {
      console.log(error.message);
    }
  }, [categoryCode]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className={styles.container}>
      {isFetching ? (
        <ProductsLoader />
      ) : (
        <ProductsList productsList={productsList} />
      )}
    </div>
  );
};

export default Products;
