import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterReducer';

export default function Counter() {
  const count = useSelector((state) => {
    return state.counter.count;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter Component</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increase By Amount
      </button>
    </div>
  );
}
