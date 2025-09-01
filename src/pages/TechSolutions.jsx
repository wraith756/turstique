import React from "react";
import { motion } from "framer-motion";
import app1 from "../assets/app1.png";
import atm2 from "../assets/atm2.png";
import Crm1 from "../assets/Crm1.png";
import Software4 from "../assets/Software4.png";
import { useNavigate } from "react-router-dom";
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

const TechSolutions = () => {
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate("/contact");
  };

  return (
    <section
      id="tech-solutions"
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
            DIGITAL INNOVATION
          </h2>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-600">
              Cutting-Edge Technology
            </span>{" "}
            <br className="hidden md:block" />
            Solutions
          </motion.h1>

          <div className="w-24 h-1 bg-emerald-500 mx-auto my-6"></div>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Trustique Tech delivers future-proof digital solutions that drive
            growth, efficiency, and competitive advantage. Our certified
            developers and engineers create robust systems with security and
            scalability at their core.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
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
                    src={solution.img}
                    alt={solution.title}
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
                    {solution.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 text-sm mb-4"
                    variants={itemVariants}
                  >
                    {solution.description}
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
            Our technology solutions are built using industry best practices and
            comply with international standards including ISO 27001, SOC 2, and
            GDPR. We employ agile methodologies to deliver measurable results
            within your timeline and budget.
          </p>
          <button
            onClick={handleConsultationClick}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full font-medium text-white shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
          >
            Schedule Technology Assessment
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSolutions;
