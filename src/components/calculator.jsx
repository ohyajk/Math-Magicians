import React, { Component } from 'react';
// eslint-disable-next-line react/prefer-stateless-function
export default class calculator extends Component {
  render() {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <ul className="bg-[#e0e0e0] w-4/5 grid columns-6 border-2 border-black/40">
          <span className="p-2 text-right justify-self-end bg-[#858694] w-full text-white hover:bg-[#858694]">0</span>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black/40 w-1/4">AC</li>
            <li className="flex justify-center border-2 border-black/40 w-1/4">+/-</li>
            <li className="flex justify-center border-2 border-black/40 w-1/4">%</li>
            <li className="flex justify-center border-2 border-black/40 w-1/4">÷</li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black/40 w-1/4">7</li>
            <li className="flex justify-center border-2 border-black/40 w-1/4">8</li>
            <li className="flex justify-center border-2 border-black/40 w-1/4">9</li>
            <li className="flex justify-center border-2 border-black/40 w-1/4">x</li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black/40 w-1/4">4</li>
            <li className="flex justify-center border-2 border-black/40 w-1/4">5</li>
            <li className="flex justify-center border-2 border-black/40 w-1/4">6</li>
            <li className="flex justify-center border-2 border-black/40 w-1/4">-</li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black/40 w-1/4">1</li>
            <li className="flex justify-center border-2 border-black/40 w-1/4">2</li>
            <li className="flex justify-center border-2 border-black/40 w-1/4">3</li>
            <li className="flex justify-center border-2 border-black/40 w-1/4">+</li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black/40 w-1/2">0</li>
            <li className="flex justify-center border-2 border-black/40 w-1/4">.</li>
            <li className="flex justify-center border-2 border-black/40 w-1/4">=</li>
          </ul>
        </ul>
      </div>
    );
  }
}
