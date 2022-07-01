import { createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Config/firebaseConfig";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    userLogin(state, action) {
      state.user = action.payload;
      return state;
    },
    userLogout(state) {
      state.user = null;
      return state;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export const signUpUser = (userInfo) => {
  return async (dispatch) => {
    const registerUser = async () => {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );
      updateProfile(userCredential.user, {
        displayName: `${userInfo.firstName} ${userInfo.lastName}`,
      })
        .then(() => {
          dispatch(
            userLogin({
              uid: userCredential.user.uid,
              email: userCredential.user.email,
              name: userCredential.user.displayName,
              accountCreationTime: userCredential.user.metadata.creationTime,
            })
          );
        })
        .catch((error) => {
          console.log("Something went wrong, please try again", error.message);
          // ...
        });
    };

    try {
      await registerUser();
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginUser = (userInfo) => {
  return async (dispatch) => {
    try {
      signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userAuth) => {
          // store the user's information in the redux state  
          dispatch(
            userLogin({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              accountCreationTime: userAuth.user.metadata.creationTime,
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const userAuthStateCheck = () => {
  return async (dispatch) => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          userLogin({
            email: userAuth.email,
            uid: userAuth.uid,
            name: userAuth.displayName,
            accountCreationTime: userAuth.metadata.creationTime,
          })
        );
      } else {
        dispatch(userLogout());
      }
    });
  };
};

export default userSlice;
