import { Link } from "react-router-dom";
import {
  FaMobileAlt,
  FaTshirt,
  FaHome,
  FaDumbbell,
  FaHeadphones,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  {
    name: "Electronics",
    description: "Phones, laptops & gadgets",
    icon: FaMobileAlt,
    link: "/categories/electronics",
  },
  {
    name: "Fashion",
    description: "Trendy clothes & footwear",
    icon: FaTshirt,
    link: "/categories/fashion",
  },
  {
    name: "Home & Living",
    description: "Make your home beautiful",
    icon: FaHome,
    link: "/categories/home",
  },
  {
    name: "Sports & Fitness",
    description: "Gear for active lifestyles",
    icon: FaDumbbell,
    link: "/categories/sports",
  },
  {
    name: "Accessories",
    description: "Complete your style",
    icon: FaHeadphones,
    link: "/categories/accessories",
  },
];

const Categories = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="font-semibold uppercase tracking-wider text-emerald-600">
              Shop by Category
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Find What You Love
            </h2>

            <p className="mt-3 max-w-xl text-slate-600">
              Explore our wide range of categories and discover products made
              for your lifestyle.
            </p>
          </div>

          <Link
            to="/categories"
            className="inline-flex items-center gap-2 font-semibold text-emerald-600 transition hover:text-emerald-700"
          >
            View All
            <FaArrowRight className="text-sm" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                to={category.link}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white">
                  <Icon className="text-2xl" />
                </div>

                <h3 className="font-bold text-slate-900">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm leading-5 text-slate-500">
                  {category.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-600">
                  Explore
                  <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;