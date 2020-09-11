import React from "react";
import Loader from "react-loader-spinner";

export default class LoaderComp extends React.Component {
  render() {
    return (
      <div className="loaderComp">
        <h3>Loading, Please Wait...</h3>
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />{" "}
      </div>
    );
  }
}
