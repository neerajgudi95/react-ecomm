import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import styles from "./LoginFormComponent.module.css";
import { signUpUser } from "../../Store/Slices/userSlice";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function SignupFormComponent() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formValidity, setFormValidity] = useState({
    firstNameCheck: true,
    lastNameCheck: true,
    emailCheck: true,
    passwordCheck: true,
  });
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();

  const signUpAndCreateUser = () => {
    const enteredFirstName = firstNameInput.current.value;
    const enteredLastName = lastNameInput.current.value;
    const enteredEmail = emailInput.current.value;
    const enteredPassword = passwordInput.current.value;

    const enteredFirstNameCheck = enteredFirstName.length === 0;
    const enteredLastNameCheck = enteredLastName.length === 0;
    const enteredEmailCheck = enteredEmail.length === 0;
    const enteredPasswordCheck = enteredPassword.length < 5;

    const formIsValid =
      !enteredFirstNameCheck &&
      !enteredLastNameCheck &&
      !enteredEmailCheck &&
      !enteredPasswordCheck;

    setFormValidity({
      firstNameCheck: !enteredFirstNameCheck,
      lastNameCheck: !enteredLastNameCheck,
      emailCheck: !enteredEmailCheck,
      passwordCheck: !enteredPasswordCheck,
    });
    if (formIsValid) {
      const userInfo = {
        email: enteredEmail,
        password: enteredPassword,
        firstName: enteredFirstName,
        lastName: enteredLastName,
      };
      dispatch(signUpUser(userInfo));
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
          error={!formValidity.firstNameCheck}
          id="firstName"
          label="First name"
          variant="outlined"
          inputRef={firstNameInput}
          autoComplete="off"
        />
        <TextField
          error={!formValidity.lastNameCheck}
          id="lastName"
          label="LastName"
          variant="outlined"
          inputRef={lastNameInput}
          autoComplete="off"
        />
        <TextField
          error={!formValidity.emailCheck}
          id="email"
          label="Email"
          variant="outlined"
          inputRef={emailInput}
          autoComplete="off"
        />
        <TextField
          error={!formValidity.passwordCheck}
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          inputRef={passwordInput}
          autoComplete="off"
        />
        {!formValidity.passwordCheck && (
          <Alert severity="error">
            Password must be of atleast 5 characters
          </Alert>
        )}
        <Button
          style={{ color: "white", backgroundColor: "blue" }}
          onClick={(e) => {
            e.preventDefault();
            signUpAndCreateUser();
          }}
        >
          SIGNUP
        </Button>
      </Box>
    </div>
  );
}
