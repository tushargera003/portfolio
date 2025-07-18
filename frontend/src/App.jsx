import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import Link
import { motion } from "framer-motion"; // Import motion if you want animations
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
// import Udhyog from "./pages/Udhyog"; // Uncomment if you use Udhyog
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext";
import { AnimatePresence } from "framer-motion";
import NavbarHeader from "./components/NavbarHeader";

function App() {
  // Define the NotFound component directly here
  const NotFound = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center py-10"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 dark:text-gray-200 mb-4">404</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go to Home
        </Link>
      </motion.div>
    );
  };

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <Router>
          <NavbarHeader />
          <main className="container mx-auto px-4 min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/udhyog" element={<Udhyog />}/> */}
              {/* This route catches all unmatched paths */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
