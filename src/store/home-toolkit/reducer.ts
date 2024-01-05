import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addAsyncNumber: any = createAsyncThunk(
  "homeToolkit/addAsyncNumber",
  (num: number) => {
    return new Promise((resolve: any) => {
      setTimeout(() => {
        resolve(num);
      }, 5000);
    });
  }
);

const home = createSlice({
  name: "homeToolkit",
  initialState: {
    count: 0,
  },
  reducers: {
    incrementToolkit(state, action) {
      console.log(state);
      console.log(action);
      state.count += action.payload;
    },
    decrementToolkit(state, action) {
      console.log(state);
      console.log(action);
      state.count -= action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(addAsyncNumber.pending, (state, action) => {
  //         console.log("pending");
  //       })
  //       .addCase(addAsyncNumber.fulfilled, (state, { payload }: any) => {
  //         console.log("结束了---", payload);
  //         state.count += payload;
  //       })
  //       .addCase(addAsyncNumber.rejected, () => {
  //         console.log("reject");
  //       });
  //   }
  extraReducers: {
    [addAsyncNumber.pending]: (state, action) => {
      console.log("pending");
    },
    [addAsyncNumber.fulfilled]: (state, { payload }: any) => {
      console.log("结束了---", payload);
      state.count += payload;
    },
    [addAsyncNumber.rejected]: () => {
      console.log("reject");
    },
  },
});

export const { incrementToolkit, decrementToolkit } = home.actions;
export default home.reducer;
