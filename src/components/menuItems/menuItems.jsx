import React, { useEffect } from "react";
import { fetchMenuData } from "../../store/actions";
import { connect } from "react-redux";
import Counter from "../counter/counter";
import SideCart from "../sideCart/sideCart";
import LoaderComp from "../loader";
const Menu = (props) => {
  useEffect(() => {
    props.fetchMenuData("menu");
  }, []);
  return (
    <section className="menuComponent">
      <h1>Welcome! All Menu Items Listed Below</h1>
      {!props.menuArray ? (
        <LoaderComp />
      ) : (
        <section className="menuList">
          {props.menuArray.foodItems &&
            props.menuArray.foodItems.map((value, key) => {
              return (
                <div className="menuItems" key={key}>
                  <h4 className="categoryValue">{value.categoryDescription}</h4>
                  <div className="menuCard">
                    <h2>{value.menuItem}</h2>
                    <p>{value.description}</p>
                    <div className="subMenuItems">
                      {" "}
                      <p>${value.price}</p>
                      {value.addtDescription && (
                        <h5>{value.addtDescription}</h5>
                      )}
                      {/* {value.additionalPrice && (
                        <h5>{value.additionalPrice}</h5>
                      )} */}
                      <Counter
                        id={key + 1}
                        foodItem={value}
                        addItem={props.cart.addItem}
                        cart={props.cart}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </section>
      )}
      <SideCart cart={props.cart} />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.menuFetchReducer.isFetching,
    error: state.menuFetchReducer.error,
    menuArray: state.menuFetchReducer.menuArray
  };
};

export default connect(mapStateToProps, { fetchMenuData })(Menu);

// props.dataArray.data.map((value) => {
// })
