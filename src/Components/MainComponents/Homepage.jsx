import React from "react";
import Banner from "../../UI/Banner";
import CategoryList from "../CategoryList";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Banner />
      <div className={styles.categories}>
        <h2>Categories</h2>
        <CategoryList />
      </div>
    </div>
  );
};

export default Homepage;
