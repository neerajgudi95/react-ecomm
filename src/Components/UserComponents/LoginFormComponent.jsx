import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import styles from "./LoginFormComponent.module.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Store/Slices/userSlice";
import { useHistory } from "react-router-dom";
// import {
//   // GoogleAuthProvider,
//   signInWithEmailAndPassword,
//   signInWithPopup,
// } from "firebase/auth";
// import {
//   auth,
//   googleAuthenticationProvider,
// } from "../../config/firebaseConfig";

export default function LoginFormComponent() {
  const [formValidity, setFormValidity] = useState({
    emailInput: false,
    passwordInput: false,
  });
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandler = () => {
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const emailCheck = enteredEmail.length === 0;
    const passwordCheck = enteredPassword.length === 0;

    const formIsValid = !emailCheck && !passwordCheck;
    setFormValidity({
      emailInput: emailCheck,
      passwordInput: passwordCheck,
    });
    if (formIsValid) {
      const userInfo = {
        email: enteredEmail,
        password: enteredPassword,
      };
      dispatch(loginUser(userInfo));
      history.push("/");
    }
  };

  return (
    <div className={styles.loginForm}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { mt: 2, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          error={formValidity.emailInput}
          id="email"
          label="Email"
          variant="outlined"
          inputRef={emailInputRef}
          autoComplete="off"
        />
        <TextField
          error={formValidity.passwordInput}
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          inputRef={passwordInputRef}
          autoComplete="off"
        />
        <Button
          style={{ color: "white", backgroundColor: "blue" }}
          onClick={(e) => {
            e.preventDefault();
            loginHandler();
          }}
        >
          LOGIN
        </Button>
      </Box>
    </div>
  );
}
