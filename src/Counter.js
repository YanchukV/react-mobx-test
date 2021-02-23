import React from 'react';
import './App.css';
import counter from './store/counter';
import { observer } from "mobx-react-lite";

const Counter = observer(() => {
  return (
    <div className='counter'>
      <div className='btns'>
        <p>Коунтер: {counter.total}</p>
        <button className='btn' onClick={()=>counter.increment()}>+</button>
        <button className='btn' onClick={()=>counter.decrement()}>-</button>
      </div>
    </div>
  );

});

export default Counter;