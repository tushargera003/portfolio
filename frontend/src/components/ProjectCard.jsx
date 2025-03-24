import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project._id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="card bg-base-100/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
      >
        <figure className="relative h-48 overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 to-transparent"></div>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{project.title}</h2>
          <p className="text-base-content/80">
            {project.description.substring(0, 100)}...
          </p>
          <div className="card-actions justify-between mt-4">
            {project.githubRepo && (
              <a
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
