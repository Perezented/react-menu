import React from "react";
import Loader from "react-loader-spinner";

export default class LoaderComp extends React.Component {
  render() {
    return (
      <div className="loaderComp">
        <h3>Loading, Please Wait...</h3>
        <h5>
          Please forgive our servers, they don't like being disturbed in their
          sleep and get groggy sometimes.
        </h5>
        <Loader type="TailSpin" color="#00BFEF" height={80} width={80} />{" "}
      </div>
    );
  }
}
