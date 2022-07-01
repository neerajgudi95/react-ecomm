import React from "react";
import { Typography } from "antd";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountBtn from "../../UI/AccountBtn";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styles from "./Header.module.css";

const Header = () => {
  const userData = useSelector((state) => state.user);
  const history = useHistory();
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.header}>
      <nav className={styles.topNav}>
        <div className={styles["nav-logo"]}>
          <Link to="/">
            <Typography.Title
              level={2}
              component={"div"}
              style={{
                margin: 0,
                color: "rgb(255, 74, 19)",
              }}
            >
              ESHOPEE
            </Typography.Title>
          </Link>
        </div>
        <form className={styles["nav-search"]} onSubmit={handleFormSubmit}>
          <input type="text" placeholder="search for products" />
          <Button type="text" icon={<SearchOutlined />} size="small" />
        </form>
        <div className={styles.rightPart}>
          <div>
            <IconButton
              color="primary"
              style={{ marginRight: "20px" }}
              onClick={() => history.push("/cart")}
            >
              <Badge
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                badgeContent={5}
                color="error"
              >
                <ShoppingCartOutlinedIcon fontSize="large" />
              </Badge>
            </IconButton>
          </div>
          <div className={styles["user-account"]}>
            {userData.user ? (
              <>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => history.push("/account/favorites")}
                  style={{ marginRight: "20px" }}
                >
                  <FavoriteBorderOutlinedIcon style={{ color: "red" }} />
                </IconButton>
                <AccountBtn name={userData.user?.name} />
              </>
            ) : (
              <Link className={styles.loginLink} to={"/login"}>
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
