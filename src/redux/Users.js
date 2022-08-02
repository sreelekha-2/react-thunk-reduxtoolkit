import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Users() {
  const users = useSelector((state) => state.counter.users);

  return (
    <div>
      <h2>User Data</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
