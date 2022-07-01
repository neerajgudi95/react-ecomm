import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import AccountOptionsList from "./AccountOptionsList";
import styles from "./UserAccount.module.css";
import Loading from "../../../Loaders/Loading";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const OrdersList = React.lazy(() => import("./OrdersList"));
const Addresses = React.lazy(() => import("./Addresses"));
const AccountSetting = React.lazy(() => import("./AccountSetting"));
const AccountDetails = React.lazy(() => import("./AccountDetails"));
const Favourites = React.lazy(() => import("./Favourites"));

const UserAccount = () => {
  const date = new Date();
  const dateValue = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const userData = useSelector((state) => state.user.user);
  return !userData?.uid ? (
    <Redirect to={"/"} />
  ) : (
    <div className={styles.accountContainer}>
      <div className={styles.accountContainer__left}>
        <div className={styles.accountInfo}>
          <div className={styles.userInfo}>
            <h2>{userData?.name}</h2>
            <p>{`Account since ${month} ${dateValue}, ${year}`}</p>
          </div>
        </div>
        <div className={styles.accountSidebar}>
          <div className={styles.accountOptions}>
            <AccountOptionsList />
          </div>
        </div>
      </div>
      <div className={styles.accountContainer__right}>
        <div className={styles.accountDetails}>
          <Suspense fallback={<Loading />}>
            <Route path="/account/accountDetails">
              <AccountDetails />
            </Route>
            <Route path="/account/favourites">
              <Favourites />
            </Route>
            <Route path="/account/orders">
              <OrdersList />
            </Route>
            <Route path="/account/addresses">
              <Addresses />
            </Route>
            <Route path="/account/settings">
              <AccountSetting />
            </Route>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
