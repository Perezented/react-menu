import React, { useEffect } from "react";

import { fetchDeeperMenuItems } from "../../store/actions";
import { Link, useHistory } from "react-router-dom";

import { connect } from "react-redux";

const Categories = (props) => {
    const { push } = useHistory();
    useEffect(() => {
        props.fetchDeeperMenuItems("categories");
    }, []);
    props.categoriesArray &&
        console.log("props", props.categoriesArray.categories);

    return (
        <section>
            <h3>Categories here</h3>{" "}
            <div className="categories">
                {!props.categoriesArray ? (
                    <h3>Loading, Please Wait...</h3>
                ) : (
                    props.categoriesArray.categories.map((value, key) => {
                        const linkValue = `/menu/${value.category}`;
                        return (
                            <div
                                className="singleCat"
                                onClick={() => {
                                    push(linkValue);
                                }}
                            >
                                <Link to={linkValue} key={key}>
                                    {value.categoryDescription}
                                </Link>
                            </div>
                        );
                    })
                )}
            </div>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        isFetching: state.categoriesFetchReducer.isFetching,
        error: state.categoriesFetchReducer.error,
        categoriesArray: state.categoriesFetchReducer.categoriesArray,
    };
};

export default connect(mapStateToProps, { fetchDeeperMenuItems })(Categories);
