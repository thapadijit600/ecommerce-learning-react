import {
  FaShoppingBag,
  FaArrowRight,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";

const ProductHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Decorative Background */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
              <FaShoppingBag />
              Discover Our Collection
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Find Products
              <span className="block text-emerald-400">
                You’ll Love
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Explore quality products across electronics, fashion, home,
              sports, beauty, and more. Find what you need at prices you'll
              love.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-600"
              >
                Shop Products
                <FaArrowRight className="text-sm" />
              </a>
            </div>
          </div>

          {/* Right Information Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:ml-auto lg:max-w-md">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <FaTruck className="mb-4 text-2xl text-emerald-400" />

              <h3 className="font-bold text-white">
                Fast Delivery
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Quick and reliable delivery for your orders.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <FaShieldAlt className="mb-4 text-2xl text-emerald-400" />

              <h3 className="font-bold text-white">
                Secure Shopping
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Shop confidently with secure payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;