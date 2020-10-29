import React, { useEffect } from "react";
import { useState } from "react";
import { authenticatedAxios } from "../../utils/authenticatedAxios";
import logo from "../../utils/img/icon.png";
import { useHistory } from "react-router-dom";

export default function Header(props) {
  const { push } = useHistory();
  const [categories, setCategories] = useState();
  function getCategories() {
    authenticatedAxios()
      .get("/menu/categories")
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((err) => {});
  }
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="header">
      <h3>Bienvenidos A </h3>
      <div
        onClick={() => {
          push("/");
        }}
      >
        <img src={logo} alt="" />
      </div>
      <div className="img" />
    </div>
  );
}
