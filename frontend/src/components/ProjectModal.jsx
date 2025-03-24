import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative bg-base-100 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 btn btn-circle btn-sm btn-ghost z-10"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

            <div className="carousel rounded-box mb-6">
              {project.images.map((img, index) => (
                <div key={index} className="carousel-item w-full">
                  <img
                    src={img}
                    alt={`${project.title} ${index + 1}`}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies?.map((tech, index) => (
                <span key={index} className="badge badge-primary">
                  {tech}
                </span>
              ))}
            </div>

            <p className="mb-6 text-lg">{project.description}</p>

            <div className="flex flex-wrap gap-4">
              {project.githubRepo && (
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View on GitHub
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
