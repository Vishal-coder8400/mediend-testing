import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Blog } from '../utils/blogType';

interface BlogsState {
  blogs: Blog[];
  error: string | null;
}

const initialState: BlogsState = {
  blogs: [],
  error: null,
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<Blog[]>) => {
      state.blogs = action.payload;
    },
  },
});

export const { setBlogs } = blogSlice.actions;
export default blogSlice.reducer;
