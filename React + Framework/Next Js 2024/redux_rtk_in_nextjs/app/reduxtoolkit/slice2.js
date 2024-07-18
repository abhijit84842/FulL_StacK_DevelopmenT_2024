const { createSlice , nanoid , current } = require("@reduxjs/toolkit");

const initialState = {
  todoState: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state, action) => {
        const data = {
            id:nanoid,
            name:action.payload
        }
        state.todoState.push(data)
        // console.log(current(state.todoState))
    },
  },
});

export const todoAction = todoSlice.actions;
export default todoSlice.reducer;
