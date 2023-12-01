import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../feature/Post"


export const store = configureStore({
  reducer: {
    posts: postReducer,
  }
})