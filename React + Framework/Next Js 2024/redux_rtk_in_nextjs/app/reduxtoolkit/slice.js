const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
};

const Slice = createSlice({
  name: "UserSlice",
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
    removeUser:(state, action)=>{
      const data = state.users.filter((item)=>{
        return item.id !== action.payload
      })
      state.users=data    // push data in current state
    }
  },
});

export const  UserAction = Slice.actions;
export default Slice.reducer;
