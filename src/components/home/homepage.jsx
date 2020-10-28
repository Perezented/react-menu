import React from "react";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  const { push } = useHistory();
  function handleClick() {
    push("/order");
  }
  return (
    <section className="homepage">
      <div>
        <h1>Restarante Mexicano</h1>
        <h2>Restaurant menu for Restarante Mexicano</h2>
      </div>
      <div>
        {" "}
        <h3>Dine in is open! Order now to dine in or carry out</h3>
      </div>
      <div>
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Order
        </button>
      </div>
    </section>
  );
}
