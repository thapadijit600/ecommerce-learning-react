import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaShoppingBag,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-slate-950">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Decorative shapes */}
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-sm">
            <FaShoppingBag />
            <span>Smart Shopping Starts Here</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Everything You Need,
            <span className="block text-emerald-400">
              All in One Place.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Discover quality products, great deals, and a smooth shopping
            experience designed for everyone.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600"
            >
              Shop Now
              <FaArrowRight className="text-sm" />
            </Link>

            <Link
              to="/categories"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Explore Categories
            </Link>
          </div>

          {/* Benefits */}
          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <div className="rounded-lg bg-white/10 p-3">
                <FaTruck className="text-emerald-400" />
              </div>
              <span>Fast Delivery</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-200">
              <div className="rounded-lg bg-white/10 p-3">
                <FaShieldAlt className="text-emerald-400" />
              </div>
              <span>Secure Shopping</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-200">
              <div className="rounded-lg bg-white/10 p-3">
                <FaShoppingBag className="text-emerald-400" />
              </div>
              <span>Quality Products</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;