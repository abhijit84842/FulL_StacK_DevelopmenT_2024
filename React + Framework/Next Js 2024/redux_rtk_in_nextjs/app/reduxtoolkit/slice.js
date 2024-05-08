const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
};

const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
        // console.log(action)
        // console.log(state)
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data); // state is also initial state
    },
  },
});

export const  addUserAction = Slice.actions;
export default Slice.reducer;
