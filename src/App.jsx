import "./App.css";

import { useState, useEffect } from "react";

import Navbar from "./components/navbar/Navbar";
import Presentation from "./components/presentation/Presentation";
import Skillsets from "./components/skillsets/Skillsets";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import useTheme from "./context/useTheme";

function App() {
  /* Loading Screen */
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    setInterval(() => {
      document.querySelector(".loading").classList.add("is-loading");
    }, 2000);
  }, []);

  /* Light / Dark Mode */
  const { theme } = useTheme();

  return (
    <>
      {loading ? (
        <div className="App">
          <div className="loading"></div>
          <div className="loading-bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      ) : (
        <main id={theme}>
          <Navbar />
          <Presentation />
          <Skillsets />
          <Projects />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
