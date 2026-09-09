import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

import ProjectDetails from "./sections/ProjectDetails";
import WeatherDetails from "./sections/WeatherDetails";

import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";


function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Education />

        <Contact />
      </main>

      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />


        {/* CDMS Details */}
        <Route
          path="/project/cdms"
          element={
            <>
              <Navbar />

              <ProjectDetails />
            </>
          }
        />


        {/* Weather Details */}
        <Route
          path="/project/weather"
          element={
            <>
              <Navbar />

              <WeatherDetails />
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;