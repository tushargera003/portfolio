import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/projects/${id}`
        );
        setProject(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching project:", error);
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

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

  if (loading) {
    return (
      <motion.div
        className="flex justify-center items-center h-64"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="loading loading-spinner loading-lg text-primary"></div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-10"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="max-w-4xl mx-auto bg-base-100/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1
            className="text-4xl font-bold mb-4"
            whileHover={{ scale: 1.01 }}
          >
            {project.title}
          </motion.h1>

          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.technologies?.map((tech, index) => (
              <motion.span
                key={index}
                className="badge badge-primary"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {project.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <motion.div
            className="carousel w-full rounded-box mb-4 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            {project.images.map((img, index) => (
              <motion.div
                key={index}
                id={`slide${index}`}
                className={`carousel-item relative w-full ${
                  index === activeImage ? "block" : "hidden"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.img
                  src={img}
                  alt={`${project.title} ${index + 1}`}
                  className="w-full h-96 object-cover rounded-box"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <motion.button
                    onClick={() =>
                      setActiveImage((prev) =>
                        prev === 0 ? project.images.length - 1 : prev - 1
                      )
                    }
                    className="btn btn-circle btn-primary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ❮
                  </motion.button>
                  <motion.button
                    onClick={() =>
                      setActiveImage((prev) =>
                        prev === project.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="btn btn-circle btn-primary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ❯
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {project.images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeImage ? "bg-primary" : "bg-base-300"
                }`}
                aria-label={`View image ${index + 1}`}
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {project.githubRepo && (
            <motion.a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View on GitHub
            </motion.a>
          )}
          {project.liveDemo && (
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
          )}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/projects" className="btn btn-outline">
              Back to Projects
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
