import React, { useState } from "react";
import { motion } from "framer-motion";
import guard from "../assets/guard 2.png";
import manpower from "../assets/manpower1.png";
import monitoring from "../assets/Monitoring3.png";
import travel from "../assets/travel4.png";
import { useNavigate } from "react-router-dom";
const services = [
  {
    img: guard,
    title: "Professional Security Personnel",
    description:
      "Highly trained security teams for corporate, residential, and event protection with rigorous vetting and continuous training.",
    features: [
      "Armed & unarmed specialists",
      "Crowd control experts",
      "Emergency response certified",
      "24/7 availability",
    ],
    details:
      "Our personnel are carefully selected from military and law enforcement backgrounds. Continuous training ensures readiness for all types of situations. Whether you require armed guards or unarmed patrols, our teams deliver unmatched professionalism and vigilance.",
  },
  {
    img: manpower,
    title: "Event Staffing Solutions",
    description:
      "Comprehensive manpower support for events of all scales, from conferences to large public gatherings.",
    features: [
      "Trained ushers and greeters",
      "Access control specialists",
      "Multilingual staff available",
      "Custom staffing plans",
    ],
    details:
      "We specialize in providing trained staff for all event needs including crowd management, access control, and guest services. Our multilingual team helps bridge communication gaps at international events ensuring smooth operations.",
  },
  {
    img: monitoring,
    title: "Event Surveillance Systems",
    description:
      "Advanced monitoring solutions for complete event oversight and rapid incident response.",
    features: [
      "Mobile command centers",
      "Facial recognition systems",
      "Real-time monitoring",
      "Perimeter security",
    ],
    details:
      "Utilizing cutting-edge technology including facial recognition and AI analytics, our surveillance solutions provide comprehensive coverage. Real-time data feeds to our mobile command centers enable rapid response and incident resolution.",
  },
  {
    img: travel,
    title: "VIP Protection Services",
    description:
      "Discreet executive protection for high-profile individuals during travel and public appearances.",
    features: [
      "Advance route planning",
      "Counter-surveillance",
      "Secure transportation",
      "Global protection network",
    ],
    details:
      "Our VIP protection teams work closely with clients to assess risks and create detailed security plans. From secure transportation logistics to counter-surveillance measures, we provide seamless and discreet protection worldwide.",
  },
];

const cardVariants = {
  offscreen: {
    y: 80,
    opacity: 0,
    rotateX: 15,
  },
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
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const SecurityServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate("/contact");
  };
  return (
    <section
      id="manpower-services"
      className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-8 py-20 md:py-28 flex flex-col items-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-emerald-400 rounded-full"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-4 font-medium">
            STAFFING SOLUTIONS
          </h2>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-600">
              Premium Manpower &
            </span>{" "}
            <br className="hidden md:block" />
            Event Support
          </motion.h1>

          <div className="w-24 h-1 bg-emerald-500 mx-auto my-6"></div>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Trustique Assist provides elite personnel solutions for security and
            event management needs. Our teams combine professional training with
            real-world experience to deliver seamless protection and support for
            any occasion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="relative group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-emerald-900/10 rounded-2xl shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-500 transform group-hover:scale-105 -z-10"></div>

              <div className="h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-emerald-400/30">
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>

                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold text-emerald-400 mb-3"
                    variants={itemVariants}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 text-sm mb-4"
                    variants={itemVariants}
                  >
                    {service.description}
                  </motion.p>

                  <motion.ul
                    className="space-y-2 text-xs text-gray-400"
                    variants={{
                      offscreen: { opacity: 0 },
                      onscreen: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    {service.features.map((feature, i) => (
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
                    className="mt-6 pt-4 border-t border-gray-700/50"
                    variants={itemVariants}
                  >
                    <button
                      onClick={() => openModal(service)}
                      className="text-xs font-medium tracking-wide uppercase px-4 py-2 rounded-full border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 transition-colors duration-300 flex items-center group"
                    >
                      Service Details
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
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-2xl max-w-3xl w-full p-8 relative shadow-lg text-white"
            >
              <button
                onClick={closeModal}
                aria-label="Close details"
                className="absolute top-4 right-4 text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h2 className="text-3xl font-bold text-emerald-400 mb-4">
                {selectedService.title}
              </h2>
              <img
                src={selectedService.img}
                alt={selectedService.title}
                className="w-full h-48 object-contain rounded-lg mb-6"
              />
              <p className="text-gray-300 mb-4">{selectedService.details}</p>

              <h3 className="text-emerald-400 font-semibold mb-2">Features:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                {selectedService.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
            All our personnel undergo comprehensive background checks and
            specialized training in accordance with international security
            standards (ISO 18788, BS 7858). We provide full insurance coverage
            and adapt our staffing solutions to your specific requirements.
          </p>
          <button
            onClick={handleConsultationClick}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full font-medium text-white shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
          >
            Request Staffing Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityServices;
