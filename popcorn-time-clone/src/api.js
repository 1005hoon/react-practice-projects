import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "247aed776bcdb3353fade93a518b6ba7",
    language: "en-US",
  },
});

export const tvAPI = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airing: () => api.get("tv/airing_today"),
  TVDetailsById: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get(`search/tv`, {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const movieAPI = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComing: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetailsById: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get(`search/movie`, {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
