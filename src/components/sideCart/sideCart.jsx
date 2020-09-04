import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

const SideCart = (props) => {
  let total = 0;
  // let what_is_in_cart = {};
  let key_num = 0;

  return (
    <section className="sideCart">
      <h3>Your Shopping Cart So Far</h3>
      {props.cart.cart.length !== 0 ? (
        props.cart.cart.map((value, i, a) => {
          total += value.price * value.amount;
          key_num += 1;
          // if (what_is_in_cart[value.menuItemID] === undefined) {
          // }
          // a.filter((filteredValue) => {
          // });
          // a.map((listedMenuItems) => {
          //     if (listedMenuItems.menuItemID) {
          //         let totalAmt =
          //             listedMenuItems.amount + value.amount;
          //     }
          // });
          if (true) {
            return (
              <div key={key_num} className="orderedItem">
                <p>
                  {value.amount} {value.menuItem}
                  <br />
                  {value.price * value.amount}
                </p>
              </div>
            );
          }
        })
      ) : (
        <h4>No items in cart</h4>
      )}
      {props.cart.cart.length > 0 && (
        <h5 className="orderedItem">Total: {total.toFixed(2)}</h5>
      )}
      {props.cart.cart.length > 0 && (
        <button onClick={() => {}}>Submit Order</button>
      )}
    </section>
  );
};

export default connect(null, {})(SideCart);
