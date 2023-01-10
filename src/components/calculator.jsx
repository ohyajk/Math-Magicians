import { Component } from 'react';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
class calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickHandler(e) {
    const buttonName = e.currentTarget.textContent.trim();
    const obj = this.state;
    this.setState(calculate(obj, buttonName));
    console.log(this.state);
  }

  render() {
    const { state } = this;
    const { total } = state;
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <ul className="bg-[#e0e0e0] w-4/5 grid columns-6 border-2 border-black/40">
          <span className="p-2 text-right justify-self-end bg-[#858694] w-full text-white hover:bg-[#858694]">{ total || 0}</span>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" data-id="AC" onClick={this.clickHandler.bind(this)}>AC</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" data-id="+/-" onClick={this.clickHandler.bind(this)}>+/-</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" data-id="%" onClick={this.clickHandler.bind(this)}>%</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" data-id="÷" onClick={this.clickHandler.bind(this)}>÷</button></li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" data-id="7" onClick={this.clickHandler.bind(this)}>7</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" data-id="8" onClick={this.clickHandler.bind(this)}>8</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" data-id="9" onClick={this.clickHandler.bind(this)}>9</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" data-id="*" onClick={this.clickHandler.bind(this)}>x</button></li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" data-id="4" onClick={this.clickHandler.bind(this)}>4</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" data-id="5" onClick={this.clickHandler.bind(this)}>5</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" data-id="6" onClick={this.clickHandler.bind(this)}>6</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" data-id="-" onClick={this.clickHandler.bind(this)}>-</button></li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" data-id="1" onClick={this.clickHandler.bind(this)}>1</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" data-id="2" onClick={this.clickHandler.bind(this)}>2</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" data-id="3" onClick={this.clickHandler.bind(this)}>3</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" data-id="+" onClick={this.clickHandler.bind(this)}>+</button></li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black/40 w-1/2"><button className="w-full" type="button" data-id="0" onClick={this.clickHandler.bind(this)}>0</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" data-id="." onClick={this.clickHandler.bind(this)}>.</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler.bind(this)}>=</button></li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default calculator;
