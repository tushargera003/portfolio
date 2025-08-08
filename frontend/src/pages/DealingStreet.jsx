import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCar,
  FaPaperPlane,
  FaShieldAlt,
  FaSprayCan,
  FaWrench,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaCalendarAlt,
  FaCarAlt,
  FaMoneyBillWave,
  FaAward,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";
import { GiCarWheel, GiSteeringWheel } from "react-icons/gi";
import { BsStars, BsFillLightningFill } from "react-icons/bs";
import { IoMdWater } from "react-icons/io";
import { RiCarWashingLine } from "react-icons/ri";

const DealingStreet = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const daisyThemes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  const services = [
    {
      icon: <BsStars className="text-4xl" />,
      title: "Ceramic Coating",
      description:
        "Long-lasting protection with hydrophobic properties that repel water, dirt, and contaminants.",
      details: [
        "5-year warranty on premium coatings",
        "Enhances paint depth and gloss by 30%",
        "Reduces cleaning time by 50%",
        "Protects against UV damage and oxidation",
      ],
      priceRange: "₹15,000 - ₹50,000",
      duration: "1-2 days",
      category: "protection",
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Paint Protection Film",
      description:
        "Ultra-thin, virtually invisible film that protects your paint from chips, scratches, and stains.",
      details: [
        "Self-healing technology for minor scratches",
        "10-year warranty on premium films",
        "Custom precision-cut for perfect fit",
        "Maintains original paint appearance",
      ],
      priceRange: "₹25,000 - ₹1,20,000",
      duration: "2-3 days",
      category: "protection",
    },
    {
      icon: <FaSprayCan className="text-4xl" />,
      title: "Detailing Services",
      description:
        "Complete interior and exterior detailing to restore your vehicle to showroom condition.",
      details: [
        "Paint correction and polishing",
        "Leather conditioning and protection",
        "Engine bay detailing",
        "Odor elimination treatment",
      ],
      priceRange: "₹5,000 - ₹25,000",
      duration: "4-8 hours",
      category: "cleaning",
    },
    {
      icon: <FaWrench className="text-4xl" />,
      title: "Aftercare & Maintenance",
      description:
        "Specialized maintenance programs to keep your protection looking its best for years.",
      details: [
        "Annual inspection and touch-up",
        "Professional-grade maintenance kits",
        "Mobile service options available",
        "Personalized care schedule",
      ],
      priceRange: "₹2,000 - ₹10,000/year",
      duration: "Varies",
      category: "maintenance",
    },
    {
      icon: <IoMdWater className="text-4xl" />,
      title: "Hydrophobic Coating",
      description:
        "Advanced water-repellent treatment for glass and paint surfaces.",
      details: [
        "Improves visibility in heavy rain",
        "Reduces water spots by 90%",
        "Lasts 6-12 months per application",
        "Works on all glass surfaces",
      ],
      priceRange: "₹8,000 - ₹15,000",
      duration: "4-6 hours",
      category: "protection",
    },
    {
      icon: <RiCarWashingLine className="text-4xl" />,
      title: "Concierge Detailing",
      description: "Premium mobile detailing service at your home or office.",
      details: [
        "Same-day service available",
        "Eco-friendly waterless wash options",
        "Interior deep cleaning",
        "Express 2-hour service option",
      ],
      priceRange: "₹3,000 - ₹15,000",
      duration: "2-6 hours",
      category: "cleaning",
    },
    {
      icon: <BsFillLightningFill className="text-4xl" />,
      title: "Headlight Restoration",
      description: "Restore cloudy, yellowed headlights to like-new condition.",
      details: [
        "Permanent UV-resistant coating",
        "Improves night visibility by up to 70%",
        "2-year warranty on restoration",
        "Includes protective sealant",
      ],
      priceRange: "₹3,500 - ₹7,000",
      duration: "2-3 hours",
      category: "restoration",
    },
    {
      icon: <GiSteeringWheel className="text-4xl" />,
      title: "Leather Protection",
      description:
        "Specialized treatment to protect and rejuvenate leather interiors.",
      details: [
        "Prevents cracking and fading",
        "Creates stain-resistant surface",
        "Restores original leather scent",
        "Non-greasy matte finish",
      ],
      priceRange: "₹4,000 - ₹12,000",
      duration: "3-5 hours",
      category: "interior",
    },
  ];

  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((service) => service.category === activeTab);

  const testimonials = [
    {
      quote:
        "Detailing Street transformed my 5-year-old car to look brand new. The ceramic coating has made maintenance so much easier! After driving through monsoon rains, the car stays cleaner longer and washes off with just water.",
      author: "Rahul Sharma, Delhi",
      rating: 5,
      date: "15 March 2024",
      car: "Hyundai Creta",
    },
    {
      quote:
        "The PPF installation was flawless. After 2 years and 30,000 km, my car's front end still looks perfect with no stone chips. Their attention to detail is remarkable - they even wrapped the edges I didn't know could be wrapped!",
      author: "Priya Singh, Gurugram",
      rating: 5,
      date: "2 February 2024",
      car: "BMW 3 Series",
    },
    {
      quote:
        "I've tried several detailers in NCR, but none match the expertise of Detailing Street. Their paint correction removed years of swirl marks, and their interior cleaning eliminated stubborn smoke odors from the previous owner.",
      author: "Amit Patel, Noida",
      rating: 4,
      date: "28 January 2024",
      car: "Mercedes-Benz E-Class",
    },
    {
      quote:
        "As a car enthusiast with multiple vehicles, I trust only Detailing Street with my collection. They understand exotic cars require special care and always deliver showroom-quality results.",
      author: "Vikram Mehta, Faridabad",
      rating: 5,
      date: "10 January 2024",
      car: "Porsche 911",
    },
  ];

  const galleryImages = [
    {
      id: 1,
      alt: "Car after ceramic coating",
      category: "coating",
      beforeAfter: true,
    },
    {
      id: 2,
      alt: "PPF installation process",
      category: "ppf",
      beforeAfter: false,
    },
    {
      id: 3,
      alt: "Interior detailing",
      category: "interior",
      beforeAfter: true,
    },
    {
      id: 4,
      alt: "Showroom shine result",
      category: "polishing",
      beforeAfter: false,
    },
    {
      id: 5,
      alt: "Headlight restoration",
      category: "restoration",
      beforeAfter: true,
    },
    {
      id: 6,
      alt: "Engine bay detailing",
      category: "engine",
      beforeAfter: false,
    },
    {
      id: 7,
      alt: "Paint correction",
      category: "correction",
      beforeAfter: true,
    },
    {
      id: 8,
      alt: "Leather conditioning",
      category: "interior",
      beforeAfter: false,
    },
  ];

  const teamMembers = [
    {
      name: "Arjun Kapoor",
      role: "Founder & Master Detailer",
      experience: "12 years",
      specialty: "Paint Correction",
      bio: "Arjun started Detailing Street after training with industry leaders in Germany and Japan. His precision work has been featured in several automotive magazines.",
    },
    {
      name: "Neha Sharma",
      role: "PPF Installation Specialist",
      experience: "8 years",
      specialty: "Custom Film Applications",
      bio: "Neha holds certifications from major PPF manufacturers and has worked on everything from budget cars to million-dollar supercars.",
    },
    {
      name: "Rohan Malhotra",
      role: "Ceramic Coating Expert",
      experience: "6 years",
      specialty: "Nanotechnology Coatings",
      bio: "Rohan constantly tests new coating technologies to ensure Detailing Street offers only the most advanced protection solutions.",
    },
    {
      name: "Priya Singh",
      role: "Interior Detailing Specialist",
      experience: "5 years",
      specialty: "Leather Restoration",
      bio: "Priya has developed proprietary techniques for reviving even the most worn-out interiors to like-new condition.",
    },
  ];

  const stats = [
    { value: "3,500+", label: "Vehicles Protected", icon: <FaCarAlt /> },
    { value: "98%", label: "Customer Satisfaction", icon: <FaCheckCircle /> },
    { value: "50+", label: "Trained Professionals", icon: <FaUsers /> },
    { value: "15+", label: "Industry Awards", icon: <FaAward /> },
  ];

  const brands = [
    { name: "Gtechniq", specialty: "Ceramic Coatings" },
    { name: "XPEL", specialty: "Paint Protection Films" },
    { name: "CarPro", specialty: "Detailing Products" },
    { name: "Sonax", specialty: "Car Care" },
    { name: "3M", specialty: "Professional Films" },
    { name: "Koch-Chemie", specialty: "Professional Detailing" },
  ];

  const faqs = [
    {
      question: "How long does ceramic coating last?",
      answer:
        "Our ceramic coatings range from 2-year to lifetime warranties depending on the product chosen. Proper maintenance can extend this significantly.",
    },
    {
      question: "Can PPF be removed?",
      answer:
        "Yes, professional removal leaves no residue and won't damage your paint. We recommend having it done by experts to avoid any issues.",
    },
    {
      question: "How often should I get my car detailed?",
      answer:
        "We recommend full detailing every 6-12 months, with maintenance washes every 2-4 weeks for optimal protection.",
    },
    {
      question: "Do you offer mobile services?",
      answer:
        "Yes, we provide concierge detailing at your home or office for most services except full PPF installations.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit/debit cards, UPI, net banking, and cash. Financing options are available for larger projects.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <div className="navbar sticky top-0 z-50 bg-base-100 shadow-lg backdrop-blur-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-2 hover:bg-base-200 transition-colors"
              aria-label="Open navigation menu"
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-base-100 rounded-xl w-56 border border-base-300"
            >
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#services", label: "Services" },
                { href: "#team", label: "Our Team" },
                { href: "#gallery", label: "Gallery" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#faq", label: "FAQs" },
                { href: "#contact", label: "Contact" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="py-3 px-4 rounded-lg hover:bg-primary hover:text-primary-content transition-all duration-200 font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            className="btn btn-ghost text-lg sm:text-xl font-bold hover:bg-base-200 transition-colors"
            href="#home"
          >
            <GiCarWheel className="text-xl sm:text-2xl mr-1 sm:mr-2 text-primary" />
            <span className="hidden xs:inline">Detailing Street</span>
            <span className="xs:hidden">DS</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#team", label: "Our Team" },
              { href: "#gallery", label: "Gallery" },
              { href: "#testimonials", label: "Testimonials" },
              { href: "#faq", label: "FAQs" },
              { href: "#contact", label: "Contact" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="rounded-lg hover:bg-primary hover:text-primary-content transition-all duration-200 font-medium px-4 py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm sm:btn-md hover:bg-base-200 transition-colors"
              aria-label="Select theme"
              id="theme-dropdown-btn"
            >
              <span className="hidden sm:inline">Theme</span>
              <span className="sm:hidden">🎨</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 sm:h-4 sm:w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] p-2 shadow-2xl bg-base-100 rounded-xl w-48 sm:w-52 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto border border-base-300"
              id="theme-dropdown-menu"
            >
              {daisyThemes.map((theme) => (
                <li key={theme} className="mb-1">
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start hover:bg-primary hover:text-primary-content transition-colors text-left"
                    aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
                    value={theme}
                    onChange={() => {
                      // Close the dropdown after theme selection
                      const dropdownBtn =
                        document.getElementById("theme-dropdown-btn");
                      const dropdownMenu = document.getElementById(
                        "theme-dropdown-menu"
                      );
                      if (dropdownBtn && dropdownMenu) {
                        dropdownBtn.blur();
                        dropdownMenu.blur();
                        // Remove focus from the dropdown to close it
                        document.activeElement?.blur();
                      }
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero min-h-screen relative">
        <div className="hero-video w-full h-full object-cover absolute">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1494972308805-463bc619d34e?q=80&w=2073&auto=format&fit=crop"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-blue-sports-car-12507-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className=" bg-opacity-60"></div>
        </div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <GiCarWheel className="text-6xl mx-auto mb-6 text-primary" />
            </motion.div>
            <h1 className="mb-5 text-5xl md:text-7xl font-bold">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Protect.
              </motion.span>{" "}
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Shine.
              </motion.span>{" "}
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Repeat.
              </motion.span>
            </h1>
            <p className="mb-5 text-xl md:text-2xl">
              India's Premier Automotive Protection & Detailing Service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <a href="#contact" className="btn btn-primary btn-lg">
                  Get a Free Quote
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <a
                  href="#services"
                  className="btn btn-outline btn-lg text-neutral-content hover:text-neutral"
                >
                  Our Services
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scrolling indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="text-neutral-content flex flex-col items-center">
            <span className="mb-2">Scroll Down</span>
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </div>
        </motion.div>
      </section>
      {/* Stats Banner */}
      <section className="py-8 bg-primary text-primary-content">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold flex items-center justify-center gap-2">
                  {stat.icon}
                  {stat.value}
                </div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold mb-4">About Detailing Street</h2>
            <div className="divider w-1/2 mx-auto mb-4"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Revolutionizing automotive care in India with cutting-edge
              technology and unparalleled craftsmanship.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="text-8xl mb-4 text-primary">
                <FaCar />
              </div>
              <h3 className="text-3xl font-semibold mb-4">
                India's Leading Auto Detailing Network
              </h3>
              <p className="mb-4 text-lg">
                Founded in 2017, Detailing Street has grown to become the
                premier car detailing service provider in North India with over
                50 outlets across Delhi NCR and expanding nationwide.
              </p>
              <p className="mb-4 text-lg">
                Our certified technicians undergo 200+ hours of training and use
                only the highest quality products from global leaders in
                automotive protection. We combine cutting-edge techniques with
                meticulous attention to detail to protect and enhance your
                vehicle's appearance.
              </p>
              <p className="mb-6 text-lg">
                We're proud to be the first Indian detailing company certified
                by the International Detailing Association, bringing world-class
                standards to the local market.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="badge badge-lg badge-primary gap-2">
                  <FaCheckCircle /> Certified Professionals
                </div>
                <div className="badge badge-lg badge-primary gap-2">
                  <FaAward /> Award Winning
                </div>
                <div className="badge badge-lg badge-primary gap-2">
                  <FaMoneyBillWave /> Price Match Guarantee
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="card bg-base-200 shadow-xl rounded-lg">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?q=80&w=1935&auto=format&fit=crop"
                    alt="Car detailing process"
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-2xl">Our Mission & Values</h3>
                  <p>
                    To provide unparalleled vehicle protection and enhancement
                    services that exceed customer expectations through
                    innovation, expertise, and passion for automotive
                    perfection.
                  </p>
                  <div className="collapse collapse-plus bg-base-100 mt-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-medium">
                      Our Core Values
                    </div>
                    <div className="collapse-content">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>Excellence:</strong> Never compromising on
                          quality or results.
                        </li>
                        <li>
                          <strong>Innovation:</strong> Continuously adopting the
                          latest technologies.
                        </li>
                        <li>
                          <strong>Integrity:</strong> Honest recommendations and
                          transparent pricing.
                        </li>
                        <li>
                          <strong>Passion:</strong> Genuine love for automotive
                          perfection.
                        </li>
                        <li>
                          <strong>Community:</strong> Supporting car enthusiasts
                          and local businesses.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brand Partnerships */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">
                  Trusted By Leading Brands
                </h4>
                <div className="flex flex-wrap gap-4 justify-center">
                  {brands.map((brand, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="badge badge-outline p-4"
                    >
                      {brand.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <div className="divider w-1/2 mx-auto"></div>
            <p className="max-w-2xl mx-auto text-lg">
              Premium protection solutions tailored to your vehicle's needs and
              your lifestyle
            </p>
          </div>

          {/* Service Filter Tabs */}
          <div className="flex justify-center mb-8 overflow-x-auto">
            <div className="tabs tabs-boxed">
              <button
                className={`tab ${activeTab === "all" ? "tab-active" : ""}`}
                onClick={() => setActiveTab("all")}
              >
                All Services
              </button>
              <button
                className={`tab ${
                  activeTab === "protection" ? "tab-active" : ""
                }`}
                onClick={() => setActiveTab("protection")}
              >
                Protection
              </button>
              <button
                className={`tab ${
                  activeTab === "cleaning" ? "tab-active" : ""
                }`}
                onClick={() => setActiveTab("cleaning")}
              >
                Cleaning
              </button>
              <button
                className={`tab ${
                  activeTab === "restoration" ? "tab-active" : ""
                }`}
                onClick={() => setActiveTab("restoration")}
              >
                Restoration
              </button>
              <button
                className={`tab ${
                  activeTab === "maintenance" ? "tab-active" : ""
                }`}
                onClick={() => setActiveTab("maintenance")}
              >
                Maintenance
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="flip-card h-80 group rounded-xl shadow-xl"
              >
                <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d]">
                  {/* Flip Card Front */}
                  <div className="flip-card-front absolute w-full h-full bg-base-100 rounded-xl p-6 flex flex-col items-center justify-center [backface-visibility:hidden]">
                    <div className="text-primary mb-4 transition-all duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="card-title text-2xl font-bold">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-base-content text-opacity-80">
                      {service.description}
                    </p>
                  </div>

                  {/* Flip Card Back */}
                  <div className="flip-card-back absolute w-full h-full bg-base-100 rounded-xl p-6 flex flex-col justify-start items-center [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-y-auto">
                    <h3 className="card-title text-2xl font-bold mb-4 text-primary">
                      Details & Pricing
                    </h3>
                    <ul className="list-disc pl-5 text-left space-y-2 mb-4 w-full">
                      {service.details.map((detail, i) => (
                        <li key={i} className="text-sm">
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-2 w-full mt-auto">
                      <div className="flex items-center gap-2 text-sm">
                        <FaMoneyBillWave className="text-primary" />
                        <span className="font-medium">Price Range:</span>
                        <span>{service.priceRange}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <FaCalendarAlt className="text-primary" />
                        <span className="font-medium">Duration:</span>
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <div className="card-actions mt-4 w-full">
                      <button className="btn btn-primary btn-sm w-full">
                        Book Service
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Add the necessary CSS for the flip effect */}
        <style jsx>{`
          .flip-card {
            background-color: transparent;
            perspective: 1000px;
          }
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
        `}</style>
      </section>
      {/* Team Section */}
      <section id="team" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Meet Our Experts</h2>
            <div className="divider w-1/2 mx-auto"></div>
            <p className="max-w-2xl mx-auto text-lg">
              Our certified professionals bring unmatched expertise to every
              vehicle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="card bg-base-200 shadow-xl">
                  <figure>
                    <img
                      src={`https://randomuser.me/api/portraits/${
                        index % 2 === 0 ? "men" : "women"
                      }/${index + 30}.jpg`}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title">{member.name}</h3>
                    <div className="badge badge-primary">{member.role}</div>
                    <div className="flex items-center gap-2">
                      <FaAward className="text-primary" />
                      <span>{member.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCar className="text-primary" />
                      <span>Specialty: {member.specialty}</span>
                    </div>
                    <p className="mt-2">{member.bio}</p>
                    <div className="card-actions justify-end mt-4">
                      <button className="btn btn-primary btn-sm">
                        View Portfolio
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Training Program */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-primary text-primary-content p-8 rounded-xl"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
                <p className="mb-4 text-lg">
                  We're always looking for passionate individuals to join our
                  growing team of automotive care professionals.
                </p>
                <p className="mb-6 text-lg">
                  No experience? No problem! Our 6-week intensive training
                  program will teach you everything from basic washing
                  techniques to advanced paint correction.
                </p>
                <button className="btn btn-secondary">
                  Learn About Career Opportunities
                </button>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
                  alt="Detailing training"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-base-200">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold mb-4 tracking-tight">
              Our Work
            </h2>
            <div className="divider w-1/4 mx-auto"></div>
            <p className="max-w-3xl mx-auto text-xl text-base-content/80">
              Witness the transformative power of precision detailing, paint
              perfection, and ceramic excellence.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
                className="group relative overflow-hidden rounded-xl shadow-lg border border-base-300"
              >
                <img
                  key={index}
                  src={`https://picsum.photos/id/${index + 30}/600/400`}
                  alt={`Car ${index}`}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-bold mb-2">
                    {image.alt}
                  </h3>
                  {image.beforeAfter && (
                    <button className="btn btn-sm btn-outline btn-primary self-start">
                      View Before / After
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Video Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-4xl font-semibold text-center mb-8">
              Process Showcase
            </h3>
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto border border-base-300">
              <iframe
                className="w-full h-[500px]"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&showinfo=0&controls=1"
                title="Detailing Process Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Customer Experiences</h2>
            <div className="divider w-1/2 mx-auto"></div>
            <p className="max-w-2xl mx-auto text-lg">
              Don't just take our word for it - hear from our satisfied
              customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card bg-base-200 shadow-lg"
              >
                <div className="card-body">
                  <div className="flex items-start">
                    <FaQuoteLeft className="text-3xl text-primary mr-4 mt-1 opacity-30" />
                    <p className="text-lg italic">{testimonial.quote}</p>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">
                          {testimonial.author}
                        </div>
                        <div className="text-sm opacity-70">
                          {testimonial.car}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs opacity-50 mt-1">
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google Reviews */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-4xl font-semibold mb-4">See More Reviews</h3>
            <p className="text-lg mb-6 text-gray-600">
              Check out what our customers are saying about us!
            </p>

            {/* Customer Satisfaction Summary */}
            <div className="mb-8">
              <span className="text-3xl font-bold">4.8</span>
              <span className="text-lg text-gray-500">/ 5.0</span>
              <div className="flex justify-center items-center mt-2">
                <span className="text-yellow-500">
                  <svg
                    className="w-5 h-5 inline-block"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-9.19-.63L12 2 11.19 8.61 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    className="w-5 h-5 inline-block"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-9.19-.63L12 2 11.19 8.61 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    className="w-5 h-5 inline-block"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-9.19-.63L12 2 11.19 8.61 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    className="w-5 h-5 inline-block"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-9.19-.63L12 2 11.19 8.61 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    className="w-5 h-5 inline-block"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-9.19-.63L12 2 11.19 8.61 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <button
                className="btn btn-primary flex items-center transition-transform duration-300 ease-in-out transform hover:scale-105"
                aria-label="View Google Reviews"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
                </svg>
                Google Reviews
              </button>
              <button
                className="btn btn-outline flex items-center transition-transform duration-300 ease-in-out transform hover:scale-105"
                aria-label="View Instagram Reviews"
              >
                <FaInstagram className="w-6 h-6 mr-2" />
                Instagram
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-base-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="divider w-24 mx-auto mb-4"></div>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Quick answers to your most common queries about our services,
              process, and policies.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="collapse collapse-arrow bg-base-100 rounded-box shadow-md hover:shadow-lg transition-shadow duration-300">
                  <input type="checkbox" />
                  <div className="collapse-title text-lg md:text-xl font-semibold text-base-content">
                    {faq.question}
                  </div>
                  <div className="collapse-content text-base text-base-content/80 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold mb-4">Contact Us</h2>
            <div className="divider w-1/2 mx-auto"></div>
            <p className="max-w-2xl mx-auto text-lg">
              Get in touch for a free consultation or quote. We're here to help!
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl">Send us a message</h3>
                  <form className="space-y-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Your Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="input input-bordered w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Your Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Phone Number</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="input input-bordered w-full"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Vehicle Details</span>
                      </label>
                      <select className="select select-bordered w-full">
                        <option disabled selected>
                          Select your vehicle
                        </option>
                        <option>Hatchback</option>
                        <option>Sedan</option>
                        <option>SUV</option>
                        <option>Luxury Vehicle</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">
                          Service Interested In
                        </span>
                      </label>
                      <select className="select select-bordered w-full">
                        <option disabled selected>
                          Select service
                        </option>
                        <option>Ceramic Coating</option>
                        <option>Paint Protection Film</option>
                        <option>Full Detailing</option>
                        <option>Maintenance Package</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Your Message</span>
                      </label>
                      <textarea
                        className="textarea textarea-bordered h-24 w-full"
                        placeholder="Type your message here"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="form-control mt-6">
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="card bg-base-200 shadow-xl h-full">
                <div className="card-body">
                  <h3 className="card-title text-2xl">Our Locations</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <FaMapMarkerAlt className="text-2xl text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg">
                          Delhi NCR Branches
                        </h4>
                        <p className="font-medium">
                          Faridabad: Sector 12, Near Honda Showroom
                        </p>
                        <p className="font-medium">
                          Gurugram: Sector 14, Opposite Galleria Market
                        </p>
                        <p className="font-medium">
                          Delhi: South Extension Part 2
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <FaPhone className="text-2xl text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg">
                          Contact Numbers
                        </h4>
                        <p className="font-medium">
                          General Inquiries: +91 98765 43210
                        </p>
                        <p className="font-medium">
                          Customer Support: +91 98765 43211
                        </p>
                        <p className="font-medium">
                          Franchise Queries: +91 98765 43212
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <FaEnvelope className="text-2xl text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg">Email</h4>
                        <p className="font-medium">info@detailingstreet.com</p>
                        <p className="font-medium">
                          support@detailingstreet.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <GiCarWheel className="text-2xl text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg">Working Hours</h4>
                        <p className="font-medium">
                          Monday to Saturday: 9:00 AM - 7:00 PM
                        </p>
                        <p className="font-medium">
                          Sunday: 10:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-base-200">
        <div className="container mx-auto px-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.566179348062!2d77.31635731508254!3d28.61285898242488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce53479d2e3a9%3A0x5d1a5f4a0e9a0a5f!2sDetailing%20Street!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[450px]"
          ></iframe>
        </div>
      </section>
      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Subscribe to our newsletter for exclusive offers, detailing tips,
              and community events
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="input input-bordered w-full text-neutral"
              />
              <button className="btn btn-secondary">Subscribe</button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-neutral text-neutral-content px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-10 justify-between">
          {/* Brand & Newsletter */}
          <div className="flex flex-col gap-6 w-full sm:w-[45%] lg:w-[22%]">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <GiCarWheel className="text-3xl text-primary" />
                <span className="text-2xl font-bold">Detailing Street</span>
              </div>
              <p className="text-sm leading-relaxed">
                Premium car detailing & protection since 2017. 50+ outlets
                across NCR.
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <p className="font-semibold mb-2">Get Detailing Tips</p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-sm input-bordered w-full max-w-xs text-base-content placeholder:text-base-content/70"
                />
                <button className="btn btn-primary btn-sm">
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="font-semibold mb-2">Follow Us</p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="btn btn-sm btn-circle btn-ghost hover:bg-primary hover:text-primary-content"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="btn btn-sm btn-circle btn-ghost hover:bg-primary hover:text-primary-content"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="btn btn-sm btn-circle btn-ghost hover:bg-primary hover:text-primary-content"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  className="btn btn-sm btn-circle btn-ghost hover:bg-primary hover:text-primary-content"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="btn btn-sm btn-circle btn-ghost hover:bg-primary hover:text-primary-content"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="w-1/2 sm:w-[45%] lg:w-[15%]">
            <h4 className="footer-title mb-3 text-lg">Services</h4>
            <nav className="grid gap-2 text-sm">
              <a className="link link-hover hover:text-primary">
                Ceramic Coating
              </a>
              <a className="link link-hover hover:text-primary">
                Paint Protection Film
              </a>
              <a className="link link-hover hover:text-primary">
                Full Detailing
              </a>
              <a className="link link-hover hover:text-primary">
                Interior Restoration
              </a>
              <a className="link link-hover hover:text-primary">
                Headlight Restoration
              </a>
              <a className="link link-hover hover:text-primary">
                Maintenance Plans
              </a>
            </nav>
          </div>

          {/* Company */}
          <div className="w-1/2 sm:w-[45%] lg:w-[15%]">
            <h4 className="footer-title mb-3 text-lg">Company</h4>
            <nav className="grid gap-2 text-sm">
              <a href="#about" className="link link-hover hover:text-primary">
                About Us
              </a>
              <a href="#team" className="link link-hover hover:text-primary">
                Our Experts
              </a>
              <a href="#gallery" className="link link-hover hover:text-primary">
                Our Work
              </a>
              <a
                href="#testimonials"
                className="link link-hover hover:text-primary"
              >
                Client Stories
              </a>
              <a href="#" className="link link-hover hover:text-primary">
                Careers
              </a>
              <a href="#" className="link link-hover hover:text-primary">
                Franchise With Us
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="w-full sm:w-[45%] lg:w-[20%]">
            <h4 className="footer-title mb-3 text-lg">Contact</h4>
            <address className="not-italic grid gap-3 text-sm">
              <div className="flex gap-2 items-start">
                <FaMapMarkerAlt className="mt-1 text-primary" />
                <div>
                  <p className="font-medium">Main Branch:</p>
                  <p>Sector 14, Gurugram</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <FaPhone className="text-primary" />
                <a href="tel:+919876543210" className="hover:text-primary">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <FaEnvelope className="text-primary" />
                <a
                  href="mailto:info@detailingstreet.com"
                  className="hover:text-primary"
                >
                  info@detailingstreet.com
                </a>
              </div>
              <div className="flex gap-2 items-start">
                <FaCalendarAlt className="text-primary" />
                <div>
                  <p>Mon–Sat: 9AM–7PM</p>
                  <p>Sun: 10AM–5PM</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-base-300 mt-10 pt-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-center md:text-left">
              © 2025 Detailing Street. All rights reserved.
              <div className="flex gap-4 mt-2 md:mt-0">
                <a href="#" className="link link-hover hover:text-primary">
                  Privacy Policy
                </a>
                <a href="#" className="link link-hover hover:text-primary">
                  Terms
                </a>
                <a href="#" className="link link-hover hover:text-primary">
                  Sitemap
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span>Payments:</span>
              <div className="flex gap-1">
                <div className="bg-base-100 text-black rounded px-1.5 py-0.5 text-xs font-semibold">
                  VISA
                </div>
                <div className="bg-base-100 text-black rounded px-1.5 py-0.5 text-xs font-semibold">
                  MC
                </div>
                <div className="bg-base-100 text-black rounded px-1.5 py-0.5 text-xs">
                  UPI
                </div>
                <div className="bg-base-100 text-black rounded px-1.5 py-0.5 text-xs">
                  ₹
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DealingStreet;
