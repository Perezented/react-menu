import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRouter";

function App() {
    const token = localStorage.getItem("token");
    const [loggedIn, setLoggedIn] = useState(token && true);
    document.title = "Dev-Desk-Queue";
    return (
        <>
            <Switch></Switch>
        </>
    );
}

export default App;
