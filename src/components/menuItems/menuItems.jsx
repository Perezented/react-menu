import React from "react";

const Menu = (props) => {
    console.log(
        "menuItems props:",
        props.menuItems.forEach((value) => {
            console.log(value);
        })
    );
    return (
        <div>
            <h1>This will be the menu</h1>
        </div>
    );
};

export default Menu;
