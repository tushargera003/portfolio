import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";

const NavbarHeader = () => {
  const { theme, toggleTheme } = useTheme();

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "font-bold text-primary bg-primary/10 px-4 py-2 rounded-lg"
      : "hover:text-primary transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-base-200/50";

  const navItems = ["Home", "Projects", "About", "Contact"];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-base-100/80 text-base-content shadow-lg sticky top-0 z-50 backdrop-blur-md border-b border-base-300/20"
    >
      <div className="relative z-10 container mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}

        <motion.div className="flex items-center" whileHover={{ scale: 1.02 }}>
          <motion.h1
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Tushar Gera
          </motion.h1>
          <motion.span
            className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Portfolio
          </motion.span>
        </motion.div>

        <div className="flex items-center gap-4">
          {/* Navigation */}
          <nav className="hidden md:flex gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={navLinkClass}
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button would go here */}

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            aria-label={`Switch to ${
              theme === "halloween" ? "light" : "dark"
            } mode`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "halloween" ? (
              <FiSun className="w-5 h-5 text-warning" />
            ) : (
              <FiMoon className="w-5 h-5 text-primary" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation (would appear below on small screens) */}
      <motion.nav
        className="md:hidden py-2 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex justify-around">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={navLinkClass}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default NavbarHeader;
