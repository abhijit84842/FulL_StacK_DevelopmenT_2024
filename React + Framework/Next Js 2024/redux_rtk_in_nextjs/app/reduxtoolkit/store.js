import slice from "./slice";

import todoSlice from "./slice2";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    UserSlice: slice, // name and slicename
    todo: todoSlice,
  },
});
