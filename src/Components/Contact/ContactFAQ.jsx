import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How can I track my order?",
    answer:
      "You can track your order using your order ID from the Track Order section. Your order status will be updated as it moves through the delivery process.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery time depends on your location, seller, and product availability. The estimated delivery information will be shown during the ordering process.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Eligible products can be returned or exchanged according to the applicable return policy. Contact our support team if you need help with a return.",
  },
  {
    question: "How can I become a ShopZone seller?",
    answer:
      "Contact our support team with your basic information. Our team can guide you through the seller registration and onboarding process.",
  },
];

const ContactFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Common questions
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
            Here are answers to some of the questions our customers ask most
            often.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-slate-50 sm:px-6"
                >
                  <span className="text-sm font-bold text-slate-800 sm:text-base">
                    {faq.question}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <FaChevronDown
                      className={`text-xs transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-slate-100 px-5 py-5 text-sm leading-6 text-slate-500 sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;