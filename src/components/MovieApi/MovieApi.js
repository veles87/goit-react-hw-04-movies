const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '0ee50c29583e792f48969946caa95b68';

//? ссылка на картинки
//! https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

//список самых популярных фильмов на сегодня для создания коллекции на главной странице.
//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
function fetchTrending() {
  return fetch(`${BASE_URL}/trending/all/day?api_key=${KEY}`).then(response => {
    return response.json();
  });
}

// поиск кинофильма по ключевому слову на странице фильмов.
//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
function fetchSearchMovies(movieName) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`,
  ).then(response => {
    return response.json();
  });
}

// запрос полной информации о фильме для страницы кинофильма.
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
function fetchMovieById(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`,
  ).then(response => {
    return response.json();
  });
}

// запрос информации о актёрском составе для страницы кинофильма
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
function fetchMovieCredits(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
  ).then(response => {
    //console.log(response.json());
    return response.json();
  });
}

// запрос обзоров для страницы кинофильма.
//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
// function fetchMovieReviews(movieId) {
//   return fetch(
//     `${BASE_URL}/movie/${movieId}reviews?api_key=${KEY}&language=en-US`,
//   ).then(response => {
//     return response.json();
//   });
// }
function fetchMovieReviews(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`,
  ).then(response => {
    return response.json();
  });
}

const Api = {
  fetchTrending,
  fetchSearchMovies,
  fetchMovieById,
  fetchMovieCredits,
  fetchMovieReviews,
};
export default Api;
