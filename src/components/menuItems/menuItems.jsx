import React, { useEffect } from "react";
import { fetchData } from "../../store/actions";
import { connect } from "react-redux";
const Menu = (props) => {
    useEffect(() => {
        props.fetchData("menu");
    }, []);

    return (
        <div>
            <h1>This will be the menu</h1>
            {!props.dataArray ? (
                <h3>Loading, please wait...</h3>
            ) : (
                props.dataArray.items.map((value) => {
                    console.log(value);
                    return (
                        <div key={value.id}>
                            <h2>{value.menuItem}</h2>
                            <h5>{value.description}</h5>
                            <h6>{value.category}</h6>
                            <p>${value.price}</p>
                            {value.addtDescription && (
                                <h5>{value.addtDescription}</h5>
                            )}
                            {value.additionalPrice && (
                                <h5>{value.additionalPrice}</h5>
                            )}
                        </div>
                    );
                })
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log("menuItems mSTP : ", state);
    return {
        isFetching: state.dataFetchReducer.isFetching,
        error: state.dataFetchReducer.error,
        dataArray: state.dataFetchReducer.dataArray,
    };
};

export default connect(mapStateToProps, { fetchData })(Menu);