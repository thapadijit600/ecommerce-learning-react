
import React from "react";
import {
  FaShoppingBag,
  FaGlobeAsia,
  FaCheckCircle,
} from "react-icons/fa";

const AboutStory = () => {
  const features = [
    "Wide range of products",
    "Trusted local sellers",
    "Secure shopping experience",
    "Fast and reliable delivery",
    "Easy product discovery",
    "Customer-focused support",
  ];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Story Visual */}
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-emerald-100" />

          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 shadow-2xl sm:p-10 lg:p-12">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-emerald-500/10 blur-2xl" />

            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-2xl text-white shadow-lg shadow-emerald-600/20">
                <FaShoppingBag />
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                Our Story
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                Built around better
                <span className="block text-emerald-400">
                  shopping experiences.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                ShopZone was created with a simple idea: online shopping
                should be convenient, transparent, and enjoyable. We bring
                products and customers together through a clean and
                user-friendly shopping experience.
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <FaGlobeAsia />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Serving shoppers across Nepal
                  </p>

                  <p className="text-xs text-slate-400">
                    Connecting customers with trusted sellers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Content */}
        <div>
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-600">
            Who We Are
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Your trusted place to
            <span className="text-emerald-600">
              {" "}
              shop online.
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600">
            At ShopZone, we believe finding the right product should not be
            complicated. Our platform brings different categories, products,
            and sellers together so customers can shop with confidence.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-600">
            From everyday essentials and electronics to fashion, beauty,
            sports, and accessories, we aim to provide a convenient
            destination for modern shoppers.
          </p>

          {/* Features */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition-colors hover:border-emerald-100 hover:bg-emerald-50"
              >
                <FaCheckCircle className="shrink-0 text-emerald-600" />

                <span className="text-sm font-semibold text-slate-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;

