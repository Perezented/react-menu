import React, { useEffect } from "react";

import { fetchDeeperMenuItems } from "../../store/actions";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMenuData } from "../../store/actions";
import LoaderComp from "../loader";

const Categories = (props) => {
  const { push } = useHistory();
  useEffect(() => {
    props.fetchDeeperMenuItems("categories");
  }, []);

  return (
    <section>
      <div
        className="singleCat allMenuButton"
        onClick={() => {
          push("/");
          props.fetchMenuData("menu");
        }}
      >
        <Link to="/">All Menu Items</Link>{" "}
      </div>{" "}
      <div className="categories">
        {!props.categoriesArray ? (
          <LoaderComp />
        ) : (
          props.categoriesArray.categories.map((value, key) => {
            const linkValue = `categories?filter=${value.category}`;
            const linkValueWithMenu = `menu/categories?filter=${value.category}`;
            return (
              <div
                key={key}
                className="singleCat"
                onClick={() => {
                  props.fetchMenuData(linkValueWithMenu);
                }}
              >
                <Link to={linkValue}>{value.categoryDescription}</Link>
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
    menuArray: state.menuFetchReducer.menuArray,
  };
};

export default connect(mapStateToProps, {
  fetchDeeperMenuItems,
  fetchMenuData,
})(Categories);
