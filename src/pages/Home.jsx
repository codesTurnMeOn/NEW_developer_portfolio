import React,{createContext,lazy,Suspense} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Introduction from "../layout/Introduction";
import Qualifications from "../layout/Qualifications";
// import Projects from "../layout/Projects";
// import BackToTopBtn from "../components/BackToTopBtn";

  export const textColorContext = createContext(null);

const LazyProjects = lazy(() => import("../layout/Projects"));

function Home() {

  //use useContext hook to make nav text color light only in Home component


  return (
    <>
      <textColorContext.Provider value={"text-light"}>
          <Header />
          <Introduction />
          <Qualifications />

          <Suspense fallback={<div>Loading...</div>}>
            <LazyProjects/>
            </Suspense>

          <Footer />
          {/* <BackToTopBtn/> */}
      </textColorContext.Provider>
    </>
  );
}

export default Home;
