import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { userLogout } from "../Store/Slices/userSlice";
import { auth } from "../Config/firebaseConfig";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import styles from "./AccountBtn.module.css";

const AccountBtn = ({ name }) => {
  const [toggleView, setToggleView] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  let initial = "";
  if (name) {
    let chars = name.split(" ");
    initial = `${chars[0][0].toUpperCase()}${chars[1][0].toUpperCase()}`;
  }

  const logoutHandler = () => {
    // dispatch to the store with the logout action
    dispatch(userLogout());
    // sign out function from firebase
    auth.signOut();
    setToggleView(false);
    history.push("/");
  };

  return (
    <div className={styles.accountBtn}>
      <IconButton
        onClick={() => setToggleView((prevState) => !prevState)}
        style={{ padding: "0" }}
      >
        <Avatar sx={{ bgcolor: deepOrange[500] }}>{name && initial}</Avatar>
      </IconButton>
      {toggleView && (
        <List className={styles.list}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                history.push("/account");
                setToggleView((prevState) => !prevState);
              }}
            >
              <ListItemText primary="Account" />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ color: "white" }} light={true} />
          <ListItem disablePadding>
            <ListItemButton onClick={logoutHandler}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      )}
    </div>
  );
};

export default AccountBtn;
