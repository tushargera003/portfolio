import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext";
import { AnimatePresence } from "framer-motion";
import NavbarHeader from "./components/NavbarHeader";

function App() {
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <Router>
          {/* <Header />
          <Navigation /> */}
          <NavbarHeader />
          <main className="container mx-auto px-4  min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
