import React from "react";
import { connect } from "react-redux";
import { fetchOrderDetails } from "../../store/actions";
import { useEffect } from "react";

class orderDetails extends React.Component {
  componentDidMount() {
    this.props.fetchOrderDetails("orderDetails");
  }
  componentDidUpdate() {
    console.log(this.props);
  }
  render() {
    return (
      <section>
        <div>
          <h1>test</h1>
        </div>
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
