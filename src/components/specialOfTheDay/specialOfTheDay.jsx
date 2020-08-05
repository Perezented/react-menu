import React, { useState } from "react";
import { useEffect } from "react";
import { fetchSpecailOfTheDay } from "../../store/actions";
import { connect } from "react-redux";
import SOTD from "./SOTD";
function SpecialOfTheDay(props) {
    const [editing, setEditing] = useState(false);
    useEffect(() => {
        props.fetchSpecailOfTheDay("sotd");
    }, []);
    const edit = (e) => {
        !editing && e.preventDefault();
        setEditing(!editing);
    };
    const submitHandler = () => {};
    return (
        <section className="specialOfTheDay">
            {editing ? (
                <>
                    <div className="sotdInputs">
                        {" "}
                        <label>
                            Special's Name
                            <input type="text" placeholder="Special's Name" />
                        </label>
                        <br />
                        <label>
                            Description
                            <input type="text" placeholder="Description" />
                        </label>
                        <br />
                        <label>
                            Price
                            <input type="integer" placeholder="price" />
                        </label>
                        <br />
                        <label>
                            Additional Description
                            <input
                                type="text"
                                placeholder="Addtional Description"
                            />
                        </label>
                        <br />
                        <label>
                            Additional Price
                            <input
                                type="integer"
                                placeholder="Additional Price"
                            />
                        </label>
                        <br />
                    </div>
                    <div className="buttonBar">
                        <button onClick={submitHandler}>Save Changes</button>
                        <button onClick={edit}>Cancel</button>
                    </div>
                </>
            ) : (
                <>
                    <h3>Special of the Day!</h3>
                    {props.specialOfTheDayArray && (
                        <SOTD sotdArray={props.specialOfTheDayArray} />
                    )}
                    <button onClick={edit}>Edit</button>
                </>
            )}
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.specialOfTheDayReducer.isFetching,
        error: state.specialOfTheDayReducer.error,
        specialOfTheDayArray: state.specialOfTheDayReducer.specialOfTheDayArray,
    };
};
export default connect(mapStateToProps, { fetchSpecailOfTheDay })(
    SpecialOfTheDay
);
