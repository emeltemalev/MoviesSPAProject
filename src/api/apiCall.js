import axios from "axios";

export const OMDBAPI = "http://www.omdbapi.com/";
const APIKEY = "4168f6a1";

export const searchMovies = (search, activePage) =>
  axios.get(OMDBAPI, {
    params: { s: search, page: activePage, apiKey: APIKEY },
  });

export const searchMovieDetail = (t) =>
  axios.get(OMDBAPI, { params: { t, apiKey: APIKEY } });
