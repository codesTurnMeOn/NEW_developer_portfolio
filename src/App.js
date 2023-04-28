import { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

// Create a new context for theme
export const ThemeContext = createContext(null);

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    //  const darkModeStatus = darkMode;
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    // setDarkMode(theme === "dark" ? true : false);
    localStorage.setItem("darkMode", theme === "dark" ? true : false);
  };

  useEffect(() => {
    //check darkMode in localStorage, add set theme accordingly
    let darkModeValue = localStorage.getItem("darkMode");
    if (darkModeValue === "true") {
      setTheme("light");
      //set theme on the opposite to darkModeValue
    }
    if (darkModeValue === "false") {
      setTheme("light");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <div id={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
