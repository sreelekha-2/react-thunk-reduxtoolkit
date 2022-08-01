import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
});

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    posts: [],
    users: [],
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
