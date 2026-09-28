
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUndo,
  FaCheckCircle,
  FaBoxOpen,
  FaTruck,
  FaMoneyBillWave,
  FaShieldAlt,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaHeadset,
  FaTimesCircle,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

function Returns() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How long do I have to return an item?",
      answer:
        "You can request a return within 7 days of receiving your order, provided the product meets our return conditions.",
    },
    {
      question: "How do I request a return?",
      answer:
        "Contact our support team with your order number, product details, and reason for the return. Our team will guide you through the return process.",
    },
    {
      question: "Do I have to pay return shipping?",
      answer:
        "Return shipping may depend on the reason for the return. If the product is damaged, defective, or incorrect, ShopZone may assist with the return shipping.",
    },
    {
      question: "When will I receive my refund?",
      answer:
        "After the returned product is received and inspected, eligible refunds are normally processed within a reasonable processing period. The exact time can also depend on your payment method.",
    },
    {
      question: "Can I exchange a product instead of getting a refund?",
      answer:
        "Exchange availability depends on the product, stock availability, and the reason for the return. Contact support to check whether an exchange is possible.",
    },
    {
      question: "What if I received a damaged product?",
      answer:
        "Please contact us as soon as possible after delivery. Keep the original packaging and provide photos or other relevant details so our team can review the issue.",
    },
  ];

  const returnSteps = [
    {
      icon: FaUndo,
      number: "01",
      title: "Request a Return",
      description:
        "Contact ShopZone support within the eligible return period and provide your order details.",
    },
    {
      icon: FaBoxOpen,
      number: "02",
      title: "Pack the Product",
      description:
        "Pack the item safely with its original packaging, accessories, manuals, and other included items.",
    },
    {
      icon: FaTruck,
      number: "03",
      title: "Send It Back",
      description:
        "Follow the return instructions provided by our support team and hand over the package to the specified carrier.",
    },
    {
      icon: FaMoneyBillWave,
      number: "04",
      title: "Receive Your Refund",
      description:
        "After inspection and approval, your eligible refund will be processed through the applicable payment method.",
    },
  ];

  const eligibleItems = [
    "Product is within the applicable return period.",
    "Product is unused or in acceptable condition.",
    "Original packaging is available where applicable.",
    "All accessories and included items are returned.",
    "Product is not damaged due to customer misuse.",
    "Proof of purchase or order information is available.",
  ];

  const nonReturnableItems = [
    "Products damaged through improper use or handling.",
    "Items that have been modified or altered by the customer.",
    "Products missing important accessories or parts.",
    "Items returned outside the applicable return period.",
    "Products specifically marked as non-returnable.",
    "Personalized or specially customized products where applicable.",
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/60 via-slate-950 to-slate-900" />

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
              <FaUndo />
              Returns & Refunds
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Simple & Transparent
              <span className="block text-emerald-400">Return Policy</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              We want you to shop with confidence. Learn about our return
              process, eligibility requirements, refunds, and how to contact
              our support team.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600"
              >
                Contact Support
                <FaArrowRight className="text-sm" />
              </Link>

              <Link
                to="/help"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                <FaQuestionCircle />
                Visit Help Center
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK INFO
      ===================================================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
          <div className="flex items-center gap-4 px-2 py-7 md:px-7">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-600">
              <FaClock />
            </div>

            <div>
              <h3 className="font-bold text-slate-900">7-Day Return Window</h3>
              <p className="mt-1 text-sm text-slate-500">
                Request eligible returns within the applicable period.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-2 py-7 md:px-7">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
              <FaShieldAlt />
            </div>

            <div>
              <h3 className="font-bold text-slate-900">Shop With Confidence</h3>
              <p className="mt-1 text-sm text-slate-500">
                Our team is here to help with eligible returns.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-2 py-7 md:px-7">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600">
              <FaMoneyBillWave />
            </div>

            <div>
              <h3 className="font-bold text-slate-900">Refund Support</h3>
              <p className="mt-1 text-sm text-slate-500">
                Eligible refunds are processed after verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RETURN PROCESS
      ===================================================== */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
              Easy Process
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              How to Return an Item
            </h2>

            <p className="mt-4 text-slate-600">
              Follow these simple steps to request and complete an eligible
              return.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {returnSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white">
                      <Icon />
                    </div>

                    <span className="text-3xl font-black text-slate-100">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ELIGIBILITY
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Eligible */}
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-xl text-white">
                  <FaCheckCircle />
                </div>

                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    Eligible for Return
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Your return should generally meet these conditions.
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {eligibleItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 shrink-0 text-emerald-500" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Not Eligible */}
            <div className="rounded-3xl border border-red-100 bg-red-50/40 p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-xl text-white">
                  <FaTimesCircle />
                </div>

                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    May Not Be Returnable
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Some situations may make an item ineligible.
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {nonReturnableItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaTimesCircle className="mt-1 shrink-0 text-red-500" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          REFUND SECTION
      ===================================================== */}
      <section className="bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-400">
                Refund Information
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                What Happens After You Return?
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                Once your returned product reaches us, it may be inspected to
                confirm that it meets the applicable return requirements.
                Approved refunds are then processed through the relevant
                payment method.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <FaCheckCircle />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      Product Inspection
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      The returned item is checked according to the applicable
                      return conditions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <FaMoneyBillWave />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      Refund Processing
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Once approved, the eligible refund is initiated through
                      the applicable payment method.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <FaClock />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      Bank or Payment Processing Time
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      The time for funds to appear can vary depending on the
                      payment provider or financial institution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-2xl text-white">
                <FaMoneyBillWave />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Need Help With a Refund?
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                If you have already returned an item and need an update about
                your refund, keep your order information ready and contact our
                support team.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-bold text-white transition hover:bg-emerald-600"
              >
                Contact Support
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMPORTANT INFORMATION
      ===================================================== */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600">
                <FaShieldAlt />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Important Return Information
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                  <p>
                    Return eligibility can vary depending on the product
                    category, seller, condition of the item, and reason for
                    return.
                  </p>

                  <p>
                    Please keep your order confirmation, invoice, original
                    packaging, accessories, and other included items until you
                    are completely satisfied with your purchase.
                  </p>

                  <p>
                    For damaged, defective, or incorrect products, contact
                    ShopZone support as soon as possible after delivery so the
                    issue can be reviewed.
                  </p>

                  <p>
                    Refunds and exchanges are subject to verification and the
                    applicable return conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
              FAQ
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-slate-600">
              Find quick answers to common questions about returns and refunds.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-emerald-200 bg-emerald-50/40"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-slate-900">
                      {faq.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-200/70 px-5 pb-5 pt-4 sm:px-6">
                      <p className="text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SUPPORT CTA
      ===================================================== */}
      <section className="bg-emerald-50 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-2xl text-white shadow-lg shadow-emerald-500/20">
            <FaHeadset />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Still Need Help?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Our support team is ready to help you with returns, refunds,
            exchanges, orders, and other shopping questions.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-bold text-white transition hover:bg-emerald-600"
            >
              <FaHeadset />
              Contact Us
            </Link>

            <Link
              to="/help"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Help Center
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Returns;

