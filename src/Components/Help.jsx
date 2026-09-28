
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaSearch,
  FaChevronDown,
  FaTruck,
  FaUndo,
  FaCreditCard,
  FaUserCircle,
  FaShoppingCart,
  FaShieldAlt,
  FaHeadset,
  FaEnvelope,
  FaPhoneAlt,
  FaQuestionCircle,
  FaArrowRight,
  FaBoxOpen,
  FaTimes,
} from "react-icons/fa";

/* =========================================================
   FAQ DATA
========================================================= */

const faqData = [
  {
    id: 1,
    category: "Orders",
    question: "How can I place an order?",
    answer:
      "Browse our products, open the product you want, select the required options, and add it to your cart. When you are ready, open your cart and continue to checkout.",
  },
  {
    id: 2,
    category: "Orders",
    question: "How can I check my order status?",
    answer:
      "You can check your order status using our Track Order page. Enter your order ID and the email address or phone number used during checkout.",
  },
  {
    id: 3,
    category: "Shipping",
    question: "How long does delivery take?",
    answer:
      "Delivery time depends on your location and the availability of the product. You can check the latest delivery information through your order details or contact our support team.",
  },
  {
    id: 4,
    category: "Shipping",
    question: "Do you offer delivery throughout Nepal?",
    answer:
      "ShopZone is designed to serve customers across Nepal. Delivery availability and delivery time may vary depending on the destination.",
  },
  {
    id: 5,
    category: "Payment",
    question: "What payment methods are available?",
    answer:
      "Available payment methods can vary depending on your checkout options. Select the payment method that is available for your order before completing checkout.",
  },
  {
    id: 6,
    category: "Payment",
    question: "Is online payment secure?",
    answer:
      "ShopZone is designed with secure shopping practices to help protect your account and checkout information. Never share your password or payment details with anyone.",
  },
  {
    id: 7,
    category: "Returns",
    question: "Can I return a product?",
    answer:
      "Return eligibility depends on the product and its condition. Please review our return policy or contact customer support before sending an item back.",
  },
  {
    id: 8,
    category: "Returns",
    question: "How can I request a refund?",
    answer:
      "Contact our support team with your order ID and explain the reason for the refund request. Our team will guide you through the applicable process.",
  },
  {
    id: 9,
    category: "Account",
    question: "How do I create a ShopZone account?",
    answer:
      "Open the Register or Login page and follow the instructions to create your account. Use an active email address or phone number so you can receive important account information.",
  },
  {
    id: 10,
    category: "Account",
    question: "I forgot my password. What should I do?",
    answer:
      "Go to the Login page and select the password recovery option if available. Follow the instructions to reset your password securely.",
  },
];

/* =========================================================
   HELP CATEGORIES
========================================================= */

const helpCategories = [
  {
    title: "Orders & Tracking",
    description: "Place orders and check delivery status.",
    icon: FaBoxOpen,
    link: "/track-order",
  },
  {
    title: "Shipping",
    description: "Learn about delivery and shipping information.",
    icon: FaTruck,
    link: "/shipping",
  },
  {
    title: "Payments",
    description: "Get help with payment and checkout.",
    icon: FaCreditCard,
    link: "/contact",
  },
  {
    title: "Returns",
    description: "Learn about returns and refunds.",
    icon: FaUndo,
    link: "/returns",
  },
  {
    title: "My Account",
    description: "Manage your account and profile.",
    icon: FaUserCircle,
    link: "/login",
  },
  {
    title: "Shopping",
    description: "Get help finding and buying products.",
    icon: FaShoppingCart,
    link: "/products",
  },
];

/* =========================================================
   HELP PAGE
========================================================= */

const Help = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  /* =======================================================
     FAQ CATEGORIES
  ======================================================= */

  const categories = [
    "All",
    ...new Set(faqData.map((faq) => faq.category)),
  ];

  /* =======================================================
     FILTER FAQS
  ======================================================= */

  const filteredFaqs = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return faqData.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" ||
        faq.category === activeCategory;

      const matchesSearch =
        !search ||
        faq.question.toLowerCase().includes(search) ||
        faq.answer.toLowerCase().includes(search) ||
        faq.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  /* =======================================================
     CLEAR SEARCH
  ======================================================= */

  const clearSearch = () => {
    setSearchTerm("");
    setActiveCategory("All");
  };

  return (
    <main className="min-h-screen bg-slate-50">

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative overflow-hidden bg-slate-950">

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
              <FaQuestionCircle className="text-2xl" />
            </div>

            <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-emerald-400">
              ShopZone Support
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              How Can We Help?
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Find quick answers to common questions or contact
              our support team when you need assistance.
            </p>

            {/* SEARCH */}

            <div className="mx-auto mt-8 max-w-2xl">

              <div className="relative">

                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                  placeholder="Search for help..."
                  aria-label="Search help"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white pl-12 pr-12 text-sm font-medium text-slate-800 shadow-2xl outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-emerald-500/20 sm:text-base"
                />

                {searchTerm && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    aria-label="Clear search"
                    className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  >
                    <FaTimes />
                  </button>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================
          HELP CATEGORIES
      =================================================== */}

      <section className="px-4 py-12 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
              Browse Help
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              What do you need help with?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              Choose a topic to quickly find the information you
              need.
            </p>

          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {helpCategories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.title}
                  to={category.link}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                >

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                      <Icon className="text-lg" />
                    </div>

                    <div className="min-w-0 flex-1">

                      <h3 className="text-base font-black text-slate-900">
                        {category.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {category.description}
                      </p>

                      <span className="mt-3 inline-flex items-center gap-2 text-xs font-black text-emerald-600">
                        Learn More
                        <FaArrowRight className="text-[10px] transition group-hover:translate-x-1" />
                      </span>

                    </div>

                  </div>

                </Link>
              );
            })}

          </div>

        </div>

      </section>

      {/* ===================================================
          FAQ SECTION
      =================================================== */}

      <section className="border-y border-slate-200 bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
              Frequently Asked Questions
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Find Your Answer
            </h2>

          </div>

          {/* CATEGORY FILTER */}

          <div className="mt-7 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setActiveFaq(null);
                }}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition ${
                  activeCategory === category
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "border border-slate-200 bg-slate-50 text-slate-600 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

          {/* FAQ LIST */}

          <div className="mt-6 space-y-3">

            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = activeFaq === faq.id;

                return (
                  <div
                    key={faq.id}
                    className={`overflow-hidden rounded-2xl border bg-white transition duration-200 ${
                      isOpen
                        ? "border-emerald-200 shadow-sm"
                        : "border-slate-200"
                    }`}
                  >

                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq(
                          isOpen ? null : faq.id
                        )
                      }
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    >

                      <div className="min-w-0">

                        <span className="mb-2 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-600">
                          {faq.category}
                        </span>

                        <h3 className="text-sm font-black leading-6 text-slate-900 sm:text-base">
                          {faq.question}
                        </h3>

                      </div>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${
                          isOpen
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <FaChevronDown
                          className={`text-xs transition-transform duration-200 ${
                            isOpen
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </span>

                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">

                        <p className="text-sm leading-7 text-slate-500">
                          {faq.answer}
                        </p>

                      </div>
                    )}

                  </div>
                );
              })
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-12 text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm">
                  <FaSearch />
                </div>

                <h3 className="mt-4 text-lg font-black text-slate-900">
                  No results found
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  We couldn't find an answer matching your
                  search. Try different keywords or contact our
                  support team.
                </p>

                <button
                  type="button"
                  onClick={clearSearch}
                  className="mt-5 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-500"
                >
                  Clear Search
                </button>

              </div>
            )}

          </div>

        </div>

      </section>

      {/* ===================================================
          QUICK SUPPORT
      =================================================== */}

      <section className="bg-slate-950 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
              <FaHeadset className="text-xl" />
            </div>

            <h2 className="mt-5 text-2xl font-black text-white sm:text-3xl">
              Still Need Help?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
              Our support team is ready to assist you with
              orders, products, payments, delivery, and returns.
            </p>

          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {/* PHONE */}

            <a
              href="tel:+9779800000000"
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white">
                <FaPhoneAlt />
              </div>

              <h3 className="mt-5 text-base font-black text-white">
                Call Us
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Talk directly with our customer support team.
              </p>

              <span className="mt-4 block text-sm font-bold text-emerald-400">
                +977 9800000000
              </span>

            </a>

            {/* EMAIL */}

            <a
              href="mailto:support@shopzone.com"
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white">
                <FaEnvelope />
              </div>

              <h3 className="mt-5 text-base font-black text-white">
                Email Us
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Send us your question and we'll get back to you.
              </p>

              <span className="mt-4 block break-all text-sm font-bold text-emerald-400">
                support@shopzone.com
              </span>

            </a>

            {/* CONTACT */}

            <Link
              to="/contact"
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white">
                <FaHeadset />
              </div>

              <h3 className="mt-5 text-base font-black text-white">
                Contact Support
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Send us a message through our contact page.
              </p>

              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-400">
                Contact Us
                <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
              </span>

            </Link>

          </div>

        </div>

      </section>

      {/* ===================================================
          SECURITY / TRUST
      =================================================== */}

      <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-5xl">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <FaShieldAlt />
              </div>

              <div>
                <h3 className="text-sm font-black text-slate-900">
                  Secure Shopping
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Shop with confidence
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <FaTruck />
              </div>

              <div>
                <h3 className="text-sm font-black text-slate-900">
                  Reliable Delivery
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Track your order easily
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <FaHeadset />
              </div>

              <div>
                <h3 className="text-sm font-black text-slate-900">
                  Customer Support
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  We're here to help
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Help;

