
import { createSlice, configureStore } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    movies: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      // check if already added
      const exists = state.movies.find(m => m.id === action.payload.id);
      if (!exists) {
        state.movies.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.movies = state.movies.filter(m => m.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

// Store
const store = configureStore({
  reducer: {
    favorites: favoriteSlice.reducer,
  },
});

export default store;
