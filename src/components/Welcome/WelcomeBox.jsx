import React from "react";
import { useState } from "react";
export default function WelcomeBox(props) {
  const [info, setInfo] = useState();
  //   useEffect(() => {
  //     props.pushData();
  //   }, [props.pushData]);
  const handleChanges = (e) => {
    e.preventDefault();
    const newerInfo = {
      ...info,
      [e.target.phone]: e.target.value,
      height: e.target.value + "cm",
    };
    return setInfo(newerInfo);
  };
  const onSubmit = (e) => {
    // props.pushData(info);
    console.log("heres the info sent ", info);
    e.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          onSubmit();
          e.preventDefault();
        }}
      >
        {" "}
        <label htmlFor="phone" />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChanges}
        />
        <button type="submit">Submit Info</button>
      </form>
    </div>
  );
}
