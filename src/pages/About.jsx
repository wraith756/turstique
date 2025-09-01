import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.3, duration: 0.8, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const buttonVariants = {
  rest: { scale: 1, boxShadow: "0 0 10px rgba(6,182,212,0.6)" },
  hover: {
    scale: 1.1,
    boxShadow: "0 0 25px rgba(6,182,212,0.9)",
    transition: { yoyo: Infinity, duration: 1.5, ease: "easeInOut" },
  },
};

const About = () => (
  <div
    className="min-h-screen flex flex-col text-white"
    style={{
      background:
        "linear-gradient(135deg, #0a1f2c 0%, #062029 50%, #04181f 100%)",
      backgroundAttachment: "fixed",
    }}
  >
    <main className="flex-grow mt-16 mb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Image Section */}
          <motion.div
            className="flex-1 max-w-xl rounded-3xl overflow-hidden shadow-2xl border-4 border-cyan-500 cursor-pointer"
            variants={imageVariants}
            whileHover="hover"
            tabIndex={0}
            aria-label="Trustique Assist team or services image"
          >
            <img
              src="https://i.postimg.cc/k4gRvMmJ/Whats-App-Image-2025-06-23-at-4-39-03-PM.jpg"
              alt="Trustique Assist team or services"
              className="w-full h-auto object-cover select-none"
              loading="lazy"
              draggable={false}
            />
          </motion.div>

          {/* Content Section */}
          <motion.div className="flex-1 space-y-8 max-w-xl">
            <motion.p
              className="text-cyan-400 font-semibold tracking-widest uppercase text-sm drop-shadow-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Journey of Trustique Assist
            </motion.p>

            <motion.h1
              className="text-5xl font-extrabold leading-tight drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              About Us
            </motion.h1>

            <motion.p
              className="text-cyan-200 text-lg leading-relaxed tracking-wide drop-shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              At Trustique Assist, we deliver a comprehensive suite of
              AI-powered and technology-driven solutions designed to ensure
              efficiency, innovation, and digital growth for institutions and
              individuals. Our expertise spans the development of custom ERP &
              CRM systems, intelligent software solutions, and dynamic
              websites/applications that streamline operations and enhance
              digital presence. Leveraging advanced AI, automation, and
              analytics, we also provide smart TIS services and ATM AI
              surveillance systems for seamless monitoring and management.
              Beyond software, our team supports organizations with event
              management and professional manpower solutions, ensuring smooth
              execution in every domain. With a strong focus on innovation,
              reliability, and customer success, Trustique Assist is your
              trusted partner for building smarter, future-ready enterprises.
            </motion.p>

            <motion.div
              className="flex items-center gap-3 text-cyan-400 font-semibold text-xl drop-shadow-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <FaStar className="inline-block text-yellow-400 animate-pulse" />
              <span>Trusted by 5,000+ users</span>
            </motion.div>

            <motion.button
              type="button"
              className="bg-gradient-to-r from-cyan-500 via-emerald-400 to-cyan-500 px-8 py-3 rounded-full font-semibold text-black shadow-lg hover:brightness-110 transition"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileFocus="hover"
              aria-label="Learn more about Trustique Assist"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
