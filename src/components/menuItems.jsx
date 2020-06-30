import React, { useState, useEffect } from "react";

import { authenticatedAxios } from "../utils/authenticatedAxios";

const Menu = () => {
    const [menu, setMenu] = useState([]);
    console.log(menu);
    const getData = () => {
        authenticatedAxios()
            .get("/menu")
            .then((res) => {
                console.log(res);
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
        <div>
            <h1>This will be the menu</h1>
        </div>
    );
};

export default Menu;
