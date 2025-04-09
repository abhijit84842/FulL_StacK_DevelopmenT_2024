const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  todoState: [],
};

const todoSlice = createSlice({
  name: "TodoSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // console.log(action)
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.todoState.push(data);
    },
  },
});

export const TodoAction = todoSlice.actions
export default todoSlice.reducer