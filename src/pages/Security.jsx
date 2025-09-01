import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import guard from "../assets/guard 2.png";
import manpower from "../assets/manpower1.png";
import monitoring from "../assets/Monitoring3.png";
import travel from "../assets/travel4.png";

const services = [
  {
    img: guard,
    title: "Professional Security Guards",
    description:
      "Highly trained security personnel for comprehensive protection.",
    details: [
      "Armed and unarmed guard services available 24/7",
      "Specialized training in conflict de-escalation",
      "Regular performance evaluations",
      "Custom security plans",
      "Immediate response teams",
    ],
    certifications: ["ISO 18788", "BS 7858", "SIA Licensed"],
    stats: [
      { value: "2000+", label: "Trained Personnel" },
      { value: "99.7%", label: "Client Retention" },
      { value: "24/7", label: "Availability" },
    ],
  },
  {
    img: manpower,
    title: "Strategic Manpower Solutions",
    description: "Flexible staffing for security and operational needs.",
    details: [
      "Rapid deployment teams",
      "Specialized industry expertise",
      "Multi-lingual operatives",
      "Comprehensive coverage",
      "Custom staffing solutions",
    ],
    certifications: ["Event Safety Certified", "Crowd Management"],
    stats: [
      { value: "500+", label: "Events Monthly" },
      { value: "4.9/5", label: "Client Rating" },
      { value: "50+", label: "Languages" },
    ],
  },
  {
    img: monitoring,
    title: "Intelligent Surveillance Systems",
    description: "AI-powered monitoring for comprehensive protection.",
    details: [
      "4K resolution cameras",
      "Motion detection analytics",
      "Remote monitoring portal",
      "Instant emergency dispatch",
      "Perimeter security",
    ],
    certifications: ["NDAA Compliant", "GDPR Certified"],
    stats: [
      { value: "30s", label: "Response Time" },
      { value: "4K", label: "Resolution" },
      { value: "360°", label: "Coverage" },
    ],
  },
  {
    img: travel,
    title: "Executive Protection Services",
    description: "Discreet protection for high-profile individuals.",
    details: [
      "Global protection network",
      "Counter-surveillance",
      "Secure transportation",
      "Advance planning",
      "Emergency protocols",
    ],
    certifications: ["PSC.1 Certified", "WPPS Trained"],
    stats: [
      { value: "100+", label: "Countries" },
      { value: "0", label: "Breaches" },
      { value: "72h", label: "Advance Planning" },
    ],
  },
];

const cardVariants = {
  offscreen: {
    y: 60,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 0.8,
    },
  },
};

const modalVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: { opacity: 0, y: 20 },
};

const SecurityServices = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const handleConsultationClick = () => {
    navigate("/contact");
  };

  const openServiceModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = "hidden";
  };

  const closeServiceModal = () => {
    setSelectedService(null);
    document.body.style.overflow = "auto";
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeServiceModal();
    }
  };

  return (
    <section className="relative min-h-screen bg-gray-900 text-white px-4 sm:px-8 py-16 md:py-24">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-emerald-500 mb-4 font-medium">
            SECURITY SOLUTIONS
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
              Comprehensive Protection
            </span>{" "}
            Services
          </h1>

          <div className="w-20 h-0.5 bg-gradient-to-r from-gray-700 via-emerald-500 to-gray-700 mx-auto my-6"></div>

          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            Our enterprise-grade security services combine advanced technology
            with highly trained professionals to deliver unmatched protection
            solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group"
            >
              <div className="h-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10">
                <div className="relative h-48 bg-gray-900 overflow-hidden">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-5">
                    {service.description}
                  </p>

                  <button
                    onClick={() => openServiceModal(service)}
                    className="w-full text-sm font-medium tracking-wide px-4 py-2.5 rounded-lg border border-gray-600 text-white hover:bg-gray-700/50 hover:border-emerald-500 transition-all duration-300 flex items-center justify-center group-hover:text-emerald-400"
                  >
                    View Service Details
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <div
              className="fixed inset-0 z-50 mt-20 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
              onClick={handleBackdropClick}
            >
              <motion.div
                className="bg-gray-800 rounded-xl max-w-4xl w-full mx-4 overflow-hidden border border-gray-700 shadow-xl"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeServiceModal}
                  className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white p-1 rounded-full bg-gray-700/50 backdrop-blur-sm"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="max-h-[90vh] overflow-y-auto">
                  {/* Modal Header */}
                  <div className="relative h-56 w-full bg-gray-900 overflow-hidden flex items-center justify-center">
                    <img
                      src={selectedService.img}
                      alt={selectedService.title}
                      className="w-full h-full object-contain opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {selectedService.title}
                      </h2>
                      <p className="text-emerald-400 mt-1">
                        {selectedService.description}
                      </p>
                    </div>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6 md:p-8">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-8">
                      {selectedService.stats.map((stat, i) => (
                        <div
                          key={i}
                          className="bg-gray-700/30 rounded-lg p-3 text-center border border-gray-700"
                        >
                          <div className="text-xl font-bold text-emerald-400">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Service Details */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-gray-700">
                        Service Features
                      </h3>
                      <ul className="space-y-3">
                        {selectedService.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="w-4 h-4 mt-1 mr-3 text-emerald-400 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certifications */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-gray-700">
                        Certifications & Standards
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.certifications.map((cert, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gray-700/50 text-emerald-400 px-3 py-1.5 rounded-full border border-gray-600"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={handleConsultationClick}
                      className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg font-medium text-white hover:shadow-lg transition-all duration-300 hover:opacity-90"
                    >
                      Request {selectedService.title} Consultation
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">
              Ready to Enhance Your Security?
            </h3>
            <p className="text-gray-400 mb-6">
              Our security experts are available 24/7 to discuss your protection
              needs and develop a customized solution for your organization.
            </p>
            <button
              onClick={handleConsultationClick}
              className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg font-medium text-white hover:shadow-lg transition-all duration-300 hover:opacity-90"
            >
              Schedule Security Assessment
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityServices;
