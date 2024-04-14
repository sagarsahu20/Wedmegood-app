import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        task: 'Click + to add a new Task'
    },

    reducers: {
        setTodo: (state, action) => {
            state.task = action.payload;
        },
        resetTodo: (state, action) => {
            state.task = 'Click + to add a new Task'
        }
    }
})

export const { setTodo, resetTodo } = todoSlice.actions; // this export is used for the time of dispaching
export default todoSlice.reducer;

