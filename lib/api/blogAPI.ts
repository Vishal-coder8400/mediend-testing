import { createAsyncThunk } from "@reduxjs/toolkit";
import { setBlogs } from "../store/blogSlice";
import { AppDispatch, RootState } from "../store/store";
import { sanityblogs } from "../sanity";

export const fetchBlogs = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch; state: RootState }
>("blogs/fetch", async (_, { dispatch }) => {
  try {
    const blogs = await sanityblogs.fetch(`
            *[_type == "blogs"] | order(_createdAt desc)
            `);
    console.log({ blogs });
    dispatch(setBlogs(blogs));
  } catch (error: any) {
    console.log(error);
  }
});
