import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import AboutMe from "./Layouts/AboutMe";
import Home from "./Layouts/Home";
import Particles from "react-particles-js";
import reactDom from "react-dom";
import Skills from "./Layouts/Skills";
import Projects from "./Layouts/Projects";
import Connect from "./Layouts/Connect";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <div id="addo-page">
      <a href="#" class="js-addo-nav-toggle addo-nav-toggle">
        <i></i>
      </a>
      <Navbar />
      <div id="addo-main">
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Connect />
        <Footer />
      </div>
    </div>
  );
}

export default App;
