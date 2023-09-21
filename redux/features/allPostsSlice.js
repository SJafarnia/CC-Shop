import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    allPosts: {

    }
}

const allPostsSlice = createSlice({
    name: 'allPostsSetter',
    initialState,
    reducers: {
        setAllPosts: (state, action) => {
            state.allPosts = action.payload;
        },
    },
});

export default allPostsSlice.reducer;

export const selectAllPosts = (store) => store.allPostsSetter.allPosts;

export const { setAllPosts } = allPostsSlice.actions;
