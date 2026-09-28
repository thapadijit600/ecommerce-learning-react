import {
  FaHeadset,
  FaCheckCircle,
  FaShieldAlt,
  FaTruck,
} from "react-icons/fa";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Decorative circles */}
      <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="absolute right-1/4 top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
            <FaHeadset className="text-emerald-400" />

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
              Contact ShopZone
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            We're here to{" "}
            <span className="text-emerald-400">help.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base lg:text-lg">
            Have a question about an order, product, delivery, return, or
            anything else? Our friendly support team is ready to assist you.
          </p>

          {/* Features */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5">
              <FaCheckCircle className="text-emerald-400" />

              <span className="text-xs font-semibold text-slate-200 sm:text-sm">
                Quick Response
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5">
              <FaShieldAlt className="text-emerald-400" />

              <span className="text-xs font-semibold text-slate-200 sm:text-sm">
                Trusted Support
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5">
              <FaTruck className="text-emerald-400" />

              <span className="text-xs font-semibold text-slate-200 sm:text-sm">
                Order Assistance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;