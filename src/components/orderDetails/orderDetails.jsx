import React from "react";
import { connect } from "react-redux";
import { fetchOrderDetails } from "../../store/actions";
import { useEffect } from "react";
import LoaderComp from "../loader/LoaderComp";
let orders = {};
class orderDetails extends React.Component {
  componentDidMount() {
    this.props.fetchOrderDetails("orderDetails");
    this.props.orderDetailsArray &&
      this.props.orderDetailsArray.orders.map((k, v) => {
        if (k.orderID in orders) {
          orders[k.orderID].push(k);
        } else {
          orders[k.orderID] = [];
          orders[k.orderID].push(k);
        }
        console.log(orders);
      });
  }

  render() {
    return (
      <section className="orders">
        {" "}
        {this.props.orderDetailsArray
          ? console.log(this.props.orderDetailsArray)
          : // console.log(orders)
            ((<LoaderComp />), console.log(window))}
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
