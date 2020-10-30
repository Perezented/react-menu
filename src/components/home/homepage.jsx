import React from "react";
import { useHistory } from "react-router-dom";
import CarouselImgs from "./CarouselImgs";
import logo from "../../utils/img/logoReverse.png";
export default function HomePage() {
  const { push } = useHistory();
  function handleClickToOrder() {
    push("/order");
  }
  function handleClickToOrderDetails() {
    push("/orderDetails");
  }
  return (
    <section className="homeSection">
      <div className="homepageImg" />
      <div className="fluff">
        <div className="homepage">
          <div className="homepageHeader">
            <img src={logo} alt="" />
            <h2>Menu for Restarante Mexicano</h2>
          </div>

          <h3>Dine in is open! Order now to dine in or carry out</h3>
          <button
            onClick={() => {
              handleClickToOrder();
            }}
          >
            Order
          </button>
          <button
            onClick={() => {
              handleClickToOrderDetails();
            }}
          >
            Order Details
          </button>
        </div>
      </div>
      <CarouselImgs />
    </section>
  );
}
