import React from 'react';
import './style.css';
import Counter from './redux/Counter';
import Posts from './redux/Posts';
import Users from './redux/Users';
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Counter />
      <Posts />
      <Users />
    </div>
  );
}
