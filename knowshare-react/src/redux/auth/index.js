import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userEmail: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserEmail } = authSlice.actions;

export default authSlice.reducer;
