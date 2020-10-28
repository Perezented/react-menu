import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import PrivateRoute from "./utils/privateRouter";

import Header from "./components/header/header";
import AllMenuItems from "./components/menuItems/menuItems";
import SpecialOfTheDay from "./components/specialOfTheDay/specialOfTheDay";
import Categories from "./components/categories/categories";
import OrderDetails from "./components/orderDetails/orderDetails";
import Welcome from "./components/Welcome/Welcome";
import HomePage from "./components/home/homepage";

const dict = {};
const old_cart = {};
function App(props) {
  for (const [key, val] of Object.entries(dict)) {
    old_cart[key] = val;
  }
  // const token = localStorage.getItem("token");
  // const [loggedIn, setLoggedIn] = useState(token && true);
  document.title = "Restaurant Menu";
  const [cart, setCart] = useState([]);
  function addItem(item) {
    const curr_id = item.menuItemID;
    if (dict[curr_id] === undefined) {
      dict[curr_id] = item;
    } else {
    }
    const curr_cart = [];
    for (const [k, v] of Object.entries(dict)) {
      curr_cart.push(v);
    }
    setCart(curr_cart);
  }

  function removeItem(item) {
    setCart([
      ...cart.filter((v) => {
        return v.id !== item.id;
      })
    ]);
  }
  return (
    <>
      <Route exact path="/">
        <HomePage />
      </Route>
      <div className="imgBackground" />
      <Route path="/order">
        <div className="App">
          <Header />
          <div className="spacer">
            <Route exact path="/order">
              <SpecialOfTheDay />
              <Welcome />
            </Route>
            <Route exact path="/order">
              <Categories />
            </Route>
            <Switch>
              <Route exact path="/order">
                <AllMenuItems cart={{ cart, removeItem, addItem, dict }} />
              </Route>
              <Route exact path="/orderdetails">
                <OrderDetails />
              </Route>
              <Route path="/order" />
            </Switch>
          </div>
        </div>
      </Route>
    </>
  );
}

export default App;

//<span>Photo by <a href="https://unsplash.com/@timothylbrock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Timothy L Brock</a> on <a href="https://unsplash.com/s/photos/mexican-food?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
