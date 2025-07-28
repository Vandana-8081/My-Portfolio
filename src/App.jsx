import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import LoveThings from './components/LoveThings.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Tool from './components/Tool.jsx';
import Contact from './components/Contact.jsx';
import Project from './components/Project.jsx';
import "./App.css";

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <LoveThings/>
      <About/>
      <Skills/>
      <Tool/>
      <Project/>
      <Contact/>
    </>
  );
}

export default App;
