import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
  const nameToRemove = action.payload.name;
  const index = state.items.findIndex(item => item.name === nameToRemove);

  if (index !== -1) {
    state.items.splice(index, 1); // remove only the first match
  }
},
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});
export const { addItems, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
