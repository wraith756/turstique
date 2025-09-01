import React from "react";
import { FaCheck } from "react-icons/fa";
import Footer from "../components/Footer/Footer";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "What types of software do you build?",
      answer:
        "We specialize in ERP, CRM, custom business applications, websites, and mobile apps.",
      highlight: true,
    },
    {
      id: 2,
      question: "Do you develop mobile apps?",
      answer:
        "Yes, we build scalable Android, iOS, and cross-platform applications tailored to your needs.",
      highlight: true,
    },
    {
      id: 3,
      question: "Can you integrate AI into business solutions?",
      answer:
        "Absolutely. We provide AI-powered automation, chatbots, predictive analytics, and smart integrations.",
      highlight: true,
    },
    {
      id: 4,
      question: "Do you offer cloud-based solutions?",
      answer:
        "Yes, our ERP, CRM, and applications are optimized for cloud deployment with high security and scalability.",
      highlight: true,
    },
    {
      id: 5,
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer continuous updates, bug fixes, and long-term maintenance packages.",
      highlight: true,
    },
    {
      id: 6,
      question: "How can I get a project quote?",
      answer:
        "Simply reach out via info@trustiqueassist.in or call us to discuss your requirements.",
      highlight: true,
    },
  ];

  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-300">
            Find answers to common questions about our software development,
            cloud, and AI solutions.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`flex items-start gap-4 p-6 rounded-lg transition-all duration-200 border-b
              ${
                faq.highlight
                  ? "bg-gray-700/70 border-emerald-400/30 hover:bg-gray-700"
                  : "border-gray-700 hover:bg-gray-700/50"
              }`}
            >
              <div className="flex-shrink-0 mt-1">
                <FaCheck
                  className={`text-xl ${
                    faq.highlight ? "text-emerald-400" : "text-gray-400"
                  }`}
                />
              </div>
              <div>
                <h3
                  className={`text-lg font-medium ${
                    faq.highlight ? "text-white" : "text-gray-300"
                  }`}
                >
                  {faq.question}
                </h3>
                <p className="text-gray-300 mt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
