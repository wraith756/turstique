import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_roimr8f",
        "template_f03sfge",

        e.target,
        "RtyPWIiTe_K0VNG_D" // Replace with your public key
      )
      .then(
        (result) => {
          alert("✅ Your message has been sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <style>{`
        @keyframes runningGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-bg {
          background: linear-gradient(
            270deg,
            #000000,
            #0a0a0a,
            #141414,
            #0a0a0a,
            #000000
          );
          background-size: 1200% 1200%;
          animation: runningGradient 40s ease infinite;
        }

        .gradient-heading {
          background: linear-gradient(90deg, #00ffc8, #00b3b3, #005f5f);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          text-shadow: 0 0 10px rgba(0, 255, 200, 0.7);
          transition: filter 0.4s ease, text-shadow 0.4s ease;
          cursor: default;
        }
        .gradient-heading:hover {
          filter: brightness(1.3);
          text-shadow: 0 0 20px rgba(0, 255, 200, 1);
        }

        .icon-bounce {
          transition: transform 0.3s ease;
          cursor: pointer;
          display: inline-block;
        }
        .icon-bounce:hover {
          animation: bounce 0.5s ease forwards;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        input:focus, textarea:focus {
          outline: none;
          box-shadow: 0 0 10px 2px #00ffc8;
          border-color: #00ffc8;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        button:hover {
          filter: brightness(1.15);
          box-shadow: 0 0 10px #00ffc8;
        }
      `}</style>

      <div className="min-h-screen text-gray-200 animated-bg">
        <div className="container mx-auto px-6 py-16 max-w-7xl">
          {/* Header */}
          <div
            className="text-center mb-16 max-w-3xl mx-auto"
            data-aos="fade-up"
          >
            <h1 className="text-5xl font-extrabold mb-4 gradient-heading tracking-tight select-none">
              Contact Information
            </h1>
            <p className="text-lg text-gray-200/90">
              Feel free to reach out to us using any of the contact methods
              below. Our team is ready to assist you with any inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10" data-aos="fade-right">
              {[
                {
                  icon: (
                    <FaMapMarkerAlt className="text-emerald-300 text-3xl icon-bounce" />
                  ),
                  title: "Our Location",
                  content: (
                    <>
                      Head office - Munshipuliya, Indira Nagar, Lucknow - 226016
                      <br />
                      <br />
                      Branch office - Noida Sector 62, Noida, Uttar Pradesh -
                      201309
                      <br />
                      Branch office - Pashupati Nagar, Naubasta, Kanpur, Uttar
                      Pradesh - 208021
                      <br />
                      Branch office - Chhatarpur Enclave Phase 2, Chhatarpur,
                      New Delhi - 110074
                      <br />
                      Branch office - Chanakyapuri, Devkali, Narsingh Ban Road,
                      Pratapgarh, Uttar Pradesh - 230001
                    </>
                  ),
                },
                {
                  icon: (
                    <FaPhone className="text-emerald-300 text-3xl icon-bounce" />
                  ),
                  title: "Phone Number",
                  content: (
                    <>
                      +91 8112403000
                      <br />
                      +91 8112402000
                      <br />
                      +91 7828651431
                    </>
                  ),
                },
                {
                  icon: (
                    <FaEnvelope className="text-emerald-300 text-3xl icon-bounce" />
                  ),
                  title: "Email Address",
                  content: (
                    <>
                      info@trustiqueassist.in
                      <br />
                      hr@trustiqueassist.in
                    </>
                  ),
                },
                {
                  icon: (
                    <FaClock className="text-emerald-300 text-3xl icon-bounce" />
                  ),
                  title: "Working Hours",
                  content: (
                    <>
                      Security & Surveillance team - 24×7
                      <br />
                      Customer support - 9am to 10pm daily
                      <br />
                      Tech team - 9am to 7pm (Monday to Friday)
                    </>
                  ),
                },
              ].map(({ icon, title, content }) => (
                <div key={title} className="flex items-start gap-5">
                  <div className="bg-emerald-900 p-5 rounded-full shadow-lg">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div
              className="bg-gray-900 rounded-xl p-10 shadow-xl"
              data-aos="fade-left"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 font-semibold text-gray-300"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 font-semibold text-gray-300"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 font-semibold text-gray-300"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 font-semibold text-gray-300"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 font-semibold text-gray-300"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 transition-colors duration-300 rounded-md py-3 text-white font-semibold flex justify-center items-center gap-3"
                >
                  Send Message <span className="text-xl">✓</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
