import React from "react";

const SideCart = (props) => {
    console.log("sideCart props: ", props.cart);
    return (
        <section className="sideCart">
            {props.cart.cart.length !== 0 ? (
                console.log(props.cart.cart) && <h1>Items in cart</h1>
            ) : (
                <h1>No items in cart</h1>
            )}
        </section>
    );
};

export default SideCart;
