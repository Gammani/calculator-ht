import React from "react";
import PropTypes from "prop-types";

const Operators = ({ tapeValue }) => {
    return (
        <>
            <div onClick={() => tapeValue("+")}>+</div>
            <div onClick={() => tapeValue("-")}>-</div>
            <div onClick={() => tapeValue("*")}>*</div>
            <div onClick={() => tapeValue("/")}>/</div>
        </>
    );
};

Operators.propTypes = {
    tapeValue: PropTypes.func.isRequired
};

export default Operators;
