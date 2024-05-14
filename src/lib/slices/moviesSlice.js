import { createSlice } from "@reduxjs/toolkit";
import { getAllGenres } from "@/lib/actions/movies";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    genres: [],
  },
  reducers: { dummyReducer: () => {} },
  extraReducers: (builder) => {
    builder.addCase(getAllGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
    });
  },
});

export default moviesSlice.reducer;
