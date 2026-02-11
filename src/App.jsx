import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Hero from "./components/Hero.jsx";
import Navigation from "./components/Navigation.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import AllProjectsPage from "./pages/AllProjectsPage.jsx";

// Main Portfolio Page Component
const MainPortfolio = () => (
  <>
    <Navigation />
    <Hero />
    <Experience />
    <Projects />
    {/* <Skills /> */}
    <Resume />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/projects" element={<AllProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
