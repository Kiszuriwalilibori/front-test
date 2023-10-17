import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "dark-mode",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
            if(action.payload) state.name = action.payload;
        },
  },
});

export default themeSlice.reducer;
export const getTheme = (state) => state.theme.name;
export const {setTheme} = themeSlice.actions;

