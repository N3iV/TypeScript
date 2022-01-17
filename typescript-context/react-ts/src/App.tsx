import { Grid } from "@material-ui/core";
import { useContext } from "react";
import "./App.css";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import ToggleThemBtn from "./Components/ToggleThemBtn";
import TopMovies from "./Components/TopMovies";
import AuthContextProvider, { AuthContext } from "./contexts/AuthContext";
import MoviesContextProvide from "./contexts/MoviesContext";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvide from "./contexts/ThemeContext";
import TopMoviesContextProvider from "./contexts/TopMoviesContext";

function App() {
  return (
    <div className="App">
      <TopMoviesContextProvider>
        <AuthContextProvider>
          <MoviesContextProvide>
            <ThemeContextProvide>
              <ProgressContextProvider>
                <Navbar />
                <Grid container>
                  <Grid item xs={4}>
                    <TopMovies />
                  </Grid>
                  <Grid item xs={8}>
                    <Movies />
                  </Grid>
                </Grid>
                <ToggleThemBtn />
              </ProgressContextProvider>
            </ThemeContextProvide>
          </MoviesContextProvide>
        </AuthContextProvider>
      </TopMoviesContextProvider>
    </div>
  );
}

export default App;
