import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";


const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long will delivery take?",
      answer:
        "Enjoy the convenience of our same-day delivery service. For orders placed before 12 PM EST, we guarantee delivery on the same day. Orders placed after 12 PM EST will be delivered the very next day.",
    },
    {
      question: "What exactly happens after ordering?",
      answer:
        "Upon placing your order, we will promptly contact you at the phone number provided during checkout to verify the details and arrange a convenient delivery time.",
    },
    {
      question: "Do your products come with a warranty?",
      answer:
        "Yes, all our products come with a 1-year manufacturer warranty covering structural faults or defects caused by manufacturing.",
    },
    {
      question: "What should I do if I receive a damaged or defective product?",
      answer:
        "If any part of your product is damaged or defective, simply notify us, and we will promptly send you a replacement part at no extra cost.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium hover:bg-gray-50 transition"
            >
              {faq.question}
              <IoChevronDown 
                className={`w-5 h-5 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-600 text-base leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
