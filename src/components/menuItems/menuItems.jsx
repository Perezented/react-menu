import React, { useEffect } from "react";
import { useState } from "react";
import { authenticatedAxios } from "../../utils/authenticatedAxios";
import { fetchMenuData } from "../../store/actions";
import { connect } from "react-redux";
import Counter from "../counter/counter";
const Menu = (props) => {
    useEffect(() => {
        props.fetchMenuData("menu");
    }, []);

    return (
        <section>
            <h1>Welcome! All Menu Items Listed Below</h1>
            {!props.menuArray ? (
                <h3>Loading, please wait...</h3>
            ) : (
                props.menuArray.items &&
                props.menuArray.items.map((value, key) => {
                    console.log(key);
                    return (
                        <div className="menuItems" key={key}>
                            <h2>{value.menuItem}</h2>
                            <h5>{value.description}</h5>
                            <div className="subMenuItems">
                                {" "}
                                <h6>Category: {value.category}</h6>
                                <p>${value.price}</p>
                                {value.addtDescription && (
                                    <h5>{value.addtDescription}</h5>
                                )}
                                {value.additionalPrice && (
                                    <h5>{value.additionalPrice}</h5>
                                )}
                                <Counter id={key} />
                            </div>
                        </div>
                    );
                })
            )}
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.menuFetchReducer.isFetching,
        error: state.menuFetchReducer.error,
        menuArray: state.menuFetchReducer.menuArray,
    };
};

export default connect(mapStateToProps, { fetchMenuData })(Menu);

// props.dataArray.data.map((value) => {
// })
