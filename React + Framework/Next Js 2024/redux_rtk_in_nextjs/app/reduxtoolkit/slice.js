const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
  // users: JSON.parse(localStorage.getItem("users")),
  users:[]
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

      // get the current data in state
      // let currData = JSON.stringify(current(state.users));

      //  console.log(currData)   // current() to see the current data of state

      // store redux data in Local Storage...
      // localStorage.setItem("users", currData);
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => {
        return item.id !== action.payload;
      
      });
      state.users = data; // push data in current state
     
    },
  },
});

export const UserAction = Slice.actions;
export default Slice.reducer;
