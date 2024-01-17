import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITodo {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
}

interface IInitialState {
  todos: ITodo[];
}

const initialState: IInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    toggleComplete: (state, action: PayloadAction<string>) => {
      const data = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo?.isCompleted };
        } else {
          return todo;
        }
      });

      state.todos = data.sort((a, b) =>
        a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1
      );
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
