import React, { useState } from "react";
import "./App.css";
import Operators from "./components/operators";
import LeftPanel from "./components/leftPanel";

function App() {
    let [display, setDisplay] = useState("0");

    const operation = () => {
        let operand1 = [];
        let operand2 = [];
        let operator = "";
        let index = 0;

        if(display[0] === "-") {
            for (let i = 1; i < display.length; i++) {
                if (display[i] === "+") {
                    operator = "+";
                    index = i;
                    break;
                }
                if (display[i] === "-") {
                    operator = "-";
                    index = i;
                    break;
                }
                if (display[i] === "*") {
                    operator = "*";
                    index = i;
                    break;
                }
                if (display[i] === "/") {
                    operator = "/";
                    index = i;
                    break;
                }
            }
        } else {
            for (let i = 0; i < display.length; i++) {
                if (display[i] === "+") {
                    operator = "+";
                    index = i;
                    break;
                }
                if (display[i] === "-") {
                    operator = "-";
                    index = i;
                    break;
                }
                if (display[i] === "*") {
                    operator = "*";
                    index = i;
                    break;
                }
                if (display[i] === "/") {
                    operator = "/";
                    index = i;
                    break;
                }
            }
        }

        operand1 = display.slice(0, index);
        operand2 = display.slice(index + 1, display.length);

        if (operator === "+") {
            let result = Number(operand1) + Number(operand2);
            if (!isNaN(result)) {
                setDisplay(String(result));
            }  else {
                setDisplay("error");
            }
        }

        if (operator === "-") {
            let result = Number(operand1) - Number(operand2);
            if (!isNaN(result)) {
                setDisplay(String(result));
            } else {
                setDisplay("error");
            }
        }

        if (operator === "/") {
            let result = Number(operand1) / Number(operand2);
            if (!isNaN(result)) {
                setDisplay(String(result));
            } else {
                setDisplay("error");
            }
        }

        if (operator === "*") {
            let result = Number(operand1) * Number(operand2);
            if (!isNaN(result)) {
                setDisplay(String(result));
            }  else {
                setDisplay("error");
            }
        }
    };
    const tapeValue = (value) => {
        if (display === "0") {
            setDisplay((display = ""));
        }
        setDisplay(display + value);
    };
    const onDeleteValue = () => {
        setDisplay("0");
    };

    return (
        <div className="calculator">
            <div className="input">{display}</div>
            <div className="buttons">
                <div className="operators">
                    <Operators tapeValue={tapeValue} />
                </div>
                <div className="leftPanel">
                    <LeftPanel
                        onDeleteValue={onDeleteValue}
                        tapeValue={tapeValue}
                    />
                </div>
                <div
                    className="equal"
                    onClick={() => {
                        operation();
                    }}
                >
                    =
                </div>
            </div>
        </div>
    );
}

export default App;