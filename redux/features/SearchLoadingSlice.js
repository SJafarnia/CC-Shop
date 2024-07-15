import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false
}

const SearchLoadingSlice = createSlice({
    name: 'SearchLoadingSlice',
    initialState,
    reducers: {
        setLoadingState: (state, action) => {
            state.loading = action.payload
        }
    },
});

export default SearchLoadingSlice.reducer;

export const selectSearchLoadingSlice = (store) => store.searchLoading.loading;

export const { setLoadingState } = SearchLoadingSlice.actions;
