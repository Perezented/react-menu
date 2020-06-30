import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { authenticatedAxios } from "./utils/authenticatedAxios";
// import PrivateRoute from "./utils/privateRouter";

import Header from "./components/header/header";
import AllMenuItems from "./components/menuItems/menuItems";

function App() {
    const token = localStorage.getItem("token");
    const [loggedIn, setLoggedIn] = useState(token && true);
    document.title = "Restaurant Menu";

    const [menu, setMenu] = useState([]);
    console.log(menu);
    const getData = () => {
        authenticatedAxios()
            .get("/menu")
            .then((res) => {
                // console.log(res);
                setMenu(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Header />
            <Switch>
                <Route path="/menu" component={AllMenuItems} />
            </Switch>
        </>
    );
}

export default App;
