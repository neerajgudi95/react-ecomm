import React from "react";
import styles from "./Banner.module.css";
import bannerBg from "../assets/ecommerce-banner-bg.svg";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        <h1>
          WELCOME TO
          <br />
          <span>ESHOPEE</span>
        </h1>
        <p>
          An online shopping platform where you can purchase products that you
          like at the comfort of your home
          <br />
          <span>Browse products from below categories</span>
        </p>
      </div>
      <div className={styles.right}>
        <img
          src={bannerBg}
          alt="<a href='https://www.freepik.com/vectors/website-menu'>Website menu vector created by storyset - www.freepik.com</a>"
        />
      </div>
    </div>
  );
};

export default Banner;
