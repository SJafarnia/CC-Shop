import { configureStore } from "@reduxjs/toolkit";
import allPostsSlice from "./features/allPostsSlice";


const store = configureStore({
    reducer: {
        allPosts: allPostsSlice,
    },
})

export default store