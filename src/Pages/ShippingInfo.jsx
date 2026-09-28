
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaTruck,
  FaMapMarkerAlt,
  FaClock,
  FaBoxOpen,
  FaSearch,
  FaShieldAlt,
  FaCheckCircle,
  FaChevronDown,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaInfoCircle,
} from "react-icons/fa";

/* =========================================================
   SHIPPING METHODS
========================================================= */

const shippingMethods = [
  {
    icon: FaTruck,
    title: "Standard Delivery",
    time: "2–5 Business Days",
    price: "From Rs. 100",
    description:
      "Reliable delivery for everyday orders across available locations in Nepal.",
  },
  {
    icon: FaBoxOpen,
    title: "Free Delivery",
    time: "2–5 Business Days",
    price: "FREE",
    description:
      "Enjoy free standard delivery when your order meets the applicable minimum order value.",
  },
  {
    icon: FaClock,
    title: "Express Delivery",
    time: "1–2 Business Days",
    price: "Available locations only",
    description:
      "Faster delivery may be available for selected products and locations.",
  },
];

/* =========================================================
   SHIPPING FAQ
========================================================= */

const shippingFaqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Standard delivery generally takes around 2–5 business days. Actual delivery time can vary depending on your location, product availability, weather, and other delivery conditions.",
  },
  {
    question: "Do you deliver throughout Nepal?",
    answer:
      "ShopZone is designed to provide delivery across Nepal. However, delivery availability and estimated delivery times can vary by product and destination.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has been processed, you can use the Track Order page to check your order status. Keep your order ID available when checking your delivery.",
  },
  {
    question: "Is delivery free?",
    answer:
      "Free delivery may be available when your order meets the applicable minimum order value. Delivery charges can vary depending on your order, location, and shipping method.",
  },
  {
    question: "Can I change my delivery address?",
    answer:
      "If your order has not been shipped, contact our support team as soon as possible. Address changes may not be possible after the order has been dispatched.",
  },
  {
    question: "What happens if I am not available when my order arrives?",
    answer:
      "The delivery partner may contact you to arrange another delivery attempt. Keep your phone number active so the delivery team can reach you when necessary.",
  },
];

/* =========================================================
   SHIPPING INFO PAGE
========================================================= */

const ShippingInfo = () => {
  const [openFaq, setOpenFaq] = useState(null);

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
              <FaTruck className="text-2xl" />
            </div>

            <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-emerald-400">
              ShopZone Delivery
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Shipping Information
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Everything you need to know about delivery,
              shipping charges, estimated times, and order tracking.
            </p>

          </div>

        </div>
      </section>

      {/* ===================================================
          QUICK SHIPPING INFO
      =================================================== */}

      <section className="relative -mt-8 px-4 pb-12 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-6xl">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

            {/* DELIVERY */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <FaTruck />
              </div>

              <h3 className="mt-4 text-base font-black text-slate-900">
                Reliable Delivery
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                We work to deliver your order safely and on time.
              </p>

            </div>

            {/* TRACKING */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <FaSearch />
              </div>

              <h3 className="mt-4 text-base font-black text-slate-900">
                Easy Tracking
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Check your order progress using your order ID.
              </p>

              <Link
                to="/track-order"
                className="mt-3 inline-flex items-center gap-2 text-xs font-black text-emerald-600 hover:text-emerald-500"
              >
                Track Order
                <FaArrowRight className="text-[10px]" />
              </Link>

            </div>

            {/* SECURE */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <FaShieldAlt />
              </div>

              <h3 className="mt-4 text-base font-black text-slate-900">
                Secure Delivery
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Your order is handled with care throughout delivery.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================
          SHIPPING METHODS
      =================================================== */}

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
              Delivery Options
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Shipping Methods
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              Available shipping options and charges may vary
              depending on your location and order.
            </p>

          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">

            {shippingMethods.map((method) => {
              const Icon = method.icon;

              return (
                <div
                  key={method.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg sm:p-7"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                      <Icon className="text-lg" />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider ${
                        method.price === "FREE"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {method.price}
                    </span>

                  </div>

                  <h3 className="mt-6 text-lg font-black text-slate-900">
                    {method.title}
                  </h3>

                  <p className="mt-2 text-sm font-bold text-emerald-600">
                    {method.time}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {method.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ===================================================
          DELIVERY AREA + ESTIMATED TIME
      =================================================== */}

      <section className="border-y border-slate-200 bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {/* DELIVERY AREA */}

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <p className="text-xs font-black uppercase tracking-wider text-emerald-600">
                    Delivery Coverage
                  </p>

                  <h2 className="mt-2 text-xl font-black text-slate-900 sm:text-2xl">
                    Delivery Across Nepal
                  </h2>

                </div>

              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                ShopZone provides delivery to available locations
                throughout Nepal. Delivery availability, shipping
                charges, and estimated arrival times may vary based
                on your exact destination.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

                <div className="flex items-center gap-3 rounded-xl bg-white p-4">
                  <FaCheckCircle className="shrink-0 text-emerald-500" />
                  <span className="text-sm font-bold text-slate-700">
                    Kathmandu Valley
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-white p-4">
                  <FaCheckCircle className="shrink-0 text-emerald-500" />
                  <span className="text-sm font-bold text-slate-700">
                    Major Cities
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-white p-4">
                  <FaCheckCircle className="shrink-0 text-emerald-500" />
                  <span className="text-sm font-bold text-slate-700">
                    Regional Areas
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-white p-4">
                  <FaCheckCircle className="shrink-0 text-emerald-500" />
                  <span className="text-sm font-bold text-slate-700">
                    Available Remote Areas
                  </span>
                </div>

              </div>

            </div>

            {/* DELIVERY TIMES */}

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <FaClock />
                </div>

                <div>

                  <p className="text-xs font-black uppercase tracking-wider text-emerald-600">
                    Estimated Delivery
                  </p>

                  <h2 className="mt-2 text-xl font-black text-slate-900 sm:text-2xl">
                    How Long Will It Take?
                  </h2>

                </div>

              </div>

              <div className="mt-6 space-y-3">

                <div className="flex items-center justify-between gap-4 rounded-xl bg-white p-4">

                  <span className="text-sm font-bold text-slate-700">
                    Kathmandu Valley
                  </span>

                  <span className="text-sm font-black text-emerald-600">
                    1–3 days
                  </span>

                </div>

                <div className="flex items-center justify-between gap-4 rounded-xl bg-white p-4">

                  <span className="text-sm font-bold text-slate-700">
                    Major Cities
                  </span>

                  <span className="text-sm font-black text-emerald-600">
                    2–5 days
                  </span>

                </div>

                <div className="flex items-center justify-between gap-4 rounded-xl bg-white p-4">

                  <span className="text-sm font-bold text-slate-700">
                    Other Areas
                  </span>

                  <span className="text-sm font-black text-emerald-600">
                    3–7 days
                  </span>

                </div>

              </div>

              <div className="mt-5 flex gap-3 rounded-xl border border-amber-100 bg-amber-50 p-4">

                <FaInfoCircle className="mt-0.5 shrink-0 text-amber-500" />

                <p className="text-xs leading-5 text-amber-800">
                  These are estimated delivery times and may
                  change depending on product availability,
                  destination, weather, holidays, and delivery
                  conditions.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================
          SHIPPING PROCESS
      =================================================== */}

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
              Simple Process
            </p>

            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              How Shipping Works
            </h2>

          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Place Order",
                text: "Choose your products and complete checkout.",
              },
              {
                number: "02",
                title: "Order Confirmed",
                text: "We process and prepare your order.",
              },
              {
                number: "03",
                title: "Order Shipped",
                text: "Your package is handed to the delivery partner.",
              },
              {
                number: "04",
                title: "Delivered",
                text: "Your order arrives at your delivery address.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="relative text-center"
              >

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-black text-white shadow-lg shadow-emerald-600/20">
                  {step.number}
                </div>

                <h3 className="mt-5 text-base font-black text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ===================================================
          IMPORTANT INFORMATION
      =================================================== */}

      <section className="bg-slate-950 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        <div className="mx-auto max-w-5xl">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <FaInfoCircle />
              </div>

              <div>

                <h2 className="text-xl font-black text-white">
                  Important Shipping Information
                </h2>

                <div className="mt-5 space-y-3">

                  {[
                    "Delivery times are estimates and are not guaranteed.",
                    "Please provide an accurate delivery address and active contact number.",
                    "Shipping charges may vary depending on location, order value, and delivery method.",
                    "Some products may have different delivery times due to availability.",
                    "Delivery may take longer during public holidays, extreme weather, or other unexpected conditions.",
                    "Please check your package before accepting delivery and contact support if there is an issue.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <FaCheckCircle className="mt-1 shrink-0 text-emerald-400" />

                      <p className="text-sm leading-6 text-slate-400">
                        {item}
                      </p>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================
          FAQ
      =================================================== */}

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
              Shipping FAQ
            </p>

            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              Common Shipping Questions
            </h2>

          </div>

          <div className="mt-8 space-y-3">

            {shippingFaqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition ${
                    isOpen
                      ? "border-emerald-200 shadow-sm"
                      : "border-slate-200"
                  }`}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(
                        isOpen ? null : index
                      )
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  >

                    <span className="text-sm font-black leading-6 text-slate-900 sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${
                        isOpen
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <FaChevronDown
                        className={`text-xs transition-transform ${
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
            })}

          </div>

        </div>
      </section>

      {/* ===================================================
          CONTACT SUPPORT
      =================================================== */}

      <section className="border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-5xl">

          <div className="rounded-3xl bg-emerald-600 p-6 shadow-xl shadow-emerald-600/10 sm:p-8 lg:p-10">

            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-xl">

                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-100">
                  Need Assistance?
                </p>

                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Have a shipping question?
                </h2>

                <p className="mt-3 text-sm leading-6 text-emerald-50">
                  Our customer support team is ready to help you
                  with delivery, tracking, and shipping questions.
                </p>

              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

                <a
                  href="tel:+9779800000000"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-800"
                >
                  <FaPhoneAlt />
                  Call Us
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-emerald-700 transition hover:bg-emerald-50"
                >
                  Contact Us
                  <FaArrowRight className="text-xs" />
                </Link>

              </div>

            </div>

          </div>

          <div className="mt-5 flex flex-col items-center justify-center gap-2 text-center text-xs text-slate-500 sm:flex-row">

            <FaEnvelope className="text-emerald-600" />

            <span>
              Email support:
            </span>

            <a
              href="mailto:support@shopzone.com"
              className="font-bold text-emerald-600 hover:text-emerald-500"
            >
              support@shopzone.com
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default ShippingInfo;

