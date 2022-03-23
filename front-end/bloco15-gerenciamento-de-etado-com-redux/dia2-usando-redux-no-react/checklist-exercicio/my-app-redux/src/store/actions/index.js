 export const SEARCH_MOVIE_TYPE = "SEARCH_MOVIES"
 export const SELECT_MOVIE_TYPE = "SELECT_MOVIES"

 export function selectedMovie(movie, category) {
   return {
     type:SELECT_MOVIE_TYPE,
     movie,
     category,
   }
 }

 export function searchMovie(movieSearched) {
  return {
    type: SEARCH_MOVIE_TYPE,
    movieSearched,
  };
}
