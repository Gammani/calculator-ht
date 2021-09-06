import React from "react";

const Operators = ({tapeValue}) => {
    return (
        <>
            <div onClick={() => tapeValue('+')}>+</div>
            <div onClick={() => tapeValue('-')}>-</div>
            <div onClick={() => tapeValue('*')}>*</div>
            <div onClick={() => tapeValue('/')}>/</div>
        </>
    )
}

export default Operators;