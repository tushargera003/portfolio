import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";

const CollegeTigerHomePage = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("college-tiger-theme") || "light"
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    counsellingFor: "",
    message: "",
  });
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [particles, setParticles] = useState([]);

  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);

  const isHeroInView = useInView(heroRef, { threshold: 0.3 });
  const isServicesInView = useInView(servicesRef, { threshold: 0.2 });
  const isStatsInView = useInView(statsRef, { threshold: 0.5 });

  // Available Daisy UI themes with categories
  const themeCategories = {
    "Light Themes": [
      "light",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "retro",
      "garden",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "cmyk",
      "autumn",
      "acid",
      "lemonade",
      "winter",
    ],
    "Dark Themes": [
      "dark",
      "synthwave",
      "cyberpunk",
      "valentine",
      "halloween",
      "forest",
      "aqua",
      "black",
      "luxury",
      "dracula",
      "business",
      "night",
      "coffee",
      "dim",
      "nord",
      "sunset",
    ],
  };

  const allThemes = [
    ...themeCategories["Light Themes"],
    ...themeCategories["Dark Themes"],
  ];

  // Enhanced stats with animations
  const stats = [
    {
      number: "100+",
      label: "Corporate Partners",
      icon: "🏢",
      color: "text-primary",
    },
    {
      number: "30+",
      label: "Academic Partners",
      icon: "🎓",
      color: "text-secondary",
    },
    {
      number: "15K+",
      label: "Students Guided",
      icon: "👨‍🎓",
      color: "text-accent",
    },
    { number: "98%", label: "Success Rate", icon: "⭐", color: "text-success" },
  ];

  // Enhanced services with more details
  const services = [
    {
      icon: "🎯",
      title: "AI-Powered Career Counseling",
      description:
        "Advanced AI algorithms analyze your strengths, interests, and market trends to provide personalized career guidance.",
      features: [
        "Personality Assessment",
        "Skill Gap Analysis",
        "Market Trend Insights",
      ],
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: "🏛️",
      title: "Smart University Matching",
      description:
        "Our intelligent matching system finds universities that perfectly align with your academic profile and career goals.",
      features: [
        "Global University Database",
        "Admission Probability",
        "Scholarship Opportunities",
      ],
      color: "from-green-500 to-teal-600",
    },
    {
      icon: "📊",
      title: "Program Analytics",
      description:
        "Deep insights into program outcomes, employment rates, and salary projections to make informed decisions.",
      features: [
        "ROI Analysis",
        "Employment Statistics",
        "Industry Connections",
      ],
      color: "from-orange-500 to-red-600",
    },
    {
      icon: "🚀",
      title: "Career Acceleration",
      description:
        "End-to-end career support including internships, job placements, and professional networking opportunities.",
      features: ["Industry Mentorship", "Job Placement", "Skill Development"],
      color: "from-purple-500 to-pink-600",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      image: "👩‍💼",
      quote:
        "College Tiger's AI-powered counseling helped me discover my passion for technology. Today, I'm living my dream at Google!",
      rating: 5,
    },
    {
      name: "Rahul Gupta",
      role: "MBA Graduate, IIM Bangalore",
      image: "👨‍💼",
      quote:
        "The personalized guidance and university matching was spot-on. I got into my dream B-school with a scholarship!",
      rating: 5,
    },
    {
      name: "Ananya Patel",
      role: "Medical Student, AIIMS",
      image: "👩‍⚕️",
      quote:
        "From career confusion to medical school - College Tiger made my journey smooth and successful.",
      rating: 5,
    },
  ];

  // Programs offered
  const programs = [
    {
      name: "Online MBA",
      duration: "2 Years",
      price: "₹2,50,000",
      rating: 4.8,
      students: "5000+",
    },
    {
      name: "Online MCA",
      duration: "2 Years",
      price: "₹1,80,000",
      rating: 4.7,
      students: "3000+",
    },
    {
      name: "Online BCA",
      duration: "3 Years",
      price: "₹1,20,000",
      rating: 4.6,
      students: "4000+",
    },
    {
      name: "Online B.Com",
      duration: "3 Years",
      price: "₹80,000",
      rating: 4.5,
      students: "6000+",
    },
  ];

  // Initialize particles effect
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    }));
    setParticles(newParticles);
  }, []);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = ["home", "services", "about", "programs", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme management
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("college-tiger-theme", currentTheme);
  }, [currentTheme]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Form handlers
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsFormSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      counsellingFor: "",
      message: "",
    });
    // Show success toast
    alert("Thank you! We'll contact you soon.");
  };

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen bg-base-100 relative overflow-x-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.x,
              top: particle.y,
            }}
            animate={{
              x: [0, particle.speedX * 100, 0],
              y: [0, particle.speedY * 100, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      {/* Enhanced Header */}
      <motion.header
        className={`navbar sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-base-100/90 backdrop-blur-lg shadow-2xl border-b border-base-300"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <motion.div
              tabIndex={0}
              role="button"
              className="btn btn-ghost"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={isMenuOpen ? { rotate: 45 } : { rotate: 0 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </motion.svg>
            </motion.div>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-base-100 rounded-2xl w-64 border border-base-300"
                >
                  {["Home", "Services", "About", "Programs", "Contact"].map(
                    (item) => (
                      <motion.li key={item} whileHover={{ x: 10 }}>
                        <a
                          href={`#${item.toLowerCase()}`}
                          className={`text-lg py-3 rounded-xl ${
                            activeSection === item.toLowerCase()
                              ? "bg-primary text-primary-content"
                              : ""
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item}
                        </a>
                      </motion.li>
                    )
                  )}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <motion.a
            href="#home"
            className="btn btn-ghost text-2xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span animate={floatingAnimation}>🐅</motion.span>
            <span className="ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              College Tiger
            </span>
          </motion.a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {["Home", "Services", "About", "Programs", "Contact"].map(
              (item) => (
                <motion.li key={item} whileHover={{ y: -2 }}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`text-lg font-medium transition-all duration-300 hover:text-primary relative ${
                      activeSection === item.toLowerCase() ? "text-primary" : ""
                    }`}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                        layoutId="activeSection"
                      />
                    )}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {/* Enhanced Theme Selector */}
          <div className="dropdown dropdown-end">
            <motion.div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
            <div className="dropdown-content z-[1] card card-compact w-80 p-4 shadow-2xl bg-base-100 text-base-content border border-base-300 rounded-2xl">
              <div className="card-body">
                <h3 className="card-title text-lg mb-4">
                  Choose Theme
                  <div className="badge badge-primary">{currentTheme}</div>
                </h3>
                {Object.entries(themeCategories).map(([category, themes]) => (
                  <div key={category} className="mb-4">
                    <h4 className="font-semibold text-sm mb-2 text-base-content/70">
                      {category}
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {themes.map((theme) => (
                        <motion.button
                          key={theme}
                          className={`btn btn-xs capitalize ${
                            currentTheme === theme
                              ? "btn-primary"
                              : "btn-outline"
                          }`}
                          onClick={() => handleThemeChange(theme)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {theme}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.button
            className="btn btn-primary btn-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.header>

      {/* Enhanced Hero Section */}
      <motion.section
        id="home"
        ref={heroRef}
        className="hero min-h-screen bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
          />
        </div>

        <div className="hero-content text-center z-10">
          <motion.div
            className="max-w-6xl"
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <motion.div className="mb-12" variants={itemVariants}>
              <motion.h1
                className="text-6xl lg:text-8xl font-bold mb-8"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
                  Welcome to
                </span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  College Tiger
                </motion.span>
              </motion.h1>

              <motion.div className="space-y-6" variants={itemVariants}>
                <p className="text-2xl lg:text-3xl text-base-content/90 font-semibold">
                  🚀 AI-Powered Career Guidance & Educational Excellence
                </p>
                <p className="text-xl text-base-content/80 max-w-4xl mx-auto leading-relaxed">
                  Transform your future with our cutting-edge AI technology,
                  expert counselors, and comprehensive educational ecosystem.
                  From career discovery to dream job placement - we're your
                  ultimate partner in success.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              variants={itemVariants}
            >
              <motion.button
                className="btn btn-primary btn-lg text-xl px-8 py-4 shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🎯 Start Free AI Assessment
              </motion.button>
              <motion.button
                className="btn btn-outline btn-lg text-xl px-8 py-4 shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🏛️ Explore Universities
              </motion.button>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              ref={statsRef}
              className="stats stats-vertical lg:stats-horizontal shadow-2xl bg-base-100/80 backdrop-blur-lg border border-base-300 rounded-3xl"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat text-center py-8"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-6xl mb-2">{stat.icon}</div>
                  <motion.div
                    className={`stat-value text-4xl lg:text-5xl font-bold ${stat.color}`}
                    initial={{ scale: 0 }}
                    animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="stat-desc text-lg font-semibold text-base-content/80">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Services Section */}
      <motion.section
        id="services"
        ref={servicesRef}
        className="py-32 bg-base-200 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-base-content mb-6">
              🌟 Revolutionary Services
            </h2>
            <p className="text-2xl text-base-content/70 max-w-4xl mx-auto">
              Experience the future of education with our AI-powered platform
              and expert guidance
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card bg-base-100 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-base-300 rounded-3xl overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <div className="card-body p-8">
                  <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="card-title text-2xl mb-4 text-base-content">
                    {service.title}
                  </h3>
                  <p className="text-base-content/70 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-base-content/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    className="btn btn-primary btn-lg w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <motion.section
        id="programs"
        className="py-32 bg-base-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-base-content mb-6">
              🎓 Popular Programs
            </h2>
            <p className="text-2xl text-base-content/70 max-w-4xl mx-auto">
              Choose from our carefully curated online programs designed for
              career success
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 rounded-2xl"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="card-body p-6">
                  <h3 className="card-title text-xl mb-3">{program.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-base-content/70">Duration:</span>
                      <span className="font-semibold">{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base-content/70">Price:</span>
                      <span className="font-semibold text-primary">
                        {program.price}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base-content/70">Students:</span>
                      <span className="font-semibold">{program.students}</span>
                    </div>
                  </div>
                  <div className="rating rating-sm mb-4">
                    {[...Array(5)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        className={`mask mask-star-2 ${
                          i < Math.floor(program.rating)
                            ? "bg-orange-400"
                            : "bg-gray-300"
                        }`}
                        disabled
                      />
                    ))}
                    <span className="ml-2 text-sm font-semibold">
                      {program.rating}
                    </span>
                  </div>
                  <motion.button
                    className="btn btn-primary w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-32 bg-base-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-base-content mb-6">
              💬 Success Stories
            </h2>
            <p className="text-2xl text-base-content/70 max-w-4xl mx-auto">
              Hear from students who transformed their careers with College
              Tiger
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="card bg-base-100 shadow-2xl rounded-3xl p-12 text-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-8xl mb-6">
                  {testimonials[currentTestimonial].image}
                </div>
                <blockquote className="text-2xl text-base-content/80 mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="text-xl font-bold text-base-content mb-2">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-lg text-base-content/70 mb-4">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      className="mask mask-star-2 bg-orange-400"
                      disabled
                      checked={i < testimonials[currentTestimonial].rating}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary w-8"
                      : "bg-base-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Contact Section */}
      <motion.section
        id="contact"
        className="py-32 bg-base-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-base-content mb-6">
              🚀 Start Your Journey
            </h2>
            <p className="text-2xl text-base-content/70 max-w-4xl mx-auto">
              Ready to transform your career? Let's connect and make it happen!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl font-bold text-base-content mb-8">
                Get Expert Guidance
              </h3>
              <p className="text-xl text-base-content/70 mb-12 leading-relaxed">
                Connect with our AI-powered counselors and industry experts. Get
                personalized career guidance, university recommendations, and
                scholarship opportunities tailored just for you.
              </p>

              <div className="space-y-8">
                <motion.div
                  className="flex items-center space-x-6 p-6 bg-base-200 rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-4xl">📧</div>
                  <div>
                    <div className="font-semibold text-lg">Email Us</div>
                    <div className="text-primary text-xl">
                      advisor@collegetiger.com
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-6 p-6 bg-base-200 rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-4xl">📞</div>
                  <div>
                    <div className="font-semibold text-lg">Call Us</div>
                    <div className="text-primary text-xl">+91 93110 33457</div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-6 p-6 bg-base-200 rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-4xl">⏰</div>
                  <div>
                    <div className="font-semibold text-lg">Available</div>
                    <div className="text-primary text-xl">24/7 AI Support</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="card bg-base-200 shadow-2xl rounded-3xl"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-body p-8 text-center">
                <h3 className="card-title text-3xl mb-8 text-center">
                  🎯 Free Career Assessment
                </h3>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <motion.div
                    className="form-control"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      className="input input-bordered input-lg text-lg"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </motion.div>
                  <motion.div
                    className="form-control"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="input input-bordered input-lg text-lg"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </motion.div>
                  <motion.div
                    className="form-control"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="input input-bordered input-lg text-lg"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </motion.div>
                  <motion.div
                    className="form-control"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <select
                      name="counsellingFor"
                      className="select select-bordered select-lg text-lg"
                      value={formData.counsellingFor}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">I need guidance for...</option>
                      <option>Career Counselling</option>
                      <option>University Selection</option>
                      <option>Program Guidance</option>
                      <option>Scholarship Information</option>
                      <option>Job Placement</option>
                    </select>
                  </motion.div>
                  <motion.div
                    className="form-control"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <textarea
                      name="message"
                      placeholder="Tell us about your goals and aspirations..."
                      className="textarea textarea-bordered textarea-lg text-lg h-32"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </motion.div>
                  <motion.button
                    type="submit"
                    className={`btn btn-primary btn-lg w-full text-xl ${
                      isFormSubmitting ? "loading" : ""
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isFormSubmitting}
                  >
                    {isFormSubmitting ? "Submitting..." : "🚀 Start My Journey"}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Footer */}
      <motion.footer
        className="footer footer-center p-16 bg-base-300 text-base-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl">
          <motion.div
            className="text-4xl font-bold text-primary mb-6"
            animate={floatingAnimation}
          >
            🐅 College Tiger
          </motion.div>
          <p className="text-xl text-base-content/80 leading-relaxed mb-8">
            Empowering students worldwide with AI-powered career guidance and
            educational excellence. Your success story starts here - let's make
            it legendary!
          </p>
          <div className="grid grid-flow-col gap-6 mb-8">
            {[
              { icon: "📘", label: "Facebook" },
              { icon: "🐦", label: "Twitter" },
              { icon: "💼", label: "LinkedIn" },
              { icon: "📸", label: "Instagram" },
              { icon: "📺", label: "YouTube" },
            ].map((social, index) => (
              <motion.a
                key={index}
                className="btn btn-ghost btn-circle btn-lg text-2xl"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <div className="text-center">
            <p className="text-lg mb-2">
              © 2025 College Tiger. All Rights Reserved.
            </p>
            <motion.p
              className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              #चलो_सही_रास्ता 🚀
            </motion.p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default CollegeTigerHomePage;
