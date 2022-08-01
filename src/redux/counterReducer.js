import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const getPosts = createAsyncThunk('posts/getPosts', async (thunkApi) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    posts: [],
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
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
