import React from "react";
import styles from "./UserAuthentication.module.css";
import UserAuthTabs from "./UserAuthTabs";

const UserAuthentication = () => {
  return (
    <div className={styles.userAuth}>
      <div className={styles.pattern}></div>
      <div className={styles.formContainer}>
        <UserAuthTabs className={styles.userAuthTabs} />
      </div>
    </div>
  );
};

export default UserAuthentication;
