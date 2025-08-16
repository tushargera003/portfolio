import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiAward,
  FiCalendar,
  FiTrendingUp,
  FiFilter,
  FiSearch,
  FiStar,
  FiCheckCircle,
  FiCode,
  FiServer,
  FiCloud,
  FiLayers,
} from "react-icons/fi";

const certifications = [
  {
    id: 1,
    title: "IBM Full Stack Software Developer Professional Certificate",
    provider: "IBM",
    category: "Full Stack Development",
    level: "Professional",
    duration: "6 months",
    skills: [
      "React",
      "Node.js",
      "Python",
      "Docker",
      "Kubernetes",
      "Microservices",
    ],
    issueDate: "2025-08-14",
    expiryDate: "2028-08-14",
    credentialId: "YBYO1MPFS3MF",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/YBYO1MPFS3MF",
    featured: true,
    description:
      "Comprehensive professional certificate covering full-stack development with modern technologies and DevOps practices.",
    logo: "🔵",
  },
  {
    id: 2,
    title: "The Full Stack",
    provider: "Meta",
    category: "Web Development",
    level: "Advanced",
    duration: "4 months",
    skills: ["React", "JavaScript", "HTML/CSS", "Git", "Frontend Development"],
    issueDate: "2025-08-16",
    expiryDate: "2028-08-16",
    credentialId: "XY1V6HZTPTVJ",
    link: "https://www.coursera.org/account/accomplishments/certificate/XY1V6HZTPTVJ",
    featured: true,
    description:
      "Master modern front-end and back-end development with Meta's industry-leading curriculum.",
    logo: "📘",
  },
  {
    id: 3,
    title: "React Basics",
    provider: "Meta",
    category: "Frontend Development",
    level: "Intermediate",
    duration: "1 month",
    skills: ["React", "JSX", "Components", "Props", "State Management"],
    issueDate: "2025-08-16",
    expiryDate: "2028-08-16",
    credentialId: "F2979YM7LSY2",
    link: "https://www.coursera.org/account/accomplishments/certificate/F2979YM7LSY2",
    featured: false,
    description:
      "Fundamental React concepts including components, props, and state management.",
    logo: "⚛️",
  },
  {
    id: 4,
    title: "Developing AI Applications with Python & Flask",
    provider: "IBM",
    category: "Artificial Intelligence",
    level: "Advanced",
    duration: "2 months",
    skills: ["Python", "Flask", "Machine Learning", "AI", "REST APIs"],
    issueDate: "2025-08-14",
    expiryDate: "2028-08-14",
    credentialId: "OXIXNQU2KECT",
    link: "https://www.coursera.org/account/accomplishments/certificate/OXIXNQU2KECT",
    featured: true,
    description:
      "Build and deploy AI-powered web applications using Python and Flask framework.",
    logo: "🤖",
  },
  {
    id: 5,
    title: "Generative AI: Elevate Your Software Development",
    provider: "IBM",
    category: "Artificial Intelligence",
    level: "Advanced",
    duration: "2 months",
    skills: ["Generative AI", "GPT", "AI Development", "Code Generation"],
    issueDate: "2025-08-14",
    expiryDate: "2028-08-14",
    credentialId: "PPC6AQXYTXFM",
    link: "https://www.coursera.org/account/accomplishments/certificate/PPC6AQXYTXFM",
    featured: true,
    description:
      "Leverage generative AI tools to enhance software development productivity and code quality.",
    logo: "✨",
  },
  {
    id: 6,
    title: "Introduction to Cloud Computing",
    provider: "IBM",
    category: "Cloud Computing",
    level: "Beginner",
    duration: "1 month",
    skills: ["Cloud Architecture", "AWS", "DevOps", "Virtualization"],
    issueDate: "2025-08-11",
    expiryDate: "2028-08-11",
    credentialId: "QXGM000IQFYI",
    link: "https://www.coursera.org/account/accomplishments/certificate/QXGM000IQFYI",
    featured: false,
    description:
      "Fundamental concepts of cloud computing and modern deployment strategies.",
    logo: "☁️",
  },
  {
    id: 7,
    title: "Introduction to Containers, Docker & Kubernetes",
    provider: "IBM",
    category: "DevOps",
    level: "Intermediate",
    duration: "2 months",
    skills: ["Docker", "Kubernetes", "Containerization", "Orchestration"],
    issueDate: "2025-08-14",
    expiryDate: "2028-08-14",
    credentialId: "XBR9KW4STPFF",
    link: "https://www.coursera.org/account/accomplishments/certificate/XBR9KW4STPFF",
    featured: false,
    description:
      "Master containerization technologies and orchestration platforms for scalable deployments.",
    logo: "🐳",
  },
  {
    id: 8,
    title: "Application Development using Microservices and Serverless",
    provider: "IBM",
    category: "Backend Development",
    level: "Advanced",
    duration: "3 months",
    skills: ["Microservices", "Serverless", "API Design", "Cloud Functions"],
    issueDate: "2025-08-14",
    expiryDate: "2028-08-14",
    credentialId: "K01FIR7Z76BV",
    link: "https://www.coursera.org/account/accomplishments/certificate/K01FIR7Z76BV",
    featured: false,
    description:
      "Design and implement scalable applications using microservices architecture and serverless computing.",
    logo: "🏗️",
  },
  {
    id: 9,
    title: "Application Development using Microservices",
    provider: "IBM",
    category: "Backend Development",
    level: "Intermediate",
    duration: "2 months",
    skills: [
      "Microservices",
      "Service Mesh",
      "API Gateway",
      "Distributed Systems",
    ],
    issueDate: "2025-08-14",
    expiryDate: "2028-08-14",
    credentialId: "NS4H1W17GGSM",
    link: "https://www.coursera.org/account/accomplishments/certificate/NS4H1W17GGSM",
    featured: false,
    description:
      "Build distributed applications using microservices architecture patterns and best practices.",
    logo: "🔧",
  },
  {
    id: 10,
    title: "Developing Back-End Apps with Node.js and Express",
    provider: "IBM",
    category: "Backend Development",
    level: "Intermediate",
    duration: "2 months",
    skills: ["Node.js", "Express.js", "REST APIs", "Database Integration"],
    issueDate: "2025-08-13",
    expiryDate: "2028-08-13",
    credentialId: "DEWWCIKT3IFW",
    link: "https://www.coursera.org/account/accomplishments/certificate/DEWWCIKT3IFW",
    featured: false,
    description:
      "Create robust server-side applications using Node.js and Express framework.",
    logo: "🟢",
  },
  {
    id: 11,
    title: "Developing Front-End Apps with React",
    provider: "IBM",
    category: "Frontend Development",
    level: "Intermediate",
    duration: "2 months",
    skills: ["React", "Redux", "Component Architecture", "State Management"],
    issueDate: "2025-08-12",
    expiryDate: "2028-08-12",
    credentialId: "ZD3DHAUF7R93",
    link: "https://www.coursera.org/account/accomplishments/certificate/ZD3DHAUF7R93",
    featured: false,
    description:
      "Build dynamic and interactive user interfaces using React and modern frontend tools.",
    logo: "⚛️",
  },
  {
    id: 12,
    title: "HTML, CSS, and JavaScript for Web Developers",
    provider: "IBM",
    category: "Web Development",
    level: "Beginner",
    duration: "1.5 months",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "DOM Manipulation",
    ],
    issueDate: "2025-08-12",
    expiryDate: "2028-08-12",
    credentialId: "T9VJF8Z30GMT",
    link: "https://www.coursera.org/account/accomplishments/certificate/T9VJF8Z30GMT",
    featured: false,
    description:
      "Master the fundamental web technologies for creating modern, responsive websites.",
    logo: "🌐",
  },
  {
    id: 13,
    title: "Getting Started with Git and GitHub",
    provider: "IBM",
    category: "Developer Tools",
    level: "Beginner",
    duration: "1 month",
    skills: ["Git", "GitHub", "Version Control", "Collaboration", "CI/CD"],
    issueDate: "2025-08-12",
    expiryDate: "2028-08-12",
    credentialId: "85SJQXACA6Q9",
    link: "https://www.coursera.org/account/accomplishments/certificate/85SJQXACA6Q9",
    featured: false,
    description:
      "Learn essential version control skills using Git and GitHub for collaborative development.",
    logo: "📚",
  },
  {
    id: 14,
    title: "Introduction to Software Engineering",
    provider: "IBM",
    category: "Software Engineering",
    level: "Beginner",
    duration: "1 month",
    skills: [
      "SDLC",
      "Agile",
      "Software Design",
      "Testing",
      "Project Management",
    ],
    issueDate: "2025-08-11",
    expiryDate: "2028-08-11",
    credentialId: "1IVMZ1FIRCJ8",
    link: "https://www.coursera.org/account/accomplishments/certificate/1IVMZ1FIRCJ8",
    featured: false,
    description:
      "Comprehensive introduction to software engineering principles and methodologies.",
    logo: "💻",
  },
  {
    id: 15,
    title: "Full Stack Software Developer Assessment",
    provider: "IBM",
    category: "Assessment",
    level: "Professional",
    duration: "Assessment",
    skills: ["Full Stack", "Problem Solving", "System Design", "Code Review"],
    issueDate: "2025-08-14",
    expiryDate: "2028-08-14",
    credentialId: "MBALLQ2QEP08",
    link: "https://www.coursera.org/account/accomplishments/certificate/MBALLQ2QEP08",
    featured: false,
    description:
      "Comprehensive assessment validating full-stack development skills and knowledge.",
    logo: "📋",
  },
  {
    id: 16,
    title: "Software Developer Career Guide and Interview Preparation",
    provider: "IBM",
    category: "Career Development",
    level: "Professional",
    duration: "1 month",
    skills: [
      "Interview Skills",
      "Career Planning",
      "Technical Communication",
      "Portfolio Development",
    ],
    issueDate: "2025-08-14",
    expiryDate: "2028-08-14",
    credentialId: "JS9MNMDOF2Q2",
    link: "https://www.coursera.org/account/accomplishments/certificate/JS9MNMDOF2Q2",
    featured: false,
    description:
      "Professional development course covering career advancement and interview preparation strategies.",
    logo: "🎯",
  },
  {
    id: 17,
    title: "Full Stack Capstone Project",
    provider: "IBM",
    category: "Project Work",
    level: "Advanced",
    duration: "2 months",
    skills: [
      "Full Stack",
      "Project Management",
      "System Integration",
      "Deployment",
    ],
    issueDate: "2025-08-14",
    expiryDate: "2028-08-14",
    credentialId: "XKTCPJMVPP5E",
    link: "https://www.coursera.org/account/accomplishments/certificate/XKTCPJMVPP5E",
    featured: true,
    description:
      "Comprehensive capstone project demonstrating end-to-end full-stack development capabilities.",
    logo: "🏆",
  },
  {
    id: 18,
    title: "HTML & CSS Crash Course",
    provider: "Independent Study",
    category: "Web Development",
    level: "Beginner",
    duration: "1 week",
    skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "Grid"],
    issueDate: "2025-08-11",
    expiryDate: "2028-08-11",
    credentialId: "HTML-CSS-2025",
    link: "#",
    featured: false,
    description:
      "Intensive crash course covering modern HTML and CSS techniques for web development.",
    logo: "🎨",
  },
  {
    id: 19,
    title: "JavaScript Fundamentals",
    provider: "Infosys Springboard",
    category: "Programming",
    level: "Intermediate",
    duration: "2 months",
    skills: [
      "JavaScript",
      "ES6+",
      "Async Programming",
      "DOM",
      "Event Handling",
    ],
    issueDate: "2025-08-11",
    expiryDate: "2028-08-11",
    credentialId: "JS-INFOSYS-2025",
    link: "#",
    featured: false,
    description:
      "Comprehensive JavaScript course covering modern language features and programming concepts.",
    logo: "🟡",
  },
  {
    id: 20,
    title: "IBM Design Thinking Practitioner",
    provider: "IBM",
    category: "Design",
    level: "Professional",
    duration: "1 month",
    skills: [
      "Design Thinking",
      "User Research",
      "Prototyping",
      "User Experience",
    ],
    issueDate: "2025-08-12",
    expiryDate: "2028-08-12",
    credentialId: "IBM-DESIGN-2025",
    link: "#",
    featured: false,
    description:
      "Professional certification in IBM Design Thinking methodology for user-centered design.",
    logo: "🎨",
  },
];

const categories = [
  "All",
  ...new Set(certifications.map((cert) => cert.category)),
];
const providers = [
  "All",
  ...new Set(certifications.map((cert) => cert.provider)),
];

const CertificationCard = ({ cert, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "badge-success";
      case "Intermediate":
        return "badge-warning";
      case "Advanced":
        return "badge-error";
      case "Professional":
        return "badge-primary";
      case "Assessment":
        return "badge-info";
      default:
        return "badge-neutral";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const isRecent = (dateString) => {
    const certDate = new Date(dateString);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return certDate >= thirtyDaysAgo;
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`card bg-gradient-to-br from-base-100 to-base-200 shadow-xl border border-base-300 hover:border-primary/50 transition-all duration-300 ${
        cert.featured ? "ring-2 ring-primary/20" : ""
      }`}
    >
      <div className="card-body p-6">
        <div className="flex justify-between items-start mb-2">
          {cert.featured && (
            <div className="badge badge-primary gap-1">
              <FiStar className="w-3 h-3" />
              Featured
            </div>
          )}
          {isRecent(cert.issueDate) && (
            <div className="badge badge-success gap-1">
              <span className="animate-pulse">●</span>
              New
            </div>
          )}
        </div>

        <div className="flex items-start gap-3 mb-4">
          <div className="text-3xl">{cert.logo}</div>
          <div className="flex-1">
            <h3 className="card-title text-lg font-bold leading-tight mb-2">
              {cert.title}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-primary">
                {cert.provider}
              </span>
              <div className={`badge badge-sm ${getLevelColor(cert.level)}`}>
                {cert.level}
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-base-content/70 mb-4 line-clamp-2">
          {cert.description}
        </p>

        <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
          <div className="flex items-center gap-1">
            <FiCalendar className="w-3 h-3 text-base-content/60" />
            <span>Issued: {formatDate(cert.issueDate)}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiTrendingUp className="w-3 h-3 text-base-content/60" />
            <span>Duration: {cert.duration}</span>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-base-300 pt-4 mb-4"
            >
              <div className="mb-3">
                <h4 className="font-semibold text-sm mb-2">Skills Covered:</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="badge badge-outline badge-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-xs text-base-content/60">
                <p>Credential ID: {cert.credentialId}</p>
                <p>Valid until: {formatDate(cert.expiryDate)}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="card-actions justify-between items-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="btn btn-ghost btn-sm"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>

          <div className="flex gap-2">
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm gap-2 hover:scale-105 transition-transform"
            >
              <FiCheckCircle className="w-4 h-4" />
              Verify
              <FiExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProvider, setSelectedProvider] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCerts, setFilteredCerts] = useState(certifications);
  const [stats, setStats] = useState({});

  useEffect(() => {
    let filtered = certifications;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((cert) => cert.category === selectedCategory);
    }

    if (selectedProvider !== "All") {
      filtered = filtered.filter((cert) => cert.provider === selectedProvider);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (cert) =>
          cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cert.skills.some((skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          cert.provider.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCerts(filtered);

    // Calculate stats
    const recentCerts = certifications.filter((cert) => {
      const certDate = new Date(cert.issueDate);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return certDate >= thirtyDaysAgo;
    });

    setStats({
      total: certifications.length,
      featured: certifications.filter((cert) => cert.featured).length,
      providers: new Set(certifications.map((cert) => cert.provider)).size,
      categories: new Set(certifications.map((cert) => cert.category)).size,
      recent: recentCerts.length,
    });
  }, [selectedCategory, selectedProvider, searchTerm]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div variants={headerVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 p-4 bg-primary/10 rounded-2xl">
              <FiAward className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Professional Certifications
              </h1>
            </div>

            <p className="text-lg text-base-content/70 max-w-2xl mx-auto mb-8">
              A comprehensive collection of {certifications.length}{" "}
              industry-recognized certifications demonstrating expertise across
              full-stack development, cloud computing, artificial intelligence,
              and modern software engineering practices.
            </p>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="stat bg-base-100/50 rounded-xl shadow-sm border border-primary/10">
                <div className="stat-value text-2xl text-primary">
                  {stats.total}
                </div>
                <div className="stat-title text-xs">Total Certificates</div>
              </div>
              <div className="stat bg-base-100/50 rounded-xl shadow-sm border border-secondary/10">
                <div className="stat-value text-2xl text-secondary">
                  {stats.featured}
                </div>
                <div className="stat-title text-xs">Featured</div>
              </div>
              <div className="stat bg-base-100/50 rounded-xl shadow-sm border border-accent/10">
                <div className="stat-value text-2xl text-accent">
                  {stats.providers}
                </div>
                <div className="stat-title text-xs">Providers</div>
              </div>
              <div className="stat bg-base-100/50 rounded-xl shadow-sm border border-info/10">
                <div className="stat-value text-2xl text-info">
                  {stats.categories}
                </div>
                <div className="stat-title text-xs">Categories</div>
              </div>
              {/* <div className="stat bg-base-100/50 rounded-xl shadow-sm border border-success/10">
                <div className="stat-value text-2xl text-success">
                  {stats.recent}
                </div>
                <div className="stat-title text-xs">Recent (30 days)</div>
              </div> */}
            </div>
          </motion.div>

          {/* Filters Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-base-100/80 backdrop-blur-sm rounded-2xl p-6 mb-12 shadow-xl border border-base-300"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex items-center gap-2 text-sm font-medium">
                <FiFilter className="w-4 h-4" />
                Filters:
              </div>

              <div className="flex flex-wrap gap-4 flex-1">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="select select-bordered select-sm"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "All" ? "All Categories" : category}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedProvider}
                  onChange={(e) => setSelectedProvider(e.target.value)}
                  className="select select-bordered select-sm"
                >
                  {providers.map((provider) => (
                    <option key={provider} value={provider}>
                      {provider === "All" ? "All Providers" : provider}
                    </option>
                  ))}
                </select>

                <div className="relative flex-1 max-w-xs">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-base-content/40" />
                  <input
                    type="text"
                    placeholder="Search certifications, skills, or providers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered input-sm w-full pl-10"
                  />
                </div>
              </div>

              <div className="text-sm text-base-content/60">
                Showing {filteredCerts.length} of {certifications.length}{" "}
                certifications
              </div>
            </div>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            <AnimatePresence mode="wait">
              {filteredCerts.map((cert, index) => (
                <CertificationCard key={cert.id} cert={cert} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCerts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">
                No certifications found
              </h3>
              <p className="text-base-content/60">
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedProvider("All");
                  setSearchTerm("");
                }}
                className="btn btn-primary mt-4"
              >
                Clear Filters
              </button>
            </motion.div>
          )}

          {/* Enhanced Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-20 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20"
          >
            <h3 className="text-2xl font-bold mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-base-content/70 mb-6 max-w-2xl mx-auto">
              These {certifications.length} certifications represent my
              commitment to staying current with industry trends and
              continuously expanding my technical expertise across diverse
              domains including full-stack development, cloud computing,
              artificial intelligence, and modern software engineering
              practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
              <div className="flex items-center justify-center gap-2 p-3 bg-base-100/50 rounded-lg">
                <FiCode className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">
                  Full Stack Development
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 bg-base-100/50 rounded-lg">
                <FiCloud className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Cloud & DevOps</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 bg-base-100/50 rounded-lg">
                <FiLayers className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">AI & Modern Tech</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
