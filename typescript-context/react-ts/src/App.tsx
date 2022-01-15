import "./App.css";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import ToggleThemBtn from "./Components/ToggleThemBtn";
import MoviesContextProvide from "./contexts/MoviesContext";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvide from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <MoviesContextProvide>
        <ThemeContextProvide>
          <ProgressContextProvider>
            <Navbar />
            <Movies />
            <ToggleThemBtn />
          </ProgressContextProvider>
        </ThemeContextProvide>
      </MoviesContextProvide>
    </div>
  );
}

export default App;
