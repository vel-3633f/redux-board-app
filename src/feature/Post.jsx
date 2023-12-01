import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from "../DummyData";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    value: PostsData
  },
  reducers: {
    addPost: (state, action) => {
      state.value.push(action.payload)
    }
  }
})

export default postSlice.reducer;