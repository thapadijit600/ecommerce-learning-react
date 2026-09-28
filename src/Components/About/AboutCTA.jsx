
import React from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaArrowRight,
} from "react-icons/fa";

const AboutCTA = () => {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-10 sm:py-16">
        <div className="mx-auto max-w-2xl">
          {/* Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-xl text-white shadow-lg shadow-emerald-600/20">
            <FaShoppingBag />
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Ready to discover something new?
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Explore our products and find the things you need, all in one
            place.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-emerald-500"
            >
              Browse Products
              <FaArrowRight className="text-xs" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 px-6 py-3.5 text-sm font-bold text-slate-200 transition-all hover:bg-white/5"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;

