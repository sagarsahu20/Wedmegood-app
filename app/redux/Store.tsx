import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./todoSlices"
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import dateReducer from "./dateReducer";

export default configureStore({
    reducer: {
        todoSliceReducer,
        dateReducer
    }
})

