import "./App.css";
import Navbar from "./Components/Navbar";
import ToggleThemBtn from "./Components/ToggleThemBtn";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvide from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvide>
        <ProgressContextProvider>
          <Navbar />
          <ToggleThemBtn />
        </ProgressContextProvider>
      </ThemeContextProvide>
    </div>
  );
}

export default App;
