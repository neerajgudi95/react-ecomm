import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import MainCartPage from "./Components/CartComponents/MainCartPage";
import Header from "./Components/Header/Header";
import Loading from "./Loaders/Loading";
import { userAuthStateCheck } from "./Store/Slices/userSlice";
import "./App.css";

const Homepage = React.lazy(() =>
  import("./Components/MainComponents/Homepage")
);
const ProductDetails = React.lazy(() =>
  import("./Components/MainComponents/ProductDetails")
);
const Products = React.lazy(() =>
  import("./Components/MainComponents/Products")
);
const UserAuthentication = React.lazy(() =>
  import("./Components/UserComponents/UserAuthentication")
);

const UserAccount = React.lazy(() =>
  import("./Components/UserComponents/UserAccountComponents/UserAccount")
);

let firstTime = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!firstTime) {
      dispatch(userAuthStateCheck());
    }
    firstTime = false;
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <div className="app_content">
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/categories/:categoryCode" exact>
              <Products />
            </Route>
            <Route path="/products/:productId">
              <ProductDetails />
            </Route>
            <Route path="/login">
              <UserAuthentication />
            </Route>
            <Route path="/account">
              <UserAccount />
            </Route>
            <Route path="/cart">
              <MainCartPage />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
