import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// import PrivateRoute from "./utils/privateRouter";

import Header from "./components/header/header";
import AllMenuItems from "./components/menuItems/menuItems";

function App() {
    const token = localStorage.getItem("token");
    const [loggedIn, setLoggedIn] = useState(token && true);
    document.title = "Restaurant Menu";

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/menu">
                    <AllMenuItems />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
