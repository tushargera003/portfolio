import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Express", level: 75 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Framer Motion", level: 70 },
  ];

  // Conditionally set overlay classes based on the theme
  const overlayClasses =
    theme === "synthwave"
      ? "absolute inset-0 bg-gradient-to-br from-black/40 to-black/40"
      : "absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <div className="max-w-4xl mx-auto bg-base-100/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <div className="text-xl mb-6 h-8">
            <TypeAnimation
              sequence={[
                "Full-stack Developer",
                1500,
                "MERN Specialist",
                1500,
                "UI/UX Enthusiast",
                1500,
                "Problem Solver",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative h-64 w-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20">
              {/* Conditionally render overlay with adjusted styles for synthwave */}
              <div className={overlayClasses}></div>
              <img
                src="https://res.cloudinary.com/dsc2jgrid/image/upload/v1742845366/uploads/resume%20maker/photo_ezhpev.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-base-200/50 p-6 rounded-xl mb-8"
            >
              <h3 className="text-xl font-bold mb-4">Bio</h3>
              <p className="mb-4">
                I'm a dedicated full-stack developer specializing in the MERN
                stack, passionate about crafting dynamic and user-friendly web
                applications. With a keen eye for detail and a strong foundation
                in both frontend and backend technologies, I strive to build
                seamless digital experiences that merge functionality with
                aesthetic appeal.
              </p>
              <p>
                I have hands-on experience in developing scalable applications,
                optimizing performance, and implementing intuitive UI/UX
                designs. Beyond coding, I love solving complex problems,
                experimenting with new technologies, and continuously refining
                my skills to stay ahead in the ever-evolving tech landscape.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-base-300 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-2.5 rounded-full ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-primary to-secondary"
                          : "bg-primary"
                      }`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-8 bg-base-200/50 p-6 rounded-xl"
            >
              <h3 className="text-l font-bold mb-4">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">
                    Extensive project experience – I've built multiple
                    real-world applications using React, Node.js, Express, and
                    MongoDB, honing my ability to create efficient and scalable
                    solutions.
                  </h3>
                </div>
                <div>
                  <h3 className="font-semibold">
                    Detail-oriented and security-conscious – Whether it's
                    improving performance, securing APIs, or implementing best
                    coding practices, I prioritize quality and reliability in
                    every project.
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
