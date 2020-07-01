import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { authenticatedAxios } from "../../utils/authenticatedAxios";

export default function Header(props) {
    const [categories, setCategories] = useState([]);
    function getCategories() {
        authenticatedAxios()
            .get("/menu/categories")
            .then((response) => {
                console.log(response);
                setCategories(response.data.categories);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        getCategories();
    }, []);
    // const getCategories = () => {
    //     axios()
    //         .get("https://node-menu.herokuapp.com/menu/categories")
    //         .then((res) => {
    //             // console.log(res);
    //             setCategories(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    // useEffect(() => {
    //     getCategories();
    // }, []);
    console.log("categories: ", categories);
    return (
        <div>
            <div>
                <h3>Bienvenidos A </h3>
                <h1>Restarante Mexicano</h1>
            </div>
            <nav>
                {!categories ? (
                    <h4>Loading...</h4>
                ) : (
                    categories &&
                    categories.map((value) => {
                        console.log(value.category);
                        const linkValue = `/${value.category}`;
                        return <Link to={linkValue}>{value.category}</Link>;
                    })
                )}
                {/* Add a list of Nav items to links to each different category type. */}
            </nav>
        </div>
    );
}
