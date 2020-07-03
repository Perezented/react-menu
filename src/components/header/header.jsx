import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
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

    console.log(categories);

    return (
        <div className="header">
            <div className="trueHeader">
                <h3>Bienvenidos A </h3>
                <h1>Restarante Mexicano</h1>
            </div>
            <div className="img" />
            {/* <nav>
                <h2>Categories</h2>
                {!categories ? (
                    <h4>Loading...</h4>
                ) : (
                    categories &&
                    categories.map((value, key) => {
                        const linkValue = `/menu/${value.category}`;
                        return (
                            <Link to={linkValue} key={key}>
                                {value.categoryDescription}
                            </Link>
                        );
                    })
                )}
            </nav> */}
        </div>
    );
}
