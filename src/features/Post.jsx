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

// import { createSlice } from "@reduxjs/toolkit";

// export const counterSlice = createSlice({
//   name: "conuter",
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     }
//   },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// export default counterSlice.reducer;