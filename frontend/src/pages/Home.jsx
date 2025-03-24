import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";

const Home = () => {
  // Tech badge data with descriptions
  const techBadges = [
    { name: "React", description: "Component-based UI Development" },
    { name: "Node.js", description: "Backend with JavaScript Power" },
    { name: "MongoDB", description: "Scalable NoSQL Database" },
    { name: "Tailwind", description: "Utility-first CSS Framework" },
    { name: "Framer Motion", description: "Powerful Animation Library" },
    { name: "Daisy UI", description: "Tailwind CSS Components" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-25 text-center"
    >
      <div className="max-w-3xl mx-auto bg-base-200/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6"
          whileHover={{ scale: 1.01 }}
        >
          Hi, I'm Tushar Gera,<br></br> A Full-Stack Developer
        </motion.h2>

        <div className="text-xl mb-8 h-24">
          <TypeAnimation
            sequence={[
              "Building scalable & secure full-stack apps",
              1000,
              "Creating seamless digital experiences with React",
              1000,
              "Transforming ideas into powerful web solutions",
              1000,
              "Bringing innovation through clean & efficient code",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {techBadges.map((tech, i) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                delay: 0.6 + i * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className="relative group"
            >
              <div className="badge badge-primary badge-lg gap-2 cursor-default">
                {tech.name}
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                {tech.description}
                <div className="absolute top-full left-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-gray-800 border-solid transform -translate-x-1/2"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-lg mb-6">
            I'm a passionate developer with expertise in building full-stack
            applications using modern technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Explore My Work 🚀
              </motion.button>
            </NavLink>
            <NavLink to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline"
              >
                Let's Collaborate! 🤝
              </motion.button>
            </NavLink>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
