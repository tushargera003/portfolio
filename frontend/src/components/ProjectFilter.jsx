import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectFilter = ({ projects, setFilteredProjects }) => {
  const filterOptions = {
    technology: [
      "All",
      ...new Set(projects.flatMap((project) => project.technologies || [])),
    ],
    year: [
      "All",
      ...new Set(projects.map((project) => project.year || "2023")),
    ],
  };

  const [filters, setFilters] = useState({
    technology: "All",
    year: "All",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);

    // Filter projects
    const filtered = projects.filter((project) => {
      const techMatch =
        newFilters.technology === "All" ||
        (project.technologies &&
          project.technologies.includes(newFilters.technology));
      const yearMatch =
        newFilters.year === "All" ||
        (project.year && project.year.toString() === newFilters.year);
      return techMatch && yearMatch;
    });

    setFilteredProjects(filtered);
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-6 mb-12 justify-center items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="form-control w-full max-w-xs">
        <label className="label" htmlFor="technology">
          <span className="label-text">Technology</span>
        </label>
        <select
          name="technology"
          id="technology"
          value={filters.technology}
          onChange={handleChange}
          className="select select-bordered"
        >
          {filterOptions.technology.map((tech, index) => (
            <option key={index} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label" htmlFor="year">
          <span className="label-text">Year</span>
        </label>
        <select
          name="year"
          id="year"
          value={filters.year}
          onChange={handleChange}
          className="select select-bordered"
        >
          {filterOptions.year.map((yr, index) => (
            <option key={index} value={yr}>
              {yr}
            </option>
          ))}
        </select>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setFilters({ technology: "All", year: "All" });
          setFilteredProjects(projects);
        }}
        className="btn btn-outline mt-8 md:mt-9"
      >
        Reset Filters
      </motion.button>
    </motion.div>
  );
};

export default ProjectFilter;
