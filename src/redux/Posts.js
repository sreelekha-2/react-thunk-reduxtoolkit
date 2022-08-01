import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts } from './counterReducer';
export default function Posts() {
  const posts = useSelector((state) => state.counter.posts);
  console.log(posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      <h1>Posts Component</h1>
      <ul>
        {posts.map((post) => (
          <li>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
