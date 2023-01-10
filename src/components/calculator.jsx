import { Component } from 'react';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
class calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: 0,
      operation: '',
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidUpdate() {
    const { total, next } = this.state;
    const inputElm = document.querySelector('.result');

    if ((next != null)) {
      inputElm.value = next;
    } else if (!Number.isNaN(total)) {
      inputElm.value = total;
    }
  }

  clickHandler(e) {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, e.target.innerHTML));
  }

  render() {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <ul className="bg-[#e0e0e0] w-4/5 grid columns-6 border-2 border-black/40">
          <input className="p-2 text-right justify-self-end bg-[#858694] w-full text-white hover:bg-[#858694] placeholder:text-white result" placeholder="0" readOnly />
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>AC</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>+/-</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>%</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>÷</button></li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>7</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>8</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>9</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>x</button></li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>4</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>5</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>6</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>-</button></li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>1</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>2</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>3</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>+</button></li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black/40 w-1/2"><button className="w-full" type="button" onClick={this.clickHandler}>0</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>.</button></li>
            <li className="flex justify-center border-2 border-black/40 w-1/4"><button className="w-full" type="button" onClick={this.clickHandler}>=</button></li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default calculator;
