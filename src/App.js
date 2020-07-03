import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// import PrivateRoute from "./utils/privateRouter";

import Header from "./components/header/header";
import AllMenuItems from "./components/menuItems/menuItems";
import SpecialOfTheDay from "./components/specialOfTheDay/specialOfTheDay";
import Categories from "./components/categories/categories";

function App(props) {
    console.log(props);
    const token = localStorage.getItem("token");
    const [loggedIn, setLoggedIn] = useState(token && true);
    document.title = "Restaurant Menu";

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
                            <AllMenuItems />
                        </Route>
                        <Route path="/categories">
                            <AllMenuItems />
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
