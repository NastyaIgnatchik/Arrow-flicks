import { createAsyncThunk } from "@reduxjs/toolkit";
import { getGenres } from "@/helpers/GetGenres";

export const GET_GENRES = "movies/getGenres";

export const getAllGenres = createAsyncThunk(GET_GENRES, async () => {
  return await getGenres();
});

