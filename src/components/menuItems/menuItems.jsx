import React, { useEffect } from "react";
import { useState } from "react";
import { authenticatedAxios } from "../../utils/authenticatedAxios";

const Menu = (props) => {
    const [menu, setMenu] = useState([]);
    console.log(menu);
    async function getData() {
        await authenticatedAxios()
            .get("/menu")
            .then((res) => {
                // console.log(res);
                setMenu(res.data.items);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>This will be the menu</h1>
            {!menu ? (
                <h3>Loading, please wait...</h3>
            ) : (
                menu.length !== 0 &&
                menu.map((value) => {
                    console.log("yoooo", value);
                    return (
                        <div>
                            <h2>{value.menuItem}</h2>
                            <h5>{value.description}</h5>
                            <p>${value.price}</p>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Menu;
