import React, { useState } from "react";

function SpecialOfTheDay() {
    const [editing, setEditing] = useState(false);

    const edit = (e) => {
        !editing && e.preventDefault();
        setEditing(!editing);
    };

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
                        <button>Save Changes</button>
                        <button onClick={edit}>Cancel</button>
                    </div>
                </>
            ) : (
                <>
                    <h3>Specail of the Day!</h3>
                    <button onClick={edit}>Edit</button>
                </>
            )}
        </section>
    );
}
export default SpecialOfTheDay;
