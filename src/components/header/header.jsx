import React, { useEffect } from "react";
import { useState } from "react";
import { authenticatedAxios } from "../../utils/authenticatedAxios";

export default function Header(props) {
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
      <div className="trueHeader">
        <h3>Bienvenidos A </h3>
        <h1>Restarante Mexicano</h1>
      </div>
      <div className="img" />
    </div>
  );
}
