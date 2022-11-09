import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalEmailed: 0
};


export const emailedSlice = createSlice({
  name: 'emailed',
  initialState,
  reducers: {
    increment: (state) => {
      state.totalEmailed += 1;
    },
  },
});

export const { increment } = emailedSlice.actions;

export const selectEmailed = (state) => state.emailed.totalEmailed;

export default emailedSlice.reducer;
