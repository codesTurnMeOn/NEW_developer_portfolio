import { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

// Create a new context for theme
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const savedTheme = localStorage.getItem("theme");
  useEffect(() => {
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("dark");
    }
  }, []);

  return (
    <div id={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme, savedTheme }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
