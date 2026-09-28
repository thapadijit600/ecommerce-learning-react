import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaStore,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaTruck,
  FaShieldAlt,
  FaUndo,
  FaHeadset,
  FaArrowRight,
  FaCheck,
  FaCreditCard,
  FaHeart,
} from "react-icons/fa";

/* =========================================================
   SHOPZONE FOOTER
========================================================= */

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  /* =======================================================
     NEWSLETTER
  ======================================================= */

  const handleSubscribe = (e) => {
    e.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  /* =======================================================
     TRUST FEATURES
  ======================================================= */

  const trustFeatures = [
    {
      icon: FaTruck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery",
    },
    {
      icon: FaShieldAlt,
      title: "Secure Shopping",
      description: "Your information stays protected",
    },
    {
      icon: FaUndo,
      title: "Easy Returns",
      description: "Simple and convenient returns",
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description: "We're always here to help",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-white">

      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      <section className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">

          <div className="flex flex-col gap-8 rounded-3xl bg-emerald-600 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">

            {/* Newsletter Information */}

            <div className="max-w-2xl">

              <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-emerald-50">
                ShopZone Newsletter
              </span>

              <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
                Get the latest deals in your inbox
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-emerald-50 sm:text-base">
                Subscribe to receive new arrivals, special offers,
                exclusive discounts, and useful shopping updates.
              </p>

            </div>

            {/* Newsletter Form */}

            <div className="w-full lg:max-w-md">

              {!subscribed ? (
                <form onSubmit={handleSubscribe}>

                  <div className="flex flex-col gap-2 sm:flex-row">

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      aria-label="Email address"
                      required
                      className="h-12 min-w-0 flex-1 rounded-xl border border-white/20 bg-white px-4 text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-white/30"
                    />

                    <button
                      type="submit"
                      className="flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 text-sm font-bold text-white transition duration-200 hover:bg-slate-800 active:scale-[0.98]"
                    >
                      Subscribe
                      <FaArrowRight className="text-xs" />
                    </button>

                  </div>

                </form>
              ) : (
                <div className="flex min-h-12 items-center gap-3 rounded-xl bg-white px-4 text-sm font-bold text-emerald-700 shadow-lg">

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100">
                    <FaCheck className="text-xs" />
                  </span>

                  Thanks! You're successfully subscribed.

                </div>
              )}

              <p className="mt-3 text-xs text-emerald-100">
                No spam. Unsubscribe anytime.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          TRUST FEATURES
      ===================================================== */}

      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {trustFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-slate-900"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon className="text-lg" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {feature.description}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <section className="bg-slate-950">

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

            {/* =================================================
                SHOPZONE BRAND
            ================================================= */}

            <div className="sm:col-span-2 lg:col-span-4">

              <Link
                to="/"
                className="group inline-flex items-center gap-3"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 transition duration-200 group-hover:scale-105">
                  <FaStore className="text-xl" />
                </div>

                <div>

                  <div className="text-xl font-black leading-none tracking-tight text-white">
                    SHOP
                    <span className="text-emerald-400">
                      ZONE
                    </span>
                  </div>

                  <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    Smart Shopping
                  </div>

                </div>

              </Link>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                ShopZone makes online shopping simple, convenient,
                and enjoyable. Discover quality products, great
                deals, and everyday essentials all in one place.
              </p>

              {/* Social Media */}

              <div className="mt-6">

                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Follow us
                </p>

                <div className="flex items-center gap-2">

                  <a
                    href="https://www.facebook.com/"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-slate-400 transition duration-200 hover:-translate-y-1 hover:bg-emerald-600 hover:text-white"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="https://www.instagram.com/?hl=en"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-slate-400 transition duration-200 hover:-translate-y-1 hover:bg-emerald-600 hover:text-white"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://x.com/"
                    aria-label="Twitter"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-slate-400 transition duration-200 hover:-translate-y-1 hover:bg-emerald-600 hover:text-white"
                  >
                    <FaTwitter />
                  </a>

                  <a
                    href="https://www.youtube.com/"
                    aria-label="YouTube"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-slate-400 transition duration-200 hover:-translate-y-1 hover:bg-emerald-600 hover:text-white"
                  >
                    <FaYoutube />
                  </a>

                </div>
              </div>

            </div>

            {/* =================================================
                SHOP
            ================================================= */}

            <div className="lg:col-span-2">

              <h3 className="text-sm font-black uppercase tracking-wider text-white">
                Shop
              </h3>

              <ul className="mt-5 space-y-3">

                <li>
                  <Link
                    to="/products"
                    className="block text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    All Products
                  </Link>
                </li>

                <li>
                  <Link
                    to="/categories"
                    className="block text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    Categories
                  </Link>
                </li>

                <li>
                  <Link
                    to="/deals"
                    className="block text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    Today's Deals
                  </Link>
                </li>

                <li>
                  <Link
                    to="/new-arrivals"
                    className="block text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    New Arrivals
                  </Link>
                </li>

                <li>
                  <Link
                    to="/wishlist"
                    className="block text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    Wishlist
                  </Link>
                </li>

                <li>
                  <Link
                    to="/cart"
                    className="block text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    Shopping Cart
                  </Link>
                </li>

              </ul>

            </div>

            {/* =================================================
                SUPPORT
            ================================================= */}

            <div className="lg:col-span-2">

              <h3 className="text-sm font-black uppercase tracking-wider text-white">
                Support
              </h3>

              <ul className="mt-5 space-y-3">

                <li>
                  <Link
                    to="/track-order"
                    className="block text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    Track Order
                  </Link>
                </li>

                <li>
                  <Link
                    to="/help"
                    className="block text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    Help Center
                  </Link>
                </li>

                <li>
                  <Link
                    to="/shipping"
                    className="block text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    Shipping Info
                  </Link>
                </li>

                <li>
                  <Link
                    to="/returns"
                    className="block text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    Returns & Refunds
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="block text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    Contact Us
                  </Link>
                </li>

              </ul>

            </div>

            {/* =================================================
                COMPANY
            ================================================= */}

            <div className="lg:col-span-2">

              <h3 className="text-sm font-black uppercase tracking-wider text-white">
                Company
              </h3>

              <ul className="mt-5 space-y-3">

                <li>
                  <Link
                    to="/about"
                    className="block text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/login"
                    className="block text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    My Account
                  </Link>
                </li>

                <li>
                  <Link
                    to="/privacy"
                    className="block text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    to="/terms"
                    className="block text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    Terms & Conditions
                  </Link>
                </li>

              </ul>

            </div>

            {/* =================================================
                CONTACT
            ================================================= */}

            <div className="sm:col-span-2 lg:col-span-2">

              <h3 className="text-sm font-black uppercase tracking-wider text-white">
                Contact
              </h3>

              <div className="mt-5 space-y-5">

                {/* Address */}

                <div className="flex gap-3">

                  <FaMapMarkerAlt className="mt-1 shrink-0 text-emerald-400" />

                  <div>
                    <p className="text-xs font-bold text-slate-300">
                      Address
                    </p>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      Kathmandu,
                      <br />
                      Nepal
                    </p>
                  </div>

                </div>

                {/* Phone */}

                <div className="flex gap-3">

                  <FaPhoneAlt className="mt-1 shrink-0 text-emerald-400" />

                  <div>
                    <p className="text-xs font-bold text-slate-300">
                      Phone
                    </p>

                    <a
                      href="tel:+9779800000000"
                      className="mt-1 block text-sm text-slate-500 transition hover:text-emerald-400"
                    >
                      +977 9800000000
                    </a>
                  </div>

                </div>

                {/* Email */}

                <div className="flex min-w-0 gap-3">

                  <FaEnvelope className="mt-1 shrink-0 text-emerald-400" />

                  <div className="min-w-0">

                    <p className="text-xs font-bold text-slate-300">
                      Email
                    </p>

                    <a
                      href="mailto:support@shopzone.com"
                      className="mt-1 block break-all text-sm text-slate-500 transition hover:text-emerald-400"
                    >
                      support@shopzone.com
                    </a>

                  </div>

                </div>

                {/* Hours */}

                <div className="flex gap-3">

                  <FaClock className="mt-1 shrink-0 text-emerald-400" />

                  <div>

                    <p className="text-xs font-bold text-slate-300">
                      Support Hours
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      24/7 Customer Support
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              CONTACT SUPPORT CTA
          ================================================= */}

          <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 md:flex-row md:items-center md:justify-between">

            <div>

              <h3 className="text-base font-bold text-white">
                Need help with your order?
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Our customer support team is ready to help.
              </p>

            </div>

            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition duration-200 hover:bg-emerald-500 active:scale-[0.98] sm:w-auto"
            >
              Contact Support
              <FaArrowRight className="text-xs" />
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          BOTTOM FOOTER
      ===================================================== */}

      <section className="border-t border-slate-800 bg-slate-950">

        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left">

            {/* Copyright */}

            <p className="text-xs leading-5 text-slate-500 sm:text-sm">

              © {currentYear}{" "}

              <span className="font-bold text-slate-300">
                ShopZone
              </span>

              . All Rights Reserved.

            </p>

            {/* Security / Payment */}

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-500 md:justify-end">

              <span className="flex items-center gap-2">
                <FaShieldAlt className="text-emerald-400" />
                Secure Payments
              </span>

              <span className="hidden h-4 w-px bg-slate-800 sm:block" />

              <span className="flex items-center gap-2">
                <FaCreditCard className="text-emerald-400" />
                Multiple Payment Options
              </span>

              <span className="hidden h-4 w-px bg-slate-800 sm:block" />

              <span className="flex items-center gap-1">
                Made with
                <FaHeart className="text-red-400" />
                in Nepal
              </span>

            </div>

          </div>

        </div>

      </section>

    </footer>
  );
};

export default Footer;