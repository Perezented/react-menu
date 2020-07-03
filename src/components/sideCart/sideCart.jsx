import React from "react";

const SideCart = (props) => {
    console.log("sideCart props: ", props.cart);
    return (
        <section className="sideCart">
            <h3>Your Shopping Cart So Far</h3>
            {props.cart.cart.length !== 0 ? (
                props.cart.cart.map((value, i, a) => {
                    console.log(value);
                    // a.forEach((aValue) => {
                    //     console.log("loooookkkk heeeerrreee", aValue);
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
        </section>
    );
};

export default SideCart;
