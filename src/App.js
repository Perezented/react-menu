import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import PrivateRoute from "./utils/privateRouter";

import Header from "./components/header/header";
import AllMenuItems from "./components/menuItems/menuItems";
import SpecialOfTheDay from "./components/specialOfTheDay/specialOfTheDay";
import Categories from "./components/categories/categories";
import OrderDetails from "./components/orderDetails";

function App(props) {
    const token = localStorage.getItem("token");
    const [loggedIn, setLoggedIn] = useState(token && true);
    document.title = "Restaurant Menu";
    const [cart, setCart] = useState([]);
    function addItem(item) {
        setCart([...cart, item]);
    }
    function removeItem(item) {
        setCart([
            ...cart.filter((v) => {
                return v.id !== item.id;
            }),
        ]);
    }
    return (
        <>
            <div className="imgBackground" />
            <div className="App">
                <Header />
                <div className="spacer">
                    <SpecialOfTheDay />
                    <Route path="/">
                        <Categories />
                    </Route>
                    <Switch>
                        <Route exact path="/">
                            <AllMenuItems
                                cart={{ cart, removeItem, addItem }}
                            />
                        </Route>
                        <Route path="/categories">
                            <AllMenuItems
                                cart={{ cart, removeItem, addItem }}
                            />
                        </Route>
                        <Route path="/" />
                        <Route exact path="/orderdetails">
                            <OrderDetails />
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    );
}

export default App;

//<span>Photo by <a href="https://unsplash.com/@timothylbrock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Timothy L Brock</a> on <a href="https://unsplash.com/s/photos/mexican-food?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
