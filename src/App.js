import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import PrivateRoute from "./utils/privateRouter";

import allMenuItems from "./components/menuItems";

function App() {
    const token = localStorage.getItem("token");
    const [loggedIn, setLoggedIn] = useState(token && true);
    document.title = "Restaurant Menu";
    return (
        <>
            <Switch>
                <Route exact path="/menu" component={allMenuItems} />
            </Switch>
        </>
    );
}

export default App;
