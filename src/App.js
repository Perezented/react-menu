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

let dict = {};
function App(props) {
    const token = localStorage.getItem("token");
    const [loggedIn, setLoggedIn] = useState(token && true);
    document.title = "Restaurant Menu";
    const [cart, setCart] = useState([]);
    console.log("cart from the source: ", cart);
    function addItem(item) {
        console.log("item", item.amount, item);
        console.log("cart", cart);
        if (dict[item.menuItemID] === undefined) {
            dict[item.menuItemID] = item;
            // console.log("in dict", item);
            setCart([...cart, item]);
        } else {
            console.log("ITS IN DICT");
            console.log("item and dict[item]", item, dict[item.menuItemID]);
            console.log("dict", Object.values(dict));

            // setCart(Object.values(dict));
        }

        // if (cart.length === 0) {
        //     setCart([...cart, item]);
        // } else {
        //     cart.forEach((cartItem) => {
        //         if (cartItem === item) {
        //             console.log("this worked");
        //         } else {
        //             setCart([...cart, item]);
        //         }
        //     });
        //     // cart.map((value) => {
        //     //     console.log("cart mapped", value);
        //     //     if (value.menuItemsID === item.menuItemsID) {
        //     //         setCart([...cart, item]);
        //     //     }
        //     // });
        // }
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
                        <Route exact path="/orderdetails">
                            <OrderDetails />
                        </Route>
                        <Route path="/" />
                    </Switch>
                </div>
            </div>
        </>
    );
}

export default App;

//<span>Photo by <a href="https://unsplash.com/@timothylbrock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Timothy L Brock</a> on <a href="https://unsplash.com/s/photos/mexican-food?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
