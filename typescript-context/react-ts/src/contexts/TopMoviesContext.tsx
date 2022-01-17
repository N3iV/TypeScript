import axios from "axios";
import { createContext, ReactNode, useReducer } from "react";
import topMoviesInfo from "../api/apiKey";
import { topMoviesReducer, TopMoviesState } from "../Reducers/TopMoviesReducer";
import { TopMoviesActionType } from "../Reducers/types";
const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIES_WATCHED } = TopMoviesActionType;
interface TopMoviesContextProps {
  children: ReactNode;
}
interface TopMoviesContextDefault {
  topMovies: TopMoviesState;
  getTopMovies: () => Promise<void>;
  toggleWatched: (id: string) => void;
}
const TopMoviesDefault: TopMoviesState = [];
export const TopMovieContext = createContext<TopMoviesContextDefault>({
  topMovies: TopMoviesDefault,
  getTopMovies: () => Promise.resolve(void 0),
  toggleWatched: (di: string) => {},
});
const TopMoviesContextProvider = ({ children }: TopMoviesContextProps) => {
  const [topMovies, dispatch] = useReducer(topMoviesReducer, TopMoviesDefault);

  //Get top movies from api

  const getTopMovies = async () => {
    const topMovies = await Promise.all(topMoviesInfo);

    dispatch({
      type: GET_TOP_MOVIES,
      payload: topMovies.map((movie) => ({
        ...movie.data,
        Watched: false,
      })),
    });
  };
  const toggleWatched = (imdbID: string) =>
    dispatch({ type: TOGGLE_TOP_MOVIES_WATCHED, payload: imdbID });
  const topMoviesContextData = {
    topMovies,
    getTopMovies,
    toggleWatched,
  };
  return (
    <TopMovieContext.Provider value={topMoviesContextData}>
      {children}
    </TopMovieContext.Provider>
  );
};

export default TopMoviesContextProvider;
