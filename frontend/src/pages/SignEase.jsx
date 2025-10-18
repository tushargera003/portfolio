import React, { useState, useEffect, useRef } from 'react';
// Import dependencies needed in the real environment
import { Menu, X, CheckCircle, Zap, Shield, Globe, Users, DollarSign, MapPin, Mail, Phone, Clock, FileText, ArrowUp } from 'lucide-react';
// We simulate the framer-motion import and usage.
// In a real project, you would 'npm install framer-motion'
const motion = {
  div: ({ children, ...props }) => <div {...props}>{children}</div>,
  section: ({ children, ...props }) => <section {...props}>{children}</section>,
  button: ({ children, ...props }) => <button {...props}>{children}</button>,
  p: ({ children, ...props }) => <p {...props}>{children}</p>,
};

// --- Configuration ---

const brand = {
  name: "SignEase by Malhotras",
  logo: <Shield className="w-6 h-6 inline-block mr-2 text-primary" />,
  tagline: "Empowering Secure Digital Transactions Across India",
};

// DaisyUI Themes for the toggle
const DAISY_THEMES = [
  'corporate', 'light', 'dark', 'dracula', 'sunset', 'cupcake', 'bumblebee', 'emerald', 'synthwave', 'forest', 'business', 'night'
];

// --- Utility Components ---

// Smooth scrolling function for navigation
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

// The main application component
const SignEase = () => {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to 'corporate'
    return localStorage.getItem('signeaseTheme') || 'corporate';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sections = ['Home', 'Services', 'Why Choose Us', 'Process', 'Contact'];

  // Effect to apply the theme to the HTML element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('signeaseTheme', theme);
  }, [theme]);

  // Effect for scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsMenuOpen(false);
  };

  // --- Metadata & SEO Structure ---
  const SeoMeta = () => (
    <>
      {/* Favicon Placeholder (using SVG inline for single-file mandate) */}
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2290%%22 style=%22font-size:90px;text-anchor:middle;%22>✍️</text></svg>" />
      
      {/* Title & Description */}
      <title>Digital Signature Certificate (DSC) India | SignEase by Malhotras</title>
      <meta name="description" content="SignEase by Malhotras offers fast, secure, and 100% online Digital Signature Certificates (DSC) including Class 3 and DGFT. Your trusted partner for eTender and compliance." />
      <meta name="keywords" content="Digital Signature Certificate, DSC Issuance, DGFT DSC, Class 3 DSC, Digital Signature for eTender, SignEase by Malhotras, Buy DSC Online India" />

      {/* Open Graph / Social Media Tags */}
      <meta property="og:title" content="SignEase by Malhotras - Secure Digital Signatures" />
      <meta property="og:description" content="Fast, reliable, and expertly supported Digital Signature Certificates (DSC) across India." />
      <meta property="og:type" content="website" />
      {/* OG Image placeholder */}
      <meta property="og:image" content="https://placehold.co/1200x630/007bff/ffffff?text=SignEase+DSC+Solutions" />
      
      {/* Schema Markup (LocalBusiness) - Use a script tag for placement in a real head */}
      {/* In this single-file React environment, we place the JSON-LD here for completeness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: `{
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          "name": "SignEase by Malhotras",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ghaziabad, Uttar Pradesh",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7503675299",
            "contactType": "customer service"
          },
          "url": "https://signease.com"
        }`
      }} />
    </>
  );

  // --- Components for Sections ---

  const Header = () => (
    <motion.div
      className="sticky top-0 z-50 shadow-md bg-base-100/90 backdrop-blur transition-all duration-300"
      // Framer-motion properties
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="navbar container mx-auto p-4 md:p-6">
        {/* Brand/Logo */}
        <div className="navbar-start">
          <a
            className="text-2xl font-extrabold tracking-tight text-primary hover:text-primary-focus transition-colors cursor-pointer"
            onClick={() => scrollToSection('Home')}
          >
            {brand.logo}
            <span className="text-base-content">SignEase</span>
            <span className="text-sm font-light ml-1 opacity-70">by Malhotras</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-medium">
            {sections.map(section => (
              <li key={section}>
                <a
                  className="px-4 py-2 rounded-full hover:bg-base-300 transition-colors"
                  onClick={() => scrollToSection(section)}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* End Section: Theme Toggle & Mobile Button */}
        <div className="navbar-end space-x-2">
          {/* Theme Dropdown */}
          <div className="dropdown dropdown-end hidden sm:block">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <Clock className="w-5 h-5" />
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 max-h-80 overflow-y-auto">
              {DAISY_THEMES.map(t => (
                <li key={t}>
                  <a className={`capitalize ${theme === t ? 'active bg-primary text-primary-content' : ''}`} onClick={() => handleThemeChange(t)}>
                    {t}
                    {theme === t && <CheckCircle className="w-4 h-4 ml-2" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="btn btn-ghost lg:hidden btn-circle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer (hidden on lg and up) */}
      <div className={`fixed top-[80px] left-0 w-full bg-base-100 shadow-xl transition-transform duration-300 lg:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <ul className="menu menu-vertical p-4 font-medium">
          {sections.map(section => (
            <li key={section}>
              <a
                className="py-3 text-lg hover:bg-base-200 transition-colors rounded-lg"
                onClick={() => {
                  scrollToSection(section);
                  setIsMenuOpen(false);
                }}
              >
                {section}
              </a>
            </li>
          ))}
          <li className="menu-title mt-4">Theme Selector</li>
          {DAISY_THEMES.map(t => (
            <li key={t}>
              <a className={`capitalize py-2 ${theme === t ? 'active bg-primary text-primary-content' : ''}`} onClick={() => handleThemeChange(t)}>
                {t}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  const Hero = () => (
    <motion.section
      id="Home"
      className="container mx-auto px-4 pt-16 pb-24 md:pt-32 md:pb-40 text-center lg:text-left min-h-[60vh] flex items-center"
      // Framer-motion properties
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      }}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            {brand.logo}
            {brand.tagline}
          </h1>
          <p className="text-xl md:text-2xl text-base-content/80 mb-8">
            SignEase by Malhotras — your trusted partner in **Digital Signature Certificate (DSC)** solutions. Fast, reliable, and expertly supported for all compliance and e-Tender needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              className="btn btn-primary btn-lg rounded-full shadow-lg"
              // Framer-motion properties
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)" }}
              onClick={() => scrollToSection('Contact')}
            >
              Get Your DSC Now
            </motion.button>
            <motion.a
              href="https://wa.me/917503675299"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg rounded-full text-base-content border-base-content/30 hover:bg-base-200"
              // Framer-motion properties
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-5 h-5" />
              Whatsapp Us
            </motion.a>
          </div>
          <p className="mt-4 text-sm text-base-content/60">
            Trusted by businesses for reliable DSC Issuance across India.
          </p>
        </div>

        {/* Brand Illustration/Image Placeholder */}
        <div className="hidden lg:flex justify-center">
          <svg className="w-full max-w-lg h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" rx="20" fill="currentColor" className="text-primary/10" />
            <path d="M100 100 L300 100 L300 200 L100 200 L100 100 Z" fill="currentColor" className="text-primary/30" />
            <CheckCircle className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ color: 'var(--p)' }} />
            <text x="200" y="270" textAnchor="middle" fontSize="24" fill="currentColor" className="text-primary-content font-bold">Secure Digital Signing</text>
          </svg>
        </div>
      </div>
    </motion.section>
  );

  const Services = () => {
    const serviceItems = [
      { icon: <FileText className="w-6 h-6 text-primary" />, title: "Class 3 Individual Signing", description: "For individuals managing tax, MCA, and compliance tasks. Platforms: GST, MCA21, ROC, Director KYC, IRCTC, IEC Code, DGFT, Startup India, etc." },
      { icon: <Users className="w-6 h-6 text-primary" />, title: "Class 3 Organization Combo", description: "Designed for organizations handling secure tenders and submissions. Platforms: eTender, AICTE, CBSE, GST, ITR, EPF, MCA21, DGFT, etc." },
      { icon: <Globe className="w-6 h-6 text-primary" />, title: "DGFT Organization Signing", description: "Specialized for exporters/importers using the **DGFT portal**. Supports: DGFT, ICEGATE, MEIS, SEIS, MCA21, etc." },
      { icon: <Clock className="w-6 h-6 text-primary" />, title: "DSC Issuance & Renewal", description: "Get or renew your DSC effortlessly with **100% online processing**. Fast track available." },
    ];

    return (
      <motion.section
        id="Services"
        className="container mx-auto px-4 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6 } }
        }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Our Core Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((item, index) => (
            <motion.div
              key={index}
              className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              // Framer-motion properties
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="card-body items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-3">
                  {item.icon}
                </div>
                <h3 className="card-title text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-base-content/70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    );
  };

  const WhyChooseUs = () => {
    const features = [
      { icon: <Zap className="w-6 h-6 text-primary" />, title: "Speed & Efficiency", description: "Same-day processing and fast delivery ensures you never miss a deadline." },
      { icon: <Clock className="w-6 h-6 text-primary" />, title: "Expert Guidance", description: "Step-by-step support from application to DSC installation and setup." },
      { icon: <CheckCircle className="w-6 h-6 text-primary" />, title: "Hassle-Free Process", description: "100% online KYC (Know Your Customer) from the comfort of your home or office." },
      { icon: <Phone className="w-6 h-6 text-primary" />, title: "Dedicated Support", description: "Quick and responsive WhatsApp-based assistance for all your queries." },
      { icon: <DollarSign className="w-6 h-6 text-primary" />, title: "Competitive Pricing", description: "Affordable plans and substantial bulk order discounts available." },
      { icon: <Shield className="w-6 h-6 text-primary" />, title: "Trusted Partner", description: "Backed by Malhotras – known for reliability, security, and transparency." },
    ];

    return (
      <motion.section
        id="Why Choose Us"
        className="bg-base-200 px-4 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6 } }
        }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose SignEase?</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-base-content/80">
            Choose professionalism, efficiency, and trust. We simplify the complexity of **Digital Signature Certificate** issuance and renewal.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card bg-base-100 shadow-lg transition-all duration-300 hover:shadow-xl hover:ring-2 ring-primary/50"
                // Framer-motion properties
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="card-body">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/20 rounded-xl">
                      {feature.icon}
                    </div>
                    <h3 className="card-title text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-base-content/70 mt-3">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  };

  const Process = () => {
    const steps = [
      { step: 1, title: "Submit Details", description: "Fill out our simple KYC form or message us on WhatsApp with your requirements." },
      { step: 2, title: "Quick Verification", description: "Complete the mandatory OTP and a short 20-second video verification from your device." },
      { step: 3, title: "Receive Your DSC", description: "Your Digital Signature Certificate is processed and delivered securely within 2 working days." },
    ];

    return (
      <motion.section
        id="Process"
        className="container mx-auto px-4 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6 } }
        }}
      >
        <h2 className="text-4xl font-bold text-center mb-16">Our Simple 3-Step Process</h2>
        <div className="flex flex-col lg:flex-row justify-center items-stretch space-y-8 lg:space-y-0 lg:space-x-12 relative">
          {/* Horizontal/Vertical Line Connector */}
          <div className="hidden lg:block absolute h-1 w-2/3 bg-primary/30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex-1 max-w-sm card bg-base-100 shadow-xl z-10 transition-shadow duration-300 hover:shadow-2xl border-t-4 border-primary lg:border-t-0 lg:border-l-4"
              // Framer-motion properties
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="card-body p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-content font-extrabold text-xl">
                    {step.step}
                  </div>
                  <h3 className="card-title text-2xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-base-content/80 mt-2">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    );
  };

  const Contact = () => (
    <motion.section
      id="Contact"
      className="bg-base-200 px-4 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      }}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Connect With SignEase</h2>
        <div className="card bg-base-100 shadow-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-4">Contact Information</h3>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a href="https://wa.me/917503675299" target="_blank" rel="noopener noreferrer" className="link link-hover text-base-content/80 block">7503675299</a>
                  <a href="https://wa.me/917053371293" target="_blank" rel="noopener noreferrer" className="link link-hover text-base-content/80 block">7053371293</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:contact.signease@gmail.com" className="link link-hover text-base-content/80">contact.signease@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-base-content/80">Ghaziabad, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Simple Quote Form Placeholder */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Request a Quote</h3>
              <p className="text-base-content/70 mb-4">Tell us what you need, and we'll get back to you with the best price.</p>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="input input-bordered w-full" required />
                <input type="email" placeholder="Email Address" className="input input-bordered w-full" required />
                <textarea className="textarea textarea-bordered w-full" placeholder="Your Requirement (e.g., 'Class 3, 2-year renewal')" rows="3"></textarea>
                <button type="submit" className="btn btn-primary w-full">Get Quote</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );

  const Footer = () => (
    <footer className="footer footer-center p-10 bg-neutral text-neutral-content rounded-t-xl">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" onClick={() => scrollToSection('Services')}>Services</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Terms of Use</a>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - {brand.name}. All rights reserved. | Specializing in DSC Issuance & Renewal.</p>
      </aside>
    </footer>
  );

  return (
    // Inject the SEO metadata into the component structure (simulated head injection)
    <>
      <SeoMeta />
      <div className="font-sans min-h-screen flex flex-col" style={{ scrollBehavior: 'smooth' }}>
        <Header />
        <main className="flex-grow">
          <Hero />
          <Services />
          <WhyChooseUs />
          <Process />
          <Contact />
        </main>
        <Footer />

        {/* Scroll To Top Button */}
        <motion.button
          className={`fixed bottom-8 right-8 btn btn-primary btn-circle shadow-lg z-40 transition-opacity duration-300 ${showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          // Framer-motion properties
          initial={{ scale: 0 }}
          animate={{ scale: showScrollTop ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </>
  );
};

export default SignEase;

