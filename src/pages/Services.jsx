import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaStar,
  FaStore,
  FaUserTie,
  FaLaptopCode,
  FaCalendarAlt,
  FaMobileAlt,
  FaServer,
  FaChevronRight,
  FaTimes,
  FaBullhorn,
} from "react-icons/fa";
import Footer from "../components/Footer/Footer";

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [isHovered, setIsHovered] = useState(null);

  const securityServices = [
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Security Services",
      description:
        "Expert teams ensuring safety across all settings with 24/7 monitoring.",
      details: [
        "Manned guarding for commercial & residential properties",
        "Mobile patrol units with rapid response",
        "CCTV surveillance & alarm monitoring",
        "Risk assessment & security consulting",
      ],
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "ATM Surveillance",
      description: "Intelligent monitoring to prevent fraud and theft.",
      details: [
        "AI-powered anomaly detection",
        "Real-time alert systems",
        "Facial recognition technology",
        "Remote monitoring solutions",
      ],
    },
    {
      icon: <FaStore className="text-4xl" />,
      title: "Travel Security",
      description: "Comprehensive protection services for global travelers.",
      details: [
        "Advance route planning & reconnaissance",
        "Secure transportation arrangements",
        "Threat assessment for international travel",
        "Emergency evacuation planning",
      ],
    },
    {
      icon: <FaUserTie className="text-4xl" />,
      title: "TIS Solutions",
      description: "Advanced technological infrastructure security systems.",
      details: [
        "Biometric access control systems",
        "Integrated surveillance networks",
        "Data protection mechanisms",
        "Cybersecurity infrastructure",
      ],
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Manpower Support",
      description: "Reliable, trained personnel for critical operations.",
      details: [
        "Security personnel outsourcing",
        "Facility management staff",
        "Event staffing solutions",
        "Temporary workforce solutions",
      ],
    },
  ];

  const techServices = [
    {
      icon: <FaBullhorn className="text-4xl" />,
      title: "Social Media Marketing",
      description:
        "AI-powered strategies to boost your online presence and engagement.",
      details: [
        "Our Social Media Marketing solutions help brands grow smarter and faster. Using AI-driven insights, predictive analytics, and automation, we target the right audience, maximize ad performance, and design personalized content strategies to increase visibility, engagement, and conversions.",
      ],
    },

    {
      icon: <FaServer className="text-4xl" />,
      title: "ERP & CRM",
      description: "Custom enterprise solutions to streamline operations.",
      details: [
        "Custom ERP system development",
        "CRM integration & customization",
        "Business process automation",
        "Data analytics & reporting",
      ],
    },
    {
      icon: <FaLaptopCode className="text-4xl" />,
      title: "Software Development",
      description: "Tailored software solutions for business growth.",
      details: [
        "Custom application development",
        "Enterprise software solutions",
        "Legacy system modernization",
        "Cloud-based software architecture",
      ],
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: "Web/App Development",
      description: "Cutting-edge digital platforms for web and mobile.",
      details: [
        "Responsive website development",
        "Native & hybrid mobile apps",
        "E-commerce solutions",
        "Progressive web applications",
      ],
    },

    {
      icon: <FaCalendarAlt className="text-4xl" />,
      title: "Event Management",
      description: "End-to-end planning for corporate and private events.",
      details: [
        "Full event planning & coordination",
        "Crowd control & security management",
        "Venue selection & logistics",
        "Emergency preparedness planning",
      ],
    },
  ];

  const ServiceCard = ({ service, category, index }) => (
    <motion.div
      className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 cursor-pointer h-full flex flex-col items-center text-center group overflow-hidden"
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(`${category}-${index}`)}
      onMouseLeave={() => setIsHovered(null)}
      onClick={() => setSelectedService(service)}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered === `${category}-${index}` ? 1 : 0,
          transition: { duration: 0.3 },
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="bg-emerald-900/30 p-4 rounded-full mb-4 group-hover:bg-emerald-500/20 transition-colors">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">
          {service.title}
        </h3>
        <p className="text-gray-300 text-sm">{service.description}</p>
      </div>

      {/* Learn more indicator */}
      <div className="mt-auto flex items-center text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-sm">Learn more</span>
        <FaChevronRight className="ml-1 text-xs" />
      </div>
    </motion.div>
  );

  const ServiceDetailModal = ({ service, onClose }) => (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gradient-to-br from-gray-800 to-gray-900 border border-emerald-500/30 rounded-xl max-w-md w-full p-8 relative max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          <FaTimes />
        </button>

        <div className="text-center mb-6">
          <div className="bg-emerald-900/30 p-4 rounded-full inline-flex mb-4">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {service.title}
          </h3>
          <p className="text-emerald-400">{service.description}</p>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-white border-b border-gray-700 pb-2">
            Key Features:
          </h4>
          <ul className="space-y-3">
            {service.details.map((detail, i) => (
              <li key={i} className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span className="text-gray-300">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="w-full mt-8 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium py-3 px-6 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-emerald-500/10"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(40px)",
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-emerald-400 font-medium mb-4"
          >
            Empowering Safety & Innovation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Our Comprehensive Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Professional security and technology solutions tailored to your
            specific needs
          </motion.p>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-16 container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Technology & Business Solutions
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {techServices.map((service, index) => (
            <motion.div
              key={`tech-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ServiceCard service={service} category="tech" index={index} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium py-3 px-8 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-colors flex items-center gap-2"
            onClick={() => navigate("/tech-solutions")}
          >
            Explore Tech Solutions <FaChevronRight />
          </button>
        </motion.div>
      </section>

      {/* Security Solutions */}
      <section className="py-16 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Security & Protection Solutions
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {securityServices.map((service, index) => (
              <motion.div
                key={`security-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <ServiceCard
                  service={service}
                  category="security"
                  index={index}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <button
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium py-3 px-8 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-colors flex items-center gap-2"
              onClick={() => navigate("/security-services")}
            >
              Explore Security Services <FaChevronRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceDetailModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Services;
