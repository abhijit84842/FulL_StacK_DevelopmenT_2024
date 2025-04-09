const { createSlice, nanoid, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  userApiData: [],
  users: [],
};


// API call in Redux Toolkit ..
export const fetchApiUsers = createAsyncThunk("apiUsers", async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
 
  return data;
});

const slice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // console.log(state)
      // console.log(action)

      const data = {
        id: nanoid(),
        name: action.payload,
      };

      state.users.push(data);
    },
    removeUser: (state, action) => {
      let data = state.users.filter((list) => {
        return list.id !== action.payload;
      });

      state.users = data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
     
      (state.isloading = false), (state.userApiData = action.payload);
    });
  },
});

export const UserAction = slice.actions;
export default slice.reducer;