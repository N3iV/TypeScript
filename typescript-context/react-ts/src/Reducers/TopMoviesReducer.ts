import { TopMoviesActionType } from "./types";

interface TopMovies {
  imdbID: string;
  Title: string;
  Watched: boolean;
}
export type TopMoviesState = TopMovies[];

const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIES_WATCHED } = TopMoviesActionType;
type TopMoviesAction =
  | {
      type: typeof GET_TOP_MOVIES;
      payload: TopMovies[];
    }
  | {
      type: typeof TOGGLE_TOP_MOVIES_WATCHED;
      payload: string;
    };
export const topMoviesReducer = (
  state: TopMoviesState,
  action: TopMoviesAction
) => {
  switch (action.type) {
    case GET_TOP_MOVIES:
      return action.payload; // vi payload co dang giong state
    case TOGGLE_TOP_MOVIES_WATCHED:
      return state.map((movie) =>
        movie.imdbID === action.payload
          ? {
              ...movie,
              Watched: !movie.Watched,
            }
          : movie
      );
    default:
      return state;
  }
};
