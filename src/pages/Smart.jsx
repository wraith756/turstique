import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import app1 from "../assets/app1.png";
import atm2 from "../assets/atm2.png";
import Crm1 from "../assets/Crm1.png";
import Software4 from "../assets/Software4.png";

const solutions = [
  {
    img: app1,
    title: "Custom Application Development",
    description:
      "Tailored software solutions designed to streamline your business operations and enhance productivity across all platforms.",
    features: [
      "Cross-platform mobile applications",
      "Enterprise-grade web applications",
      "UI/UX focused design",
      "Continuous integration & deployment",
    ],
    stats: [
      { value: "200+", label: "Apps Developed" },
      { value: "4.9/5", label: "Client Rating" },
      { value: "24/7", label: "Support" },
    ],
    details:
      "Our custom application development service delivers bespoke software solutions tailored to your specific business needs. We follow agile methodologies to create scalable, secure applications with intuitive interfaces. From initial concept to deployment and maintenance, we ensure your digital product meets the highest standards of quality and performance.",
  },
  {
    img: atm2,
    title: "Financial Technology Systems",
    description:
      "Secure and reliable banking solutions including ATM networks, payment processing, and digital banking platforms.",
    features: [
      "PCI-DSS compliant solutions",
      "Biometric authentication",
      "Real-time transaction monitoring",
      "Multi-bank integration",
    ],
    stats: [
      { value: "99.99%", label: "Uptime" },
      { value: "50ms", label: "Response Time" },
      { value: "256-bit", label: "Encryption" },
    ],
    details:
      "Our fintech solutions provide enterprise-grade security and reliability for financial institutions. We implement cutting-edge technologies like blockchain and AI-powered fraud detection to create robust banking systems. Our platforms handle millions of transactions daily while maintaining strict compliance with global financial regulations.",
  },
  {
    img: Crm1,
    title: "Customer Relationship Management",
    description:
      "Comprehensive CRM platforms to manage customer interactions, sales pipelines, and marketing campaigns.",
    features: [
      "AI-powered analytics",
      "Omnichannel integration",
      "Automated workflow systems",
      "Custom reporting dashboards",
    ],
    stats: [
      { value: "30%", label: "Sales Increase" },
      { value: "360°", label: "Customer View" },
      { value: "5x", label: "ROI" },
    ],
    details:
      "Transform your customer relationships with our intelligent CRM solutions. We integrate data from all touchpoints to provide a unified customer view. Our systems automate routine tasks, predict customer needs, and deliver actionable insights to help your team build stronger relationships and close more deals.",
  },
  {
    img: Software4,
    title: "Enterprise Software Solutions",
    description:
      "Scalable business management systems tailored to your organizational needs and industry requirements.",
    features: [
      "Cloud-based infrastructure",
      "Role-based access control",
      "API-first architecture",
      "Disaster recovery systems",
    ],
    stats: [
      { value: "100k+", label: "Users Supported" },
      { value: "99.9%", label: "Reliability" },
      { value: "1hr", label: "Deployment" },
    ],
    details:
      "Our enterprise software solutions streamline complex business processes across departments. Built on modular architectures, our systems grow with your business while maintaining peak performance. We specialize in creating intuitive interfaces for complex workflows, ensuring high adoption rates across your organization.",
  },
];

const cardVariants = {
  offscreen: { y: 80, opacity: 0, rotateX: 15 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const TechSolutions = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const openModal = (solution) => setSelectedSolution(solution);
  const closeModal = () => setSelectedSolution(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && selectedSolution) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [selectedSolution]);

  // Trap focus inside modal when open
  useEffect(() => {
    if (!selectedSolution) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTab);

    firstElement?.focus();

    return () => window.removeEventListener("keydown", handleTab);
  }, [selectedSolution]);

  const navigateToContact = () => {
    closeModal();
    navigate("/contact");
  };

  return (
    <section
      id="tech-solutions"
      className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-8 py-20 md:py-28 flex flex-col items-center overflow-hidden"
      aria-label="Technology Solutions Section"
    >
      {/* Background animated circles */}
      <div
        className="absolute inset-0 overflow-hidden opacity-10"
        aria-hidden="true"
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-emerald-400 rounded-full"
            style={{
              width: 150 + 150 * Math.random(),
              height: 150 + 150 * Math.random(),
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 50 * (Math.random() - 0.5)],
              y: [0, 50 * (Math.random() - 0.5)],
              rotate: [0, 360],
            }}
            transition={{
              duration: 40 + 20 * Math.random(),
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl w-full z-10">
        <motion.header
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-semibold">
            DIGITAL TRANSFORMATION
          </h2>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-600">
              Smart Software &
            </span>
            <br className="hidden md:block" />
            Digital Services
          </motion.h1>

          <div className="w-24 h-1 bg-emerald-500 mx-auto my-6 rounded"></div>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            We engineer cutting-edge digital solutions that drive innovation,
            efficiency, and competitive advantage. Our certified developers
            create robust systems with security and scalability at their core.
          </p>
        </motion.header>

        <main
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          aria-label="Technology solutions cards"
        >
          {solutions.map((solution) => (
            <motion.article
              key={solution.title}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="relative group rounded-2xl cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => openModal(solution)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openModal(solution);
              }}
              aria-label={`View more about ${solution.title}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-emerald-900/10 rounded-2xl shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-500 transform group-hover:scale-105 -z-10"></div>

              <div className="h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden flex flex-col">
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <motion.img
                    src={solution.img}
                    alt={`Image representing ${solution.title}`}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-t-2xl pointer-events-none"></div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <motion.h3
                    className="text-xl font-semibold text-emerald-400 mb-3 flex-shrink-0"
                    variants={itemVariants}
                  >
                    {solution.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 text-sm mb-4 flex-grow font-light"
                    variants={itemVariants}
                  >
                    {solution.description}
                  </motion.p>

                  <div className="grid grid-cols-3 gap-2 mb-4 flex-shrink-0">
                    {solution.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-gray-900/50 rounded p-1 text-center border border-gray-700"
                      >
                        <div className="text-xs font-semibold text-emerald-400">
                          {stat.value}
                        </div>
                        <div className="text-[0.6rem] text-gray-400 uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <motion.ul
                    className="space-y-2 text-xs text-gray-400"
                    variants={{
                      offscreen: { opacity: 0 },
                      onscreen: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 },
                      },
                    }}
                  >
                    {solution.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        variants={itemVariants}
                      >
                        <svg
                          className="w-4 h-4 mt-0.5 mr-2 text-emerald-400 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    className="mt-6 pt-4 border-t border-gray-700/50 flex justify-end"
                    variants={itemVariants}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(solution);
                      }}
                      type="button"
                      className="text-xs font-medium tracking-wide uppercase px-4 py-2 rounded-full border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 transition-colors duration-300 flex items-center group"
                      aria-label={`Learn more about ${solution.title}`}
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </main>

        {/* Modal */}
        <AnimatePresence>
          {selectedSolution && (
            <div
              className="fixed inset-0 z-40  mt-20 flex items-center justify-center bg-black bg-opacity-70 px-4 sm:px-0"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              aria-describedby="modal-desc"
              onClick={closeModal}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-gray-900 rounded-2xl max-w-3xl w-full mx-4 relative shadow-lg text-white overflow-hidden max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
                ref={modalRef}
              >
                <button
                  onClick={closeModal}
                  type="button"
                  aria-label="Close details"
                  className="absolute top-4 right-4 z-10 text-gray-400 hover:text-emerald-400 transition-colors bg-gray-800 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-t-2xl flex-shrink-0">
                  <img
                    src={selectedSolution.img}
                    alt={`Image representing ${selectedSolution.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80 rounded-t-2xl pointer-events-none"></div>
                </div>

                <div className="p-6 sm:p-8 overflow-y-auto">
                  <h2
                    id="modal-title"
                    className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-4"
                  >
                    {selectedSolution.title}
                  </h2>
                  <p id="modal-desc" className="text-gray-300 mb-6 font-light">
                    {selectedSolution.details}
                  </p>

                  <section
                    aria-labelledby="features-title"
                    className="bg-gray-800/50 rounded-lg p-6 mb-6"
                  >
                    <h3
                      id="features-title"
                      className="text-emerald-400 font-semibold mb-3 text-lg"
                    >
                      Key Features:
                    </h3>
                    <ul className="space-y-3">
                      {selectedSolution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-5 h-5 mt-0.5 mr-3 text-emerald-400 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section
                    className="grid grid-cols-3 gap-4 mb-6"
                    aria-label="Statistics"
                  >
                    {selectedSolution.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-gray-800 rounded-lg p-3 text-center"
                      >
                        <div className="text-xl font-bold text-emerald-400">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </section>

                  <button
                    onClick={navigateToContact}
                    type="button"
                    className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg font-semibold text-white hover:shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  >
                    Request This Service
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
            Our technology solutions comply with international standards
            including ISO 27001, SOC 2, and GDPR. We employ agile methodologies
            to deliver measurable results within your timeline and budget
            constraints.
          </p>
          <button
            onClick={() => navigate("/contact")}
            type="button"
            className="mt-8 px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full font-semibold text-white shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Schedule Technology Assessment"
          >
            Schedule Technology Assessment
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSolutions;
