import React, { useState, useEffect } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [state, calcState] = useState({
    total: 0,
    next: 0,
    operation: '',
  });

  useEffect(() => {
    const { total, next } = state;
    const inputEl = document.querySelector('.result');

    if ((next != null)) {
      inputEl.value = next;
    } else if (!Number.isNaN(total)) {
      inputEl.value = total;
    }
  }, [state]);

  function clickHandler(e) {
    calcState({ ...state, ...calculate(state, e.target.innerHTML) });
  }

  return (
    <div className="col-span-2 p-8 w-full">
      <ul className="bg-[#e0e0e0] grid h-[80vh] columns-6 border-2 border-black/40">
        <input className="p-2 text-right justify-self-end bg-[#858694] w-full text-white hover:bg-[#858694] placeholder:text-white result" placeholder="0" readOnly />
        <ul className="flex justify-center items-center">
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>AC</button></li>
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>+/-</button></li>
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>%</button></li>
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>÷</button></li>
        </ul>
        <ul className="flex justify-center items-center">
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>7</button></li>
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>8</button></li>
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>9</button></li>
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>x</button></li>
        </ul>
        <ul className="flex justify-center items-center">
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>4</button></li>
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>5</button></li>
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>6</button></li>
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>-</button></li>
        </ul>
        <ul className="flex justify-center items-center">
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>1</button></li>
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>2</button></li>
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>3</button></li>
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>+</button></li>
        </ul>
        <ul className="flex justify-center items-center">
          <li className="h-full flex justify-center border-2 border-black/40 w-1/2"><button className="w-full" type="button" onClick={clickHandler}>0</button></li>
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>.</button></li>
          <li className="h-full flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={clickHandler}>=</button></li>
        </ul>
      </ul>
    </div>
  );
};

export default Calculator;
