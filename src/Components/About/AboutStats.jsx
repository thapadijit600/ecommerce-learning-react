
import React from "react";
import {
  FaBoxOpen,
  FaUsers,
  FaStore,
  FaTruck,
} from "react-icons/fa";

const AboutStats = () => {
  const stats = [
    {
      icon: <FaBoxOpen />,
      number: "10K+",
      label: "Products",
    },
    {
      icon: <FaUsers />,
      number: "5K+",
      label: "Happy Customers",
    },
    {
      icon: <FaStore />,
      number: "500+",
      label: "Trusted Sellers",
    },
    {
      icon: <FaTruck />,
      number: "24/7",
      label: "Delivery Support",
    },
  ];

  return (
    <section className="relative -mt-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center px-4 py-6 text-center sm:py-7 ${
                index !== 0 ? "border-l border-slate-100" : ""
              } ${
                index === 2
                  ? "max-sm:border-l max-sm:border-t"
                  : ""
              } ${
                index === 3 ? "max-sm:border-t" : ""
              }`}
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                {stat.icon}
              </div>

              <p className="text-xl font-black text-slate-900 sm:text-2xl">
                {stat.number}
              </p>

              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;

