
import React from "react";
import {
  FaUsers,
  FaShieldAlt,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";

const AboutValues = () => {
  const values = [
    {
      icon: <FaUsers />,
      title: "Customer First",
      description:
        "We put our customers at the heart of everything we do and work hard to make every shopping experience simple and enjoyable.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe & Secure",
      description:
        "Your trust matters to us. We focus on providing a secure and reliable shopping environment for every customer.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Products",
      description:
        "We work with trusted sellers and focus on bringing useful, reliable, and quality products to our customers.",
    },
    {
      icon: <FaHeadset />,
      title: "Reliable Support",
      description:
        "Our support team is here to help you with questions, orders, products, and your overall shopping experience.",
    },
  ];

  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-600">
            What Matters To Us
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Our values
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Everything we build is guided by the principles that help us
            create a better experience for customers and sellers.
          </p>
        </div>

        {/* Value Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-lg text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                {value.icon}
              </div>

              <h3 className="mt-5 text-lg font-extrabold text-slate-900">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;

