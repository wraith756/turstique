import React, { useRef, useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 14,
    },
  },
};

const buttonVariants = {
  rest: {
    scale: 1,
    boxShadow:
      "0 0 8px rgba(0, 188, 212, 0.5), inset 0 0 10px rgba(0, 188, 212, 0.3)",
    background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
  },
  hover: {
    scale: 1.05,
    boxShadow:
      "0 0 20px rgba(0, 188, 212, 0.9), inset 0 0 20px rgba(0, 188, 212, 0.6)",
    background: "linear-gradient(270deg, #06b6d4, #0891b2, #06b6d4)",
    backgroundSize: "600% 600%",
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
  tap: { scale: 0.95 },
};

const sendIconVariants = {
  rest: { scale: 1 },
  sending: {
    scale: [1, 1.3, 1],
    rotate: [0, 15, -15, 0],
    transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
  },
  sent: { scale: 1, rotate: 0 },
};

const Subscribe = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    message: "",
    email: "",
  });
  const [timeString, setTimeString] = useState("");
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const formatted = `${String(hours % 12 || 12).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${
        hours >= 12 ? "PM" : "AM"
      }`;
      setTimeString(formatted);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const dataToSend = { ...formData, timeString };

    emailjs
      .send(
        "service_roimr8f",
        "template_dyk31kk",
        dataToSend,
        "RtyPWIiTe_K0VNG_D"
      )
      .then(() => {
        setStatus("success");
        setFormData({ title: "", name: "", message: "", email: "" });
        setTimeout(() => setStatus(null), 4000);
      })
      .catch(() => setStatus("error"));
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-[600px] flex items-center justify-center py-20 px-4"
      style={{
        background:
          "linear-gradient(270deg, #000000, #06131a, #0a1f29, #000000)",
        backgroundSize: "800% 800%",
        animation: "runningGradient 20s ease infinite",
      }}
    >
      <style>
        {`
          @keyframes runningGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="relative z-10 mx-auto max-w-xl w-full bg-[#12181B] rounded-3xl p-10 shadow-[0_0_25px_3px_rgba(0,188,212,0.5)] border border-cyan-500"
        aria-live="polite"
      >
        <motion.h1
          variants={itemVariants}
          className="text-center text-4xl font-extrabold text-cyan-400 mb-8 drop-shadow-lg tracking-wide"
        >
          Get Notified About Our Services
        </motion.h1>

        <motion.input
          type="text"
          name="time"
          value={timeString}
          readOnly
          aria-label="Current time"
          className="w-full mb-6 px-4 py-3 rounded-lg bg-[#0E1417] text-cyan-300 font-mono text-center cursor-not-allowed select-none border border-cyan-700"
          variants={itemVariants}
        />

        {[
          { name: "name", placeholder: "Enter your name", type: "text" },
          { name: "title", placeholder: "Enter your title", type: "text" },
          { name: "email", placeholder: "Your email address", type: "email" },
        ].map(({ name, placeholder, type }) => (
          <motion.input
            key={name}
            type={type}
            name={name}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
            required
            aria-label={placeholder}
            className="w-full mb-6 px-4 py-3 rounded-lg bg-[#0E1417] text-white placeholder-cyan-400 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            variants={itemVariants}
          />
        ))}

        <motion.textarea
          name="message"
          rows={5}
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          required
          aria-label="Your message"
          className="w-full mb-6 px-4 py-3 rounded-lg bg-[#0E1417] text-white placeholder-cyan-400 resize-none border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          variants={itemVariants}
        />

        <AnimatePresence>
          {status === "success" && (
            <motion.p
              className="text-green-400 mb-4 text-center font-semibold tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              key="success-message"
            >
              Email sent successfully! Thank you.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              className="text-red-500 mb-4 text-center font-semibold tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              key="error-message"
            >
              Failed to send email. Please try again.
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          type="submit"
          disabled={status === "sending"}
          aria-busy={status === "sending"}
          aria-label="Send email"
          variants={buttonVariants}
          initial="rest"
          animate="rest"
          whileHover="hover"
          whileTap="tap"
          className="w-full flex justify-center items-center gap-3 text-black font-semibold text-lg rounded-full py-3 shadow-lg transition-transform"
        >
          <motion.span
            variants={sendIconVariants}
            animate={status === "sending" ? "sending" : "rest"}
            className="text-2xl"
          >
            <FiSend />
          </motion.span>
          {status === "sending" ? "Sending..." : "Send Email"}
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Subscribe;
