import { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import { Scrollbars } from "react-custom-scrollbars-2";

// Create a new context for theme
export const ThemeContext = createContext(null);

function App() {

  const [scrollTop,setScrollTop] = useState(0)

  const handleScroll= (e)=>{
    
    setScrollTop(e.currentTarget.scrollTop)
  
  }

 




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
      <Scrollbars style={{ height: "100vh",width:"100vw"} } onScroll={handleScroll} renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}>
        <ThemeContext.Provider value={{ theme, toggleTheme, savedTheme,scrollTop }}>
          <BrowserRouter>
            {/* <Layout> to be created and added here*/}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            {/* </Layout> */}
          </BrowserRouter>
        </ThemeContext.Provider>
      </Scrollbars>
    </div>
  );
}

export default App;
