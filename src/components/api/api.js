import axios from 'axios';

const API_KEY = 'ef7abe5b40a07c080750148cf03b2668';
const BASE_URL = 'https://api.themoviedb.org/3';
const TRENDING_URL = `${BASE_URL}/trending/movie/week`;
const ID_URL = `${BASE_URL}/movie/`;
const SEARCH_URL = `${BASE_URL}/search/movie`;

export const fetchTrendingMovies = async (page = 1) => {
  return await axios.get(`${TRENDING_URL}?api_key=${API_KEY}&page=${page}`);
};

export const fetchMovieById = async id => {
  return await axios.get(`${ID_URL}${id}?api_key=${API_KEY}`);
};

export const fetchSearchMovies = async (searchQuery, page = 1) => {
  return await axios.get(
    `${SEARCH_URL}?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
  );
};

export const fetchCastMovies = async id => {
  return await axios.get(`${ID_URL}${id}/credits?api_key=${API_KEY}`);
};

export const fetchReviewsMovie = async id => {
  return await axios.get(`${ID_URL}${id}/reviews?api_key=${API_KEY}`);
};
