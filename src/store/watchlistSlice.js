import { createSlice } from "@reduxjs/toolkit";

const KEY = "movie_library_watchlist";

const loadFromStorage = () => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const initialState = {
  list: loadFromStorage(),
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    add: (state, action) => {
      const exists = state.list.some((m) => m.id === action.payload.id);
      if (!exists) state.list.push(action.payload);
      localStorage.setItem(KEY, JSON.stringify(state.list));
    },
    remove: (state, action) => {
      state.list = state.list.filter((m) => m.id !== action.payload);
      localStorage.setItem(KEY, JSON.stringify(state.list));
    },
  },
});

export const { add, remove } = watchlistSlice.actions;
export default watchlistSlice.reducer;
