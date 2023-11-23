import React, { createContext, lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Qualifications from "../layout/Qualifications";
import Introduction2 from "../layout/Introduction2";
import {Container,Spinner} from "react-bootstrap"


export const textColorContext = createContext(null);

const LazyProjects = lazy(() => import("../layout/Projects"));

function Home({ scrollTop }) {
  //use useContext hook to make nav text color light only in Home component

  return (
    <div>
      <textColorContext.Provider value={"text-light"}>
        <Header />
        <Introduction2 />
        <Qualifications   />

        <Suspense fallback={<Container><Spinner/></Container>}>
          <LazyProjects />
        </Suspense>

        <Footer />
      </textColorContext.Provider>
    </div>
  );
}

export default Home;
