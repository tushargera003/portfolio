import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const ProjectFilter = ({ projects, setFilteredProjects }) => {
  const getFilterOptions = () => {
    const technologies = [
      "All",
      ...new Set(projects.flatMap((project) => project.technologies || [])),
    ];

    const years = [
      "All",
      ...new Set(
        projects.map((project) =>
          project.year ? project.year.toString() : "2023"
        )
      ),
    ].sort((a, b) => {
      if (a === "All") return -1;
      if (b === "All") return 1;
      return b.localeCompare(a); // Now safe as all are strings
    });

    return { technology: technologies, year: years };
  };

  const filterOptions = getFilterOptions();
  const [filters, setFilters] = useState({
    technology: "All",
    year: "All",
  });
  const [isFiltering, setIsFiltering] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    setIsFiltering(true);

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

    setTimeout(() => {
      setFilteredProjects(filtered);
      setIsFiltering(false);
    }, 800);
  };

  const resetFilters = () => {
    setFilters({ technology: "All", year: "All" });
    setFilteredProjects(projects);
    setIsFiltering(false);
  };

  const filterStatusText =
    filters.technology === "All" && filters.year === "All"
      ? "Showing all projects"
      : `Filtered by: ${[
          filters.technology !== "All" && filters.technology,
          filters.year !== "All" && filters.year,
        ]
          .filter(Boolean)
          .join(" • ")}`;

  return (
    <motion.div
      className="flex flex-col items-center mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="max-w-4xl w-full bg-base-200/50 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
        <motion.h3
          className="text-2xl font-bold mb-6 text-center"
          whileHover={{ scale: 1.01 }}
        >
          Filter Projects
        </motion.h3>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {Object.entries(filterOptions).map(([filterName, options]) => (
            <motion.div
              key={filterName}
              className="form-control w-full max-w-xs"
              whileHover={{ y: -2 }}
            >
              <label className="label" htmlFor={filterName}>
                <span className="label-text text-lg capitalize">
                  {filterName}
                </span>
              </label>
              <select
                name={filterName}
                id={filterName}
                value={filters[filterName]}
                onChange={handleChange}
                className="select select-bordered select-lg bg-base-100"
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetFilters}
            className="btn btn-outline mt-8 md:mt-9"
          >
            Reset Filters
          </motion.button>
        </div>

        <div className="mt-4 text-center h-6">
          <AnimatePresence mode="wait">
            {isFiltering ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <TypeAnimation
                  sequence={["Filtering ..."]}
                  wrapper="span"
                  cursor={false}
                  speed={50}
                  className="text-sm text-primary"
                />
              </motion.div>
            ) : (
              <motion.p
                key="status"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.1 }}
                className="text-sm text-gray-500"
              >
                {filterStatusText}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectFilter;
