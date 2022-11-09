import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSchool: null
};


export const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {
    selectSchool: (state, action) => {
      state.selectedSchool = action.payload;
    },
  },
});

export const { selectSchool } = schoolSlice.actions;

export const selectOpenSchool = (state) => state.school.selectedSchool;

export default schoolSlice.reducer;
