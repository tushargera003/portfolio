import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectFilter from "../components/ProjectFilter";
import api from "../utils/api";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get("/projects");
        setProjects(data);
        setFilteredProjects(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <motion.div
        className="flex justify-center items-center h-64"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="loading loading-spinner loading-lg text-primary"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: {
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            },
            scale: {
              repeat: Infinity,
              duration: 1.5,
              repeatType: "reverse",
            },
          }}
        ></motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-center mb-12"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          whileHover={{ scale: 1.02 }}
        >
          My Projects
        </motion.h1>
        <motion.div
          className="w-24 h-1 bg-primary mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <ProjectFilter
          projects={projects}
          setFilteredProjects={setFilteredProjects}
        />
      </motion.div>

      {filteredProjects.length === 0 ? (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xl">No projects match your filters.</p>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
