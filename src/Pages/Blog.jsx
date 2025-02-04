import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan anytime from your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel anytime before the next billing cycle. No hidden charges.",
  },
  {
    question: "Can you tell me my account password?",
    answer: "For security reasons, we do not store your password. You can reset it anytime.",
  },
  {
    question: "How do I change my email account?",
    answer: "Go to your account settings and update your email address.",
  },
];

const Blog = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <p className="text-gray-600 mt-2">
          Everything you need to know about the product and billing
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b py-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              {openIndex === index ? (
                <ChevronUp className="text-blue-500" />
              ) : (
                <ChevronDown className="text-blue-500" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
