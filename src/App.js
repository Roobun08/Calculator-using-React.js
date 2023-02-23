import { useState } from 'react';
import './App.css';

function App() {

  let [val, setVal] = useState('');

  const clear = () => {
    setVal(val.slice(0, -1))
  }

  const equal = () => {
    setVal(eval(val));
  }


  return (
    <div>
      <h1>Calculator</h1>
      <div className="Box">

        <div className='Display'> {val} </div>

        <div className="secondrow">
          <button value='9' onClick={(event) => { setVal(val + event.target.value) }}>9</button>
          <button value='8' onClick={(event) => { setVal(val + event.target.value) }}>8</button>
          <button value='7' onClick={(event) => { setVal(val + event.target.value) }}>7</button>
          <button className='clear' onClick={() => { clear() }}>CL</button>

        </div>
        <div className="thirdrow">
          <button value='6' onClick={(event) => { setVal(val + event.target.value) }}>6</button>
          <button value='5' onClick={(event) => { setVal(val + event.target.value) }}>5</button>
          <button value='4' onClick={(event) => { setVal(val + event.target.value) }}>4</button>
          <button value='0' onClick={(event) => { setVal(val + event.target.value) }}>0</button>

        </div>
        <div className="fourthrow">
          <button value='3' onClick={(event) => { setVal(val + event.target.value) }}>3</button>
          <button value='2' onClick={(event) => { setVal(val + event.target.value) }}>2</button>
          <button value='1' onClick={(event) => { setVal(val + event.target.value) }}>1</button>
          <button className='equal' onClick={() => { equal() }}>=</button>

        </div>
        <div className="firstrow">
          <button className='symbols' value='/' onClick={(event) => { setVal(val + event.target.value) }}>/</button>
          <button className='symbols' value='*' onClick={(event) => { setVal(val + event.target.value) }}>x</button>
          <button className='symbols' value='-' onClick={(event) => { setVal(val + event.target.value) }}>-</button>
          <button className='symbols' value='+' onClick={(event) => { setVal(val + event.target.value) }}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
