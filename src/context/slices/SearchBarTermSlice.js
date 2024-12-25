import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "", // Initialize with an empty string
};

const searchBarTermSlice = createSlice({
  name: 'searchTerm',
  initialState,
  reducers: {
    setSearchBarTerm: (state, action) => {
        state.value = action.payload; // Set the search term to the payload
    },
  },
});

export const { setSearchBarTerm } = searchBarTermSlice.actions;
export default searchBarTermSlice.reducer;
