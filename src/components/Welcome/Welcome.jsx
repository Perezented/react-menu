import React from "react";
import WelcomeBox from "./WelcomeBox";
export default function Welcome() {
  return (
    <>
      <section className="welcome">
        <h1>Welcome, Bienvenidos! </h1>
        <p>
          Please enter phone number. It is used to help identify your order.
        </p>
        <WelcomeBox />
      </section>
    </>
  );
}
