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
        <p>
          Please note that phone numbers are not actually recorded other than by
          spy agencies. Thank you.
        </p>
      </section>
    </>
  );
}
