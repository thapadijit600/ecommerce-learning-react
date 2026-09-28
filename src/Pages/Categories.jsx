
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaArrowRight,
  FaTshirt,
  FaLaptop,
  FaHome,
  FaDumbbell,
  FaMobileAlt,
  FaCamera,
  FaShoePrints,
  FaHeadphones,
  FaShoppingBag,
  FaGamepad,
  FaBaby,
  FaCar,
  FaStar,
  FaCheckCircle,
  FaTags,
} from "react-icons/fa";

/* =========================================================
   CATEGORY DATA
========================================================= */

const categories = [
  {
    id: 1,
    name: "Fashion & Clothing",
    slug: "fashion",
    description:
      "Trendy clothes, stylish outfits and everyday fashion.",
    icon: FaTshirt,
    color: "emerald",
    products: 320,
    featured: true,
  },
  {
    id: 2,
    name: "Electronics",
    slug: "electronics",
    description:
      "Latest gadgets, laptops, computers and smart devices.",
    icon: FaLaptop,
    color: "blue",
    products: 245,
    featured: true,
  },
  {
    id: 3,
    name: "Mobile & Accessories",
    slug: "mobile",
    description:
      "Smartphones, chargers, cases, cables and accessories.",
    icon: FaMobileAlt,
    color: "violet",
    products: 185,
    featured: false,
  },
  {
    id: 4,
    name: "Home & Living",
    slug: "home",
    description:
      "Make your home comfortable, beautiful and modern.",
    icon: FaHome,
    color: "orange",
    products: 280,
    featured: true,
  },
  {
    id: 5,
    name: "Fitness & Sports",
    slug: "sports",
    description:
      "Sports equipment, fitness gear and active lifestyle products.",
    icon: FaDumbbell,
    color: "rose",
    products: 150,
    featured: false,
  },
  {
    id: 6,
    name: "Footwear",
    slug: "footwear",
    description:
      "Running shoes, sneakers, sandals and everyday footwear.",
    icon: FaShoePrints,
    color: "cyan",
    products: 210,
    featured: false,
  },
  {
    id: 7,
    name: "Cameras & Photography",
    slug: "cameras",
    description:
      "Digital cameras, lenses and photography accessories.",
    icon: FaCamera,
    color: "indigo",
    products: 95,
    featured: false,
  },
  {
    id: 8,
    name: "Audio & Headphones",
    slug: "audio",
    description:
      "Headphones, earbuds, speakers and audio accessories.",
    icon: FaHeadphones,
    color: "pink",
    products: 130,
    featured: false,
  },
  {
    id: 9,
    name: "Bags & Accessories",
    slug: "bags",
    description:
      "Backpacks, handbags, wallets and everyday accessories.",
    icon: FaShoppingBag,
    color: "amber",
    products: 175,
    featured: false,
  },
  {
    id: 10,
    name: "Gaming",
    slug: "gaming",
    description:
      "Gaming laptops, consoles, controllers and gaming accessories.",
    icon: FaGamepad,
    color: "purple",
    products: 120,
    featured: false,
  },
  {
    id: 11,
    name: "Baby & Kids",
    slug: "kids",
    description:
      "Clothing, toys and useful products for babies and kids.",
    icon: FaBaby,
    color: "sky",
    products: 160,
    featured: false,
  },
  {
    id: 12,
    name: "Automotive",
    slug: "automotive",
    description:
      "Car accessories, tools and useful automotive products.",
    icon: FaCar,
    color: "slate",
    products: 110,
    featured: false,
  },
];

/* =========================================================
   COLOR STYLES
========================================================= */

const colorStyles = {
  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    hover:
      "group-hover:bg-emerald-600 group-hover:text-white",
    badge: "bg-emerald-50 text-emerald-700",
  },

  blue: {
    icon: "bg-blue-50 text-blue-600",
    hover:
      "group-hover:bg-blue-600 group-hover:text-white",
    badge: "bg-blue-50 text-blue-700",
  },

  violet: {
    icon: "bg-violet-50 text-violet-600",
    hover:
      "group-hover:bg-violet-600 group-hover:text-white",
    badge: "bg-violet-50 text-violet-700",
  },

  orange: {
    icon: "bg-orange-50 text-orange-600",
    hover:
      "group-hover:bg-orange-600 group-hover:text-white",
    badge: "bg-orange-50 text-orange-700",
  },

  rose: {
    icon: "bg-rose-50 text-rose-600",
    hover:
      "group-hover:bg-rose-600 group-hover:text-white",
    badge: "bg-rose-50 text-rose-700",
  },

  cyan: {
    icon: "bg-cyan-50 text-cyan-600",
    hover:
      "group-hover:bg-cyan-600 group-hover:text-white",
    badge: "bg-cyan-50 text-cyan-700",
  },

  indigo: {
    icon: "bg-indigo-50 text-indigo-600",
    hover:
      "group-hover:bg-indigo-600 group-hover:text-white",
    badge: "bg-indigo-50 text-indigo-700",
  },

  pink: {
    icon: "bg-pink-50 text-pink-600",
    hover:
      "group-hover:bg-pink-600 group-hover:text-white",
    badge: "bg-pink-50 text-pink-700",
  },

  amber: {
    icon: "bg-amber-50 text-amber-600",
    hover:
      "group-hover:bg-amber-600 group-hover:text-white",
    badge: "bg-amber-50 text-amber-700",
  },

  purple: {
    icon: "bg-purple-50 text-purple-600",
    hover:
      "group-hover:bg-purple-600 group-hover:text-white",
    badge: "bg-purple-50 text-purple-700",
  },

  sky: {
    icon: "bg-sky-50 text-sky-600",
    hover:
      "group-hover:bg-sky-600 group-hover:text-white",
    badge: "bg-sky-50 text-sky-700",
  },

  slate: {
    icon: "bg-slate-100 text-slate-700",
    hover:
      "group-hover:bg-slate-800 group-hover:text-white",
    badge: "bg-slate-100 text-slate-700",
  },
};

/* =========================================================
   CATEGORY CARD
========================================================= */

const CategoryCard = ({ category }) => {
  const Icon = category.icon;
  const styles =
    colorStyles[category.color] || colorStyles.emerald;

  return (
    <Link
      to={`/products?category=${encodeURIComponent(
        category.slug
      )}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/60 sm:p-6"
    >
      {/* TOP ROW */}

      <div className="mb-5 flex items-start justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition duration-300 ${styles.icon} ${styles.hover}`}
        >
          <Icon />
        </div>

        {category.featured && (
          <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-amber-700">
            <FaStar className="text-[9px]" />
            Popular
          </span>
        )}
      </div>

      {/* CONTENT */}

      <div className="flex-1">
        <h3 className="text-base font-black text-slate-900 transition group-hover:text-emerald-600 sm:text-lg">
          {category.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
          {category.description}
        </p>
      </div>

      {/* FOOTER */}

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-bold ${styles.badge}`}
        >
          {category.products}+ Products
        </span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition duration-300 group-hover:bg-emerald-600 group-hover:text-white">
          <FaArrowRight className="text-xs" />
        </span>
      </div>
    </Link>
  );
};

/* =========================================================
   MAIN CATEGORIES PAGE
========================================================= */

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  /* =======================================================
     FILTER CATEGORIES
  ======================================================= */

  const filteredCategories = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    if (!search) {
      return categories;
    }

    return categories.filter(
      (category) =>
        category.name.toLowerCase().includes(search) ||
        category.description
          .toLowerCase()
          .includes(search)
    );
  }, [searchTerm]);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative overflow-hidden bg-slate-950">
        {/* Decorative shapes */}

        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            {/* LABEL */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
              <FaTags />
              Explore Our Store
            </div>

            {/* TITLE */}

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Shop by{" "}
              <span className="text-emerald-400">
                Category
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Find everything you need in one place.
              Explore our carefully organized categories
              and discover products that fit your lifestyle.
            </p>

            {/* SEARCH */}

            <div className="mx-auto mt-8 max-w-2xl">
              <div className="relative">
                <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                  placeholder="Search categories..."
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white pl-13 pr-5 text-sm font-medium text-slate-800 outline-none shadow-xl transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20 sm:text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          QUICK STATS
      =================================================== */}

      <section className="relative z-10 mx-auto -mt-8 max-w-5xl px-4 sm:px-6">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 sm:grid-cols-3">
          <div className="flex items-center gap-4 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <FaShoppingBag />
            </div>

            <div>
              <p className="text-xl font-black text-slate-900">
                2,000+
              </p>

              <p className="text-xs font-medium text-slate-500">
                Products
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FaTags />
            </div>

            <div>
              <p className="text-xl font-black text-slate-900">
                12
              </p>

              <p className="text-xs font-medium text-slate-500">
                Categories
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <FaStar />
            </div>

            <div>
              <p className="text-xl font-black text-slate-900">
                4.8/5
              </p>

              <p className="text-xs font-medium text-slate-500">
                Customer Rating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          CATEGORY SECTION
      =================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        {/* SECTION HEADER */}

        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-600">
              Browse Everything
            </p>

            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              All Categories
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Choose a category to discover products
              selected for you.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-emerald-600 transition hover:text-emerald-700"
          >
            View All Products
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

        {/* =================================================
            CATEGORY GRID
        ================================================= */}

        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
              />
            ))}
          </div>
        ) : (
          /* =================================================
             NO RESULTS
          ================================================= */

          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <FaSearch className="text-xl" />
            </div>

            <h3 className="mt-5 text-lg font-black text-slate-900">
              No categories found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              We couldn't find a category matching "
              {searchTerm}".
              Try searching for something else.
            </p>

            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="mt-6 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>

      {/* ===================================================
          FEATURED SHOPPING SECTION
      =================================================== */}

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-slate-950">
            <div className="grid items-center lg:grid-cols-2">
              {/* CONTENT */}

              <div className="p-7 sm:p-10 lg:p-14">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <FaCheckCircle />
                </div>

                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">
                  Shop With Confidence
                </p>

                <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                  Everything you need,
                  <br />
                  all in one place.
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
                  From everyday essentials to the latest
                  technology, explore a wide range of
                  products from different categories.
                </p>

                <Link
                  to="/products"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500"
                >
                  Start Shopping
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>

              {/* FEATURE CARDS */}

              <div className="grid grid-cols-2 gap-3 p-5 sm:gap-4 sm:p-8 lg:p-10">
                {categories
                  .filter((category) => category.featured)
                  .map((category) => {
                    const Icon = category.icon;

                    return (
                      <Link
                        key={category.id}
                        to={`/products?category=${encodeURIComponent(
                          category.slug
                        )}`}
                        className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10 sm:p-6"
                      >
                        <Icon className="text-2xl text-emerald-400 transition group-hover:scale-110" />

                        <h3 className="mt-4 text-sm font-black text-white sm:text-base">
                          {category.name}
                        </h3>

                        <p className="mt-1 text-xs text-slate-400">
                          {category.products}+ products
                        </p>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          BOTTOM CTA
      =================================================== */}

      <section className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
            Ready to find your next favorite product?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
            Browse our products and discover great
            deals across all categories.
          </p>

          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-black text-white shadow-lg transition hover:bg-emerald-600"
          >
            Explore Products
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Categories;
