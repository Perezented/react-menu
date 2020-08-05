import React from "react";
function SOTD(sotdArray) {
    let sotd = sotdArray.sotdArray;
    return (
        <div>
            <h2>{sotd.sotdName}</h2>
            <h4>{sotd.sotdDescription}</h4>
            <h5>{sotd.sotdPrice}</h5>
            <h4>{sotd.sotdAddtDescription}</h4>
            <h5> {sotd.sotdAddtPrice} </h5>
        </div>
    );
}
export default SOTD;
