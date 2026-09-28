
import React from "react";
import { Link } from "react-router-dom";
import { FaStore, FaArrowRight } from "react-icons/fa";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Decorative Background */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-300">
            <FaStore />
            About ShopZone
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Making online shopping
            <span className="block text-emerald-400">
              simple & enjoyable.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            ShopZone is a modern ecommerce platform designed to connect
            customers with quality products from trusted sellers. We make
            discovering, comparing, and shopping for products easier.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500"
            >
              Explore Products
              <FaArrowRight className="text-xs" />
            </Link>

            <Link
              to="/Contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

