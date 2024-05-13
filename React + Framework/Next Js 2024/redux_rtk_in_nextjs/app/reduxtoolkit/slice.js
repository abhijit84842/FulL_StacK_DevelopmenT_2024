const {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

const initialState = {
  // users: JSON.parse(localStorage.getItem("users")),
  userApiData: [],
  users: [],
};

// API call in ReduxToolkit....
// createAsyncThunk()=> take as argument api name and call back function..
export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
  // console.log("action")
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  return data;
});

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

  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled,(state, action) => {
      // console.log(action)
      (state.isloading = false), (state.userApiData = action.payload);
    });
  },
});

export const UserAction = Slice.actions;
export default Slice.reducer;
