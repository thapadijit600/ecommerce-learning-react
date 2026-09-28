import { Link } from "react-router-dom";
import { FaArrowRight, FaTag } from "react-icons/fa";

const DealBanner = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 sm:px-10 lg:px-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
                <FaTag />
                Limited Time Offer
              </div>

              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Big Deals. Better Prices.
              </h2>

              <p className="mt-3 max-w-xl text-slate-400">
                Save more on selected products with our latest exclusive
                offers.
              </p>

              <div className="mt-5 text-2xl font-extrabold text-emerald-400">
                Up to 50% OFF
              </div>
            </div>

            <Link
              to="/deals"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-600"
            >
              View Deals
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealBanner;