import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userEmail: null,
  sidenavOpen: false,
  userData: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setSidenavOpen: (state, action) => {
      state.sidenavOpen = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserEmail, setSidenavOpen, setUserData } = authSlice.actions;

export default authSlice.reducer;
