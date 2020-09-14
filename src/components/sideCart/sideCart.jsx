import React, { useEffect } from "react";
import { connect } from "react-redux";
import { pushData } from "../../store/actions/index";

const SideCart = (props) => {
  let total = 0;
  let key_num = 0;
  let curr_dict = props.cart.dict;
  console.log(props);
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;
  function makeObj(dictionary) {
    let total_order = [];
    const uniqueID = Math.floor(Math.random() * 10000000000000000);
    Object.keys(dictionary).forEach(function (key) {
      if (dictionary[key].amount !== 0) {
        let item = {};
        item["total"] = total;
        item["menuItemID"] = dictionary[key].menuItemID;
        item["quantity"] = dictionary[key].amount;
        item["created_at"] = dateTime;
        item["orderID"] = dateTime + "~~" + uniqueID;
        console.log(item);

        total_order.push(item);
      }

      // dictionary.preventDefault();
    });
    props.pushData(total_order);
  }
  return (
    <section className="sideCart">
      <h3>Your Shopping Cart So Far</h3>
      {props.cart.cart.length !== 0 ? (
        props.cart.cart.map((value, i, a) => {
          total += value.price * value.amount;
          key_num += 1;
          if (true) {
            if (value.amount !== 0) {
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
          }
        })
      ) : (
        <h4>No items in cart</h4>
      )}
      {props.cart.cart.length > 0 && (
        <h5 className="orderedItem">Total: {total.toFixed(2)}</h5>
      )}
      {props.cart.cart.length > 0 && (
        <button
          onClick={() => {
            makeObj(curr_dict);
          }}
        >
          Submit Order
        </button>
      )}
    </section>
  );
};

export default connect(null, { pushData })(SideCart);
