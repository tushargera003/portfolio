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
import CollegeTigerHomePage from "./pages/CollegeTigerHomePage";
import Certifications from "./pages/Certifications";
import CollegeXHomePage from "./pages/CollegeXHomePage";
import DealingStreet from "./pages/DealingStreet";
// Layout with Header and Footer
const DefaultLayout = ({ children }) => (
  <>
    <NavbarHeader />
    <main className="container mx-auto px-4 min-h-screen">{children}</main>
    <Footer />
  </>
);

// Layout without Header and Footer
const FullPageLayout = ({ children }) => (
  <main className="min-h-screen">{children}</main>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            {/* Routes with default layout */}
            <Route
              path="/"
              element={
                <DefaultLayout>
                  <Home />
                </DefaultLayout>
              }
            />
            <Route
              path="/home"
              element={
                <DefaultLayout>
                  <Home />
                </DefaultLayout>
              }
            />
            <Route
              path="/projects"
              element={
                <DefaultLayout>
                  <Projects />
                </DefaultLayout>
              }
            />
            <Route
              path="/certifications"
              element={
                <DefaultLayout>
                  <Certifications />
                </DefaultLayout>
              }
            />
            <Route
              path="/projects/:id"
              element={
                <DefaultLayout>
                  <ProjectDetail />
                </DefaultLayout>
              }
            />
            <Route
              path="/about"
              element={
                <DefaultLayout>
                  <About />
                </DefaultLayout>
              }
            />
            <Route
              path="/contact"
              element={
                <DefaultLayout>
                  <Contact />
                </DefaultLayout>
              }
            />

            {/* Route without header/footer */}
            <Route
              path="/collegeTiger"
              element={
                <FullPageLayout>
                  <CollegeTigerHomePage />
                </FullPageLayout>
              }
            /><Route
              path="/dealingstreet"
              element={
                <FullPageLayout>
                  <DealingStreet />
                </FullPageLayout>
              }
            />
            <Route
              path="/collegeX"
              element={
                <FullPageLayout>
                  <CollegeXHomePage />
                </FullPageLayout>
              }
            />
          </Routes>
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
}

export default App;
