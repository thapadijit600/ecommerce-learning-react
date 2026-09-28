
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaStore,
  FaShieldAlt,
  FaStar,
  FaShoppingBag,
  FaArrowRight,
} from "react-icons/fa";

const AboutWhyShopZone = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left Content */}
        <div>
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-600">
            Why ShopZone
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            More than a store.
            <span className="block text-emerald-600">
              A better way to shop.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            We combine a simple interface, useful product categories, and
            customer-focused services to make online shopping more convenient.
          </p>

          <div className="mt-8 space-y-4">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <FaHeart />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Designed for customers
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Simple navigation and clear product information help you
                  find what you need quickly.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <FaStore />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Supporting sellers
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  We provide a platform where sellers can showcase their
                  products and reach more customers.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <FaShieldAlt />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Focused on trust
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  We aim to make every step of your shopping journey reliable
                  and straightforward.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="rounded-3xl bg-emerald-600 p-6 shadow-2xl shadow-emerald-600/20 sm:p-8 lg:p-10">
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <FaStar className="text-3xl text-white" />

            <h3 className="mt-6 text-2xl font-black text-white">
              Shopping made easier
            </h3>

            <p className="mt-4 text-sm leading-7 text-emerald-50 sm:text-base">
              Browse products, discover new arrivals, explore deals, and
              connect with trusted sellers — all from one convenient platform.
            </p>

            <div className="mt-7 border-t border-white/20 pt-6">
              <p className="text-sm font-bold text-white">
                Discover something you love.
              </p>

              <Link
                to="/products"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-700 transition-all hover:bg-emerald-50"
              >
                Start Shopping
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyShopZone;

