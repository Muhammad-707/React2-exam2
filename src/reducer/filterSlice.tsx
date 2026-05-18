import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    activeCategory: "All Plants",
    priceRange: [0, 250],         
    currentPriceRange: [0, 250],  
    sortBy: "default",            
  },
  reducers: {
    setCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setCurrentPriceRange: (state, action) => {
      state.currentPriceRange = action.payload;
    },
    applyPriceFilter: (state) => {
      state.priceRange = state.currentPriceRange;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { actions: filterActions } = filterSlice;
export default filterSlice.reducer;