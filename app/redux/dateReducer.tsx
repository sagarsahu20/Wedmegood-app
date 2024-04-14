import { createSlice } from "@reduxjs/toolkit";



const dateSlice = createSlice({
    name: 'dateSlice',
    initialState: {
        date: 'fetching date...'
    },

    reducers: {
        setDate: (state, action) => {
            state.date = action.payload;
        },
        resetDate: (state, action) => {
            state.date = 'fetching date...'
        }
    }
})

export const { setDate, resetDate } = dateSlice.actions; // this export is used for the time of dispaching
export default dateSlice.reducer;
