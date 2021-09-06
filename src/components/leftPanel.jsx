import React from "react";
import PropTypes from "prop-types";

const LeftPanel = ({ onDeleteValue, tapeValue }) => {
    return (
        <>
            <div className="numbers">
                <div
                    onClick={() => {
                        tapeValue("7");
                    }}
                >
                    7
                </div>
                <div
                    onClick={() => {
                        tapeValue("8");
                    }}
                >
                    8
                </div>
                <div
                    onClick={() => {
                        tapeValue("9");
                    }}
                >
                    9
                </div>
            </div>
            <div className="numbers">
                <div
                    onClick={() => {
                        tapeValue("4");
                    }}
                >
                    4
                </div>
                <div
                    onClick={() => {
                        tapeValue("5");
                    }}
                >
                    5
                </div>
                <div
                    onClick={() => {
                        tapeValue("6");
                    }}
                >
                    6
                </div>
            </div>
            <div className="numbers">
                <div
                    onClick={() => {
                        tapeValue("1");
                    }}
                >
                    1
                </div>
                <div
                    onClick={() => {
                        tapeValue("2");
                    }}
                >
                    2
                </div>
                <div
                    onClick={() => {
                        tapeValue("3");
                    }}
                >
                    3
                </div>
            </div>
            <div className="numbers">
                <div
                    onClick={() => {
                        tapeValue("0");
                    }}
                >
                    0
                </div>
                <div
                    onClick={() => {
                        tapeValue(".");
                    }}
                >
                    .
                </div>
                <div
                    onClick={() => {
                        onDeleteValue();
                    }}
                >
                    AC
                </div>
            </div>
        </>
    );
};

LeftPanel.propTypes = {
    onDeleteValue: PropTypes.func.isRequired,
    tapeValue: PropTypes.func.isRequired
};

export default LeftPanel;
