import React from "react";

function SpecialOfTheDay() {
    return (
        <section className="specialOfTheDay">
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
                    <input type="text" placeholder="Addtional Description" />
                </label>
                <br />
                <label>
                    Additional Price
                    <input type="integer" placeholder="Additional Price" />
                </label>
                <br />
            </div>
            <div className="buttonBar">
                <button>Save Changes</button>
                <button>Cancel</button>
            </div>
        </section>
    );
}
export default SpecialOfTheDay;
