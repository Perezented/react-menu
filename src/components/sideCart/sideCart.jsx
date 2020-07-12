import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

const SideCart = (props) => {
    let total = 0;
    console.log("sideCart props: ", props);
    console.log("sideCart: ", props.cart.cart);
    return (
        <section className="sideCart">
            <h3>Your Shopping Cart So Far</h3>
            {props.cart.cart.length !== 0 ? (
                props.cart.cart.map((value, i, a) => {
                    total += value.price * value.amount;
                    // console.log(value);
                    // a.filter((filteredValue) => {
                    //     console.log(filteredValue);
                    // });
                    return (
                        <div key={value.menuItemID} className="orderedItem">
                            <p>
                                {value.amount} {value.menuItem}
                                <br />
                                {value.price * value.amount}
                            </p>
                        </div>
                    );
                })
            ) : (
                <h4>No items in cart</h4>
            )}
            {props.cart.cart.length > 0 && (
                <h5 className="orderedItem">Total: {total.toFixed(2)}</h5>
            )}
            {props.cart.cart.length > 0 && <button>Submit Order</button>}
        </section>
    );
};

export default connect(null, {})(SideCart);
