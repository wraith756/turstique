import React from "react";
import { motion } from "framer-motion";
import guard from "../assets/guard 2.png";
import manpower from "../assets/manpower1.png";
import monitoring from "../assets/Monitoring3.png";
import travel from "../assets/travel4.png";
import { useNavigate } from "react-router-dom";
const services = [
  {
    img: guard,
    title: "Professional Security Guards",
    description:
      "Our highly trained security personnel undergo rigorous background checks and continuous training to provide unmatched protection. We offer armed and unarmed guards tailored to your specific needs, with expertise in corporate, residential, and event security.",
    features: [
      "Vetted professionals with military/police background",
      "Customized security plans",
      "24/7 availability",
      "Regular performance audits",
    ],
  },
  {
    img: manpower,
    title: "Strategic Manpower Solutions",
    description:
      "We provide flexible staffing solutions for security and operational needs, from temporary event staff to long-term security teams. Our personnel are trained in conflict resolution, emergency response, and customer service.",
    features: [
      "Rapid deployment teams",
      "Specialized industry expertise",
      "Multi-lingual operatives",
      "Comprehensive liability coverage",
    ],
  },
  {
    img: monitoring,
    title: "Intelligent Surveillance Systems",
    description:
      "Our state-of-the-art monitoring centers utilize AI-powered analytics with human oversight for comprehensive property protection. We integrate CCTV, access control, and alarm systems with real-time response capabilities.",
    features: [
      "4K resolution cameras with night vision",
      "Motion detection analytics",
      "Remote monitoring portal",
      "Instant emergency dispatch",
    ],
  },
  {
    img: travel,
    title: "Executive Protection Services",
    description:
      "Discreet yet comprehensive protection for high-profile individuals, corporate executives, and VIP travelers. Our services include advance threat assessments, secure transportation, and close protection details.",
    features: [
      "Global protection network",
      "Counter-surveillance measures",
      "Secure logistics planning",
      "Emergency evacuation protocols",
    ],
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
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate("/contact");
  };
  return (
    <section
      id="security-services"
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
            PROTECTION SOLUTIONS
          </h2>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-600">
              Enterprise-Grade Security
            </span>{" "}
            <br className="hidden md:block" />
            Services
          </motion.h1>

          <div className="w-24 h-1 bg-emerald-500 mx-auto my-6"></div>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Trustique Assist delivers comprehensive security solutions backed by
            military-grade protocols, cutting-edge technology, and decades of
            operational experience. Our services are designed to mitigate risks
            while maintaining discretion and professionalism.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
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
                      className="text-xs font-medium tracking-wide uppercase px-4 py-2 rounded-full border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 transition-colors duration-300 flex items-center group"
                      onClick={handleConsultationClick}
                    >
                      GET QUOTE
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
            All our security operatives are licensed, insured, and trained in
            accordance with international security standards (ISO 18788, PSC.1).
            We conduct regular threat assessments and adapt our strategies to
            evolving security challenges.
          </p>
          <button
            onClick={handleConsultationClick}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full font-medium text-white shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 "
          >
            Request Security Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityServices;
