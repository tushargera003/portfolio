// CollegeXHomePage.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
// --- Mini utility components for icons, etc ---
const UniIcon = ({ name }) => {
  // Demo icons, you can replace with actual SVGs or images
  const iconMap = {
    "IIT Delhi": "🎓",
    "IIM Bangalore": "📈",
    "AIIMS Delhi": "⚕️",
    "BITS Pilani": "🔬",
    "SRM University": "🏛️",
    "Amity University": "🏫",
    IGNOU: "🌐",
    Symbiosis: "🎯",
  };
  return (
    <span aria-label={name} className="text-4xl">
      {iconMap[name] || "🏫"}
    </span>
  );
};

const SectionTitle = ({ emoji, title, subtitle }) => (
  <div className="text-center mb-12">
    <motion.h2
      className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <span className="inline-block mr-2">{emoji}</span>
      <span
        className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
        style={{ WebkitBackgroundClip: "text" }}
      >
        {title}
      </span>
    </motion.h2>
    {subtitle && (
      <motion.p
        className="text-lg md:text-2xl text-base-content/70 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// --- Main Component ---
const CollegeXHomePage = () => {
  // -------------- Data --------------
  const themeCategories = {
    "Light Themes": [
      "light",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "garden",
      "forest",
      "pastel",
      "fantasy",
      "wireframe",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      "caramellatte",
      "silk",
    ],
    "Dark Themes": [
      "dark",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "aqua",
      "lofi",
      "black",
      "luxury",
      "dracula",
      "night",
      "abyss",
    ],
  };
  const allThemes = [
    ...themeCategories["Light Themes"],
    ...themeCategories["Dark Themes"],
  ];
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
    {
      name: "Online BBA",
      duration: "3 Years",
      price: "₹1,10,000",
      rating: 4.7,
      students: "3500+",
    },
    {
      name: "Online BA",
      duration: "3 Years",
      price: "₹70,000",
      rating: 4.4,
      students: "4200+",
    },
  ];
  const universities = [
    {
      name: "IIT Delhi",
      city: "Delhi",
      rating: 5,
      programs: ["B.Tech", "M.Tech", "PhD"],
      logo: null,
      desc: "India's premier technology institute.",
    },
    {
      name: "IIM Bangalore",
      city: "Bangalore",
      rating: 5,
      programs: ["MBA", "PGDM"],
      logo: null,
      desc: "Top-tier management education.",
    },
    {
      name: "AIIMS Delhi",
      city: "Delhi",
      rating: 5,
      programs: ["MBBS", "MD"],
      logo: null,
      desc: "Best for medical studies.",
    },
    {
      name: "BITS Pilani",
      city: "Pilani",
      rating: 4.8,
      programs: ["B.E.", "M.E.", "PhD"],
      logo: null,
      desc: "Renowned for innovation.",
    },
    {
      name: "SRM University",
      city: "Chennai",
      rating: 4.7,
      programs: ["B.Tech", "MBA"],
      logo: null,
      desc: "Multi-disciplinary excellence.",
    },
    {
      name: "Amity University",
      city: "Noida",
      rating: 4.5,
      programs: ["BBA", "MBA", "BCA"],
      logo: null,
      desc: "Global education leader.",
    },
    {
      name: "IGNOU",
      city: "Delhi",
      rating: 4.3,
      programs: ["Distance UG/PG"],
      logo: null,
      desc: "Largest open university.",
    },
    {
      name: "Symbiosis",
      city: "Pune",
      rating: 4.6,
      programs: ["MBA", "Law"],
      logo: null,
      desc: "Known for diversity.",
    },
  ];
  const services = [
    {
      icon: "🤖",
      title: "AI Career Counseling",
      description:
        "Discover your best-fit career path using advanced AI assessments tailored to your strengths, interests, and aspirations.",
      features: ["Personality Match", "Skill Gap Analysis", "Trend Insights"],
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: "🏫",
      title: "Smart University Match",
      description:
        "Find the right university in seconds! Compare rankings, scholarships, and your chances with our AI-powered platform.",
      features: ["Global Database", "Scholarships", "Real-time Filters"],
      color: "from-green-500 to-teal-400",
    },
    {
      icon: "📈",
      title: "Program Analytics",
      description:
        "Get data on outcomes, salaries, and placement rates for every program before you enroll. Make data-driven decisions.",
      features: ["ROI Analysis", "Placement Stats", "Industry Connects"],
      color: "from-orange-500 to-pink-600",
    },
    {
      icon: "🚀",
      title: "Career Acceleration",
      description:
        "Internships, job placements, and mentorships: everything you need to launch your dream career.",
      features: ["Mentorship", "Job Placement", "Skill Development"],
      color: "from-indigo-500 to-fuchsia-600",
    },
  ];
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "College X's AI-powered counseling helped me discover my passion for technology. Today, I'm living my dream at Google!",
      rating: 5,
    },
    {
      name: "Rahul Gupta",
      role: "MBA Graduate, IIM Bangalore",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      quote:
        "The personalized guidance and university matching was spot-on. I got into my dream B-school with a scholarship!",
      rating: 5,
    },
    {
      name: "Ananya Patel",
      role: "Medical Student, AIIMS",
      avatar: "https://randomuser.me/api/portraits/women/47.jpg",
      quote:
        "From career confusion to medical school - College Tiger made my journey smooth and successful.",
      rating: 5,
    },
    {
      name: "Aditya Singh",
      role: "Data Scientist at Flipkart",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      quote:
        "The program analytics gave me confidence to pursue Data Science. Excellent support throughout.",
      rating: 5,
    },
  ];
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
  const social = [
    { icon: <FaFacebook />, label: "Facebook", href: "#" },
    { icon: <FaTwitter />, label: "Twitter", href: "#" },
    { icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
    { icon: <FaInstagram />, label: "Instagram", href: "#" },
    { icon: <FaYoutube />, label: "YouTube", href: "#" },
  ];

  // -------------- State & Hooks --------------
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("collegeX-theme") || "light"
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [uniFilter, setUniFilter] = useState(""); // University search/filter
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    counsellingFor: "",
    message: "",
  });
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const programsRef = useRef(null);
  const universitiesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  // Framer hooks
  const { scrollYProgress } = useScroll();
  const isHeroInView = useInView(heroRef, { threshold: 0.3 });
  const isStatsInView = useInView(heroRef, { threshold: 0.5 });

  // -------------- Effects --------------

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("collegeX-theme", currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sectionRefs = [
        { section: "home", ref: heroRef },
        { section: "services", ref: servicesRef },
        { section: "programs", ref: programsRef },
        { section: "universities", ref: universitiesRef },
        { section: "testimonials", ref: testimonialsRef },
        { section: "contact", ref: contactRef },
      ];
      for (let i = sectionRefs.length - 1; i >= 0; i--) {
        const { section, ref } = sectionRefs[i];
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= 80) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // -------------- Handlers --------------

  const handleThemeChange = (theme) => setCurrentTheme(theme);

  const handleFormChange = (e) =>
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    await new Promise((r) => setTimeout(r, 1800));
    setIsFormSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      counsellingFor: "",
      message: "",
    });
    alert("Thank you! We'll contact you soon.");
  };

  // -------------- Animations --------------
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  };

  // -------------- UI --------------
  return (
    <div className="min-h-screen bg-base-100 text-base-content relative overflow-x-hidden selection:bg-secondary selection:text-secondary-content">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-[99]"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      {/* Header/Nav */}
      <motion.header
        className={`navbar fixed top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-base-100/95 backdrop-blur-xl shadow-xl border-b border-base-300"
            : "bg-base-100/70 backdrop-blur-lg" // Changed to fixed and added initial semi-transparent background
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="navbar-start">
          {/* Mobile menu */}
          <div className="dropdown lg:hidden">
            <label
              tabIndex={0}
              className="btn btn-ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
              </svg>
            </label>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="menu menu-sm dropdown-content mt-3 z-[100] p-4 shadow-2xl bg-base-100 rounded-2xl w-64 border border-base-300"
                >
                  {[
                    { id: "home", label: "Home" },
                    { id: "services", label: "Services" },
                    { id: "programs", label: "Programs" },
                    { id: "universities", label: "Universities" },
                    { id: "testimonials", label: "Testimonials" },
                    { id: "contact", label: "Contact" },
                  ].map(({ id, label }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className={`text-lg py-3 rounded-xl ${
                          activeSection === id
                            ? "bg-primary text-primary-content"
                            : ""
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          {/* Logo */}
          <a
            href="#home"
            className="btn btn-ghost text-2xl font-extrabold text-primary flex items-center gap-2"
          >
            <motion.span animate={floatingAnimation}>🔥</motion.span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              College X
            </span>
          </a>
        </div>
        {/* Nav Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {[
              { id: "home", label: "Home" },
              { id: "services", label: "Services" },
              { id: "programs", label: "Programs" },
              { id: "universities", label: "Universities" },
              { id: "testimonials", label: "Testimonials" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`text-lg font-medium transition-all hover:text-primary ${
                    activeSection === id ? "text-primary font-bold" : ""
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      layoutId="activeSection"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Navbar End */}
        <div className="navbar-end gap-2">
          {/* Theme selector */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                />
              </svg>
            </label>
            <div className="dropdown-content z-[100] card card-compact w-80 p-4 shadow-2xl bg-base-100 text-base-content border border-base-300 rounded-2xl">
              <div className="card-body">
                <h3 className="card-title text-lg mb-2">
                  Choose Theme{" "}
                  <span className="badge badge-primary">{currentTheme}</span>
                </h3>
                {Object.entries(themeCategories).map(([cat, arr]) => (
                  <div key={cat} className="mb-2">
                    <h4 className="font-semibold text-sm text-base-content/60 mb-1">
                      {cat}
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {arr.map((theme) => (
                        <button
                          key={theme}
                          className={`btn btn-xs capitalize ${
                            currentTheme === theme
                              ? "btn-primary"
                              : "btn-outline"
                          }`}
                          onClick={() => handleThemeChange(theme)}
                        >
                          {theme}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="btn btn-primary btn-lg shadow-lg hidden md:inline-flex"
          >
            Get Started
          </a>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        id="home"
        ref={heroRef}
        className="hero min-h-[80vh] bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 relative overflow-hidden pb-8"
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        {/* Glowing background blobs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute top-16 left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 24, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-24 right-12 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
            animate={{ scale: [1.1, 0.9, 1.1], rotate: [0, 360, 0] }}
            transition={{ duration: 22, repeat: Infinity }}
          />
        </div>
        {/* Content */}
        <div className="hero-content mt-20 text-center z-10 max-w-4xl mx-auto">
          <motion.div
            className="space-y-10"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl  md:text-7xl font-extrabold mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-x">
                Welcome to
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                College X
              </span>
            </motion.h1>
            <p className="text-2xl md:text-3xl text-base-content/90 font-semibold">
              🚀 AI-Powered Career Guidance & Educational Excellence
            </p>
            <p className="text-lg md:text-xl text-base-content/80 max-w-3xl mx-auto leading-relaxed">
              Transform your future with our cutting-edge AI, expert counselors,
              and the best educational ecosystem.
              <br /> From career discovery to your dream job — we're your
              ultimate partner in success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="btn btn-primary btn-lg text-xl px-8 py-4 shadow-2xl"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                🎯 Start Free AI Assessment
              </motion.a>
              <motion.a
                href="#universities"
                className="btn btn-outline btn-lg text-xl px-8 py-4 shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                🏛️ Explore Universities
              </motion.a>
            </div>
            {/* Stats */}
            <div className="stats stats-vertical md:stats-horizontal shadow-2xl bg-base-100/90 backdrop-blur-lg border border-base-300 rounded-3xl mx-auto mt-10 p-2 md:p-4 overflow-hidden">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="stat text-center py-7 md:py-4 overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={
                    isStatsInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.8, opacity: 0 }
                  }
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="text-5xl mb-1">{stat.icon}</div>
                  <div
                    className={`stat-value text-3xl md:text-4xl font-extrabold ${stat.color}`}
                  >
                    {stat.number}
                  </div>
                  <div className="stat-desc text-lg font-semibold text-base-content/70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-24 bg-base-200">
        <SectionTitle
          emoji="🌟"
          title="Our AI-Powered Services"
          subtitle="Experience the future of education and career guidance"
        />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="card bg-base-100 shadow-2xl border border-base-300 rounded-3xl group overflow-hidden hover:scale-[1.025] transition-transform duration-300"
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 8px 32px rgb(0 0 0 / 0.12)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <div className="card-body p-8">
                  <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="card-title text-2xl mb-2">{service.title}</h3>
                  <p className="text-lg text-base-content/70 mb-4">
                    {service.description}
                  </p>
                  <ul className="mb-4">
                    {service.features.map((f, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-base-content/80"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-primary btn-lg w-full">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" ref={programsRef} className="py-24 bg-base-100">
        <SectionTitle
          emoji="🎓"
          title="Popular Programs"
          subtitle="Choose from our carefully curated online programs for career success"
        />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                className="card bg-base-200 shadow-xl hover:shadow-2xl border border-base-300 rounded-2xl"
                whileHover={{ y: -5, scale: 1.04 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className="card-body p-6">
                  <h3 className="card-title text-xl mb-2">{program.name}</h3>
                  <div className="flex justify-between text-base-content/70 mb-2">
                    <span>Duration:</span>
                    <span className="font-semibold">{program.duration}</span>
                  </div>
                  <div className="flex justify-between text-base-content/70 mb-2">
                    <span>Price:</span>
                    <span className="font-semibold text-primary">
                      {program.price}
                    </span>
                  </div>
                  <div className="flex justify-between text-base-content/70 mb-2">
                    <span>Students:</span>
                    <span className="font-semibold">{program.students}</span>
                  </div>
                  <div className="rating rating-sm mb-2">
                    {[...Array(5)].map((_, i2) => (
                      <input
                        key={i2}
                        type="radio"
                        className={`mask mask-star-2 ${
                          i2 < Math.floor(program.rating)
                            ? "bg-orange-400"
                            : "bg-gray-300"
                        }`}
                        disabled
                        checked={i2 + 1 === Math.round(program.rating)}
                        readOnly
                      />
                    ))}
                    <span className="ml-1 text-base font-semibold">
                      {program.rating}
                    </span>
                  </div>
                  <button className="btn btn-primary w-full">Enroll Now</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section
        id="universities"
        ref={universitiesRef}
        className="py-24 bg-base-200"
      >
        <SectionTitle
          emoji="🏛️"
          title="Top Universities"
          subtitle="Explore India's top universities and find your perfect match"
        />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 mb-10 justify-center">
            <input
              className="input input-bordered input-lg flex-1 w-full md:w-72"
              type="text"
              placeholder="Search university or city..."
              value={uniFilter}
              onChange={(e) => setUniFilter(e.target.value)}
            />
            <button
              className="btn btn-outline"
              onClick={() => setUniFilter("")}
            >
              Reset
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {universities
              .filter(
                (u) =>
                  u.name.toLowerCase().includes(uniFilter.toLowerCase()) ||
                  u.city.toLowerCase().includes(uniFilter.toLowerCase())
              )
              .map((uni, i) => (
                <motion.div
                  key={uni.name}
                  className="card shadow-xl border border-base-300 bg-base-100/80 rounded-2xl hover:scale-[1.025] transition-transform"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <div className="card-body p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <UniIcon name={uni.name} />
                      <span className="text-2xl font-bold">{uni.name}</span>
                    </div>
                    <div className="text-base-content/60 mb-1">{uni.city}</div>
                    <div className="flex gap-2 items-center mb-2">
                      <div className="rating rating-xs">
                        {[...Array(5)].map((_, i2) => (
                          <input
                            key={i2}
                            type="radio"
                            className={`mask mask-star-2 ${
                              i2 < uni.rating ? "bg-orange-400" : "bg-gray-300"
                            }`}
                            disabled
                            checked={i2 + 1 === Math.round(uni.rating)}
                            readOnly
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold">
                        {uni.rating}
                      </span>
                    </div>
                    <div className="mb-1 text-base-content/80">{uni.desc}</div>
                    <div className="mb-2">
                      <span className="font-semibold text-base-content/70">
                        Programs:{" "}
                      </span>
                      <span>{uni.programs.join(", ")}</span>
                    </div>
                    <button className="btn btn-outline btn-sm w-full">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        ref={testimonialsRef}
        className="py-24 bg-base-100"
      >
        <SectionTitle
          emoji="💬"
          title="Success Stories"
          subtitle="Hear from students who transformed their careers with College X"
        />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="card bg-base-200 shadow-2xl rounded-3xl p-10 text-center"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="rounded-full w-20 h-20 border-4 border-primary shadow-md"
                  />
                </div>
                <blockquote className="text-xl md:text-2xl text-base-content/80 mb-6 leading-relaxed">
                  “{testimonials[currentTestimonial].quote}”
                </blockquote>
                <div className="text-lg font-bold text-base-content mb-1">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-base-content/70 mb-2">
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
                      readOnly
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentTestimonial
                      ? "bg-primary w-8"
                      : "bg-base-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  onClick={() => setCurrentTestimonial(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-24 bg-base-200">
        <SectionTitle
          emoji="🚀"
          title="Start Your Journey"
          subtitle="Ready to transform your career? Let's connect and make it happen!"
        />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Get Expert Guidance
              </h3>
              <p className="text-lg md:text-xl text-base-content/70 mb-10 leading-relaxed">
                Connect with our AI counselors and industry experts.
                Personalized career guidance, university recommendations, and
                scholarships — tailored for you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-6 p-5 bg-base-100 rounded-xl shadow hover:scale-105 transition-transform">
                  <div className="text-3xl">📧</div>
                  <div>
                    <div className="font-semibold text-base">Email Us</div>
                    <div className="text-primary text-lg">
                      advisor@collegeX.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-6 p-5 bg-base-100 rounded-xl shadow hover:scale-105 transition-transform">
                  <div className="text-3xl">📞</div>
                  <div>
                    <div className="font-semibold text-base">Call Us</div>
                    <div className="text-primary text-lg">+91 9876543210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-6 p-5 bg-base-100 rounded-xl shadow hover:scale-105 transition-transform">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <div className="font-semibold text-base">Available</div>
                    <div className="text-primary text-lg">24/7 AI Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Form */}
            <motion.div
              className="card bg-base-100 shadow-2xl rounded-3xl"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-body p-8 text-center">
                <h3 className="card-title text-2xl mb-6">
                  🎯 Free Career Assessment
                </h3>
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered input-lg w-full"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered input-lg w-full"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    className="input input-bordered input-lg w-full"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                  />
                  <select
                    name="counsellingFor"
                    className="select select-bordered select-lg w-full"
                    value={formData.counsellingFor}
                    onChange={handleFormChange}
                    required
                  >
                    <option value="">I need guidance for...</option>
                    <option>Career Counselling</option>
                    <option>University Selection</option>
                    <option>Program Guidance</option>
                    <option>Scholarship Information</option>
                    <option>Job Placement</option>
                  </select>
                  <textarea
                    name="message"
                    className="textarea textarea-bordered textarea-lg w-full h-24"
                    placeholder="Tell us about your goals and aspirations..."
                    value={formData.message}
                    onChange={handleFormChange}
                  />
                  <button
                    type="submit"
                    className={`btn btn-primary btn-lg w-full text-xl ${
                      isFormSubmitting ? "loading" : ""
                    }`}
                    disabled={isFormSubmitting}
                  >
                    {isFormSubmitting ? "Submitting..." : "🚀 Start My Journey"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-6 sm:p-8 md:p-12 bg-base-300 text-base-content">
        {/* Inner container to control content width and center it */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* College X logo/text with floating animation */}
          <motion.div
            className="text-3xl md:text-4xl font-bold text-primary mb-3 text-center" // Added text-center for small screens
            animate={floatingAnimation}
          >
            🔥 College X
          </motion.div>

          {/* Descriptive text for the footer */}
          <p className="text-base md:text-lg text-base-content/80 leading-relaxed mb-5 text-center">
            Empowering students worldwide with AI-powered career guidance and
            educational excellence.
            <br />
            Your success story starts here — let's make it legendary!
          </p>

          {/* Social media icons grid */}
          {/* flex flex-wrap justify-center for responsiveness, gap-4 for small, gap-6 for medium */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
            {social.map((s, i) => (
              <motion.a
                key={i}
                // btn-md for small screens, md:btn-lg for medium and larger
                className="btn btn-ghost btn-circle btn-md md:btn-lg text-2xl"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                title={s.label}
                href={s.href}
                target="_blank" // Added target="_blank" for external links
                rel="noopener noreferrer" // Added rel for security
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright and tagline */}
          <div className="text-center">
            {" "}
            {/* Centered text for copyright and tagline */}
            <p className="text-base mb-1">
              © 2025 College X. All Rights Reserved.
            </p>
            <motion.p
              className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              #Your_Wellwisher 🚀
            </motion.p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CollegeXHomePage;
