import React, {useState} from "react";
import './App.css';

function App() {

  let [display, setDisplay] = useState('0');


  const operation = () => {
    let operand1 = [];
    let operand2 = [];
    let operator = '';
    let index = 0;

    for(let i = 0; i < display.length; i++) {
      if(display[i] === '+') {
        operator = '+';
      }
      if(display[i] === '-') {
        operator = '-';
      }
      if(display[i] === '*') {
        operator = '*';
      }
      if(display[i] === '/') {
        operator = '/';
      }
    }
    index = display.indexOf(operator);

    operand1 = display.slice(0, index);
    operand2 = display.slice(index + 1, display.length);

    if(operator === '+') {
      let result = Number(operand1) + Number(operand2);
      if(!isNaN(result)) {
        setDisplay(String(result));
      } else {
        setDisplay('error');
      }
    }

    if(operator === '-') {
      let result = Number(operand1) - Number(operand2);
      if(!isNaN(result)) {
        setDisplay(String(result));
      } else {
        setDisplay('error');
      }
    }

    if(operator === '/') {
      let result = Number(operand1) / Number(operand2);
      if(!isNaN(result)) {
        setDisplay(String(result));
      } else {
        setDisplay('error');
      }
    }

    if(operator === '*') {
      let result = Number(operand1) * Number(operand2);
      if(!isNaN(result)) {
        setDisplay(String(result));
      } else {
        setDisplay('error');
      }
    }

    console.log(operand1);
    console.log(operand2);

  }

  const tapeValue = (value) => {
    if(display === '0') {setDisplay(display = '')}
    setDisplay(display + value);
  }

  const onDeleteValue = () => {
    if(display.length === 1) {
      setDisplay('0');
    } else {
      setDisplay(display.substring(0, display.length - 1));
    }
  }


  return (
      <div className="calculator">
        <div className="input">{display}</div>
        <div className="buttons">
          <div className="operators">
            <div onClick={() => tapeValue('+')}>+</div>
            <div onClick={() => tapeValue('-')}>-</div>
            <div onClick={() => tapeValue('*')}>*</div>
            <div onClick={() => tapeValue('/')}>/</div>
          </div>
          <div className="leftPanel">
            <div className="numbers">
              <div onClick={() => {tapeValue('7')}}>7</div>
              <div onClick={() => {tapeValue('8')}}>8</div>
              <div onClick={() => {tapeValue('9')}}>9</div>
            </div>
            <div className="numbers">
              <div onClick={() => {tapeValue('4')}}>4</div>
              <div onClick={() => {tapeValue('5')}}>5</div>
              <div onClick={() => {tapeValue('6')}}>6</div>
            </div>
            <div className="numbers">
              <div onClick={() => {tapeValue('1')}}>1</div>
              <div onClick={() => {tapeValue('2')}}>2</div>
              <div onClick={() => {tapeValue('3')}}>3</div>
            </div>
            <div className="numbers">
              <div onClick={() => {tapeValue('0')}}>0</div>
              <div onClick={() => tapeValue('.')}>.</div>
              <div onClick={() => {onDeleteValue()}}>AC</div>
            </div>
          </div>
          <div className="equal" onClick={() => {operation()}}>=</div>
        </div>
      </div>
  );
}

export default App;
