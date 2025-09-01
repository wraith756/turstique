import React from "react";
import Img1 from "../../assets/shirt/002.png";
import Img2 from "../../assets/shirt/003.png";
import Img3 from "../../assets/shirt/001.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductsData = [
  {
    id: 1,
    img: Img3,
    title: "Smart Software & AI Solutions",
    description:
      "WWe build AI-powered ERP & CRM systems, smart websites, and intelligent apps that automate workflows, boost efficiency, and supercharge your digital growth.",
    link: "/smart",
  },
  {
    id: 3,
    img: Img1,
    title: "Integrated Security Solutions",
    description:
      "We deliver AI-powered monitoring and smart surveillance systems designed for 24/7 precision and reliability. Our solutions integrate modern security equipment with advanced protection services for complete coverage. With a focus on innovation and intelligence, we ensure safer, smarter, and future-ready environments We provide end-to-end security services including trained guards, VIP protocol, travel protection, ATM AI surveillance, and tech-driven TIS solutions to ensure complete safety in all environments.",
    link: "/security",
  },
  {
    id: 2,
    img: Img2,
    title: "Facility Management",
    description:
      "From pFrom reliable manpower to high-profile event management, we ensure seamless execution and peace of mind. Our  end-to-end security services cover trained guards, VIP protocol, travel protection, and AI-powered surveillance. With tech-driven TIS solutions, we deliver complete safety and unmatched professionalism across every environmentroviding reliable manpower to managing high-profile events, our team ensures seamless execution, professional conduct, and peace of mind for every occasion.",
    link: "/manpower",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(14, 242, 230, 0.5)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const TopProducts = () => {
  return (
    <section className="bg-gradient-to-br from-black via-black to-black py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-5xl font-extrabold uppercase tracking-wide text-cyan-400 drop-shadow-lg">
            Top Services We Provide
          </h2>
          <p className="mt-6 text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            We provide end-to-end security services including trained guards,
            VIP protocol, travel protection, ATM AI surveillance, and
            tech-driven TIS solutions to ensure complete safety in all
            environments.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center"
        >
          {ProductsData.map((data) => (
            <motion.div
              key={data.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-900 rounded-3xl shadow-lg cursor-pointer max-w-[350px] min-h-[460px] flex flex-col justify-between p-8 text-center transition-colors duration-300 hover:bg-cyan-900/20"
            >
              {/* Image */}
              <div className="h-[130px] mb-6 flex items-center justify-center">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[160px] max-h-[130px] object-contain drop-shadow-lg transition-transform duration-300"
                />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="text-cyan-400 drop-shadow-sm" />
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-cyan-400 mb-4">
                {data.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-8 text-sm leading-relaxed line-clamp-5">
                {data.description}
              </p>

              {/* Button */}
              <Link
                to={data.link}
                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3 rounded-full shadow-md transition duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopProducts;
