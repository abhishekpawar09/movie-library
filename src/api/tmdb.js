import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE = "https://api.themoviedb.org/3";

export async function fetchPopular() {
  const res = await axios.get(`${BASE}/movie/popular?api_key=${API_KEY}`);
  return res.data;
}

export async function searchMovies(q) {
  const res = await axios.get(
    `${BASE}/search/movie?api_key=${API_KEY}&query=${q}`
  );
  return res.data;
}

export function imgUrl(path) {
  return path
    ? `https://image.tmdb.org/t/p/w500${path}`
    : "https://via.placeholder.com/500x750?text=No+Image";
}
