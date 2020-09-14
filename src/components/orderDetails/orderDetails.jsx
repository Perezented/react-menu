import React from "react";
import { connect } from "react-redux";
import { fetchOrderDetails } from "../../store/actions";
import LoaderComp from "../loader/LoaderComp";
let orders = {};
class orderDetails extends React.Component {
  componentDidMount() {
    this.props.fetchOrderDetails("orderDetails");
  }

  render() {
    this.props.orderDetailsArray &&
      this.props.orderDetailsArray.orders.map((k, v) => {
        if (k.orderID in orders) {
          orders[k.orderID].push(k);
        } else {
          orders[k.orderID] = [];
          orders[k.orderID].push(k);
        }
      });
    return orders === {} ? (
      <LoaderComp />
    ) : (
      <section>
        {/* <LoaderComp /> */}
        {orders !== {} &&
          Object.entries(orders).map((key, value) => {
            console.log("key", key, "value", value);
            console.log(key[0]);
            console.log(key[1]);

            return (
              <section className="orders" key={value}>
                <h1> {key[0]} </h1>
                {key[1].map((value) => {
                  console.log("value", value);
                  return (
                    <div className="orderSlice">
                      <h4 className="totalRotated">{value.total}</h4>
                      <div className="menuCard">
                        <h2>{value.menuItem}</h2>
                        <h5> {value.description} </h5>
                        <div className="submenuItems">
                          <p>$ {value.price} </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </section>
            );
          })}
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.orderDetailsReducer.isFetching,
    error: state.orderDetailsReducer.error,
    orderDetailsArray: state.orderDetailsReducer.orderDetailsArray,
  };
};

export default connect(mapStateToProps, { fetchOrderDetails })(orderDetails);
