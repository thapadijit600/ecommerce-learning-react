import {
  FaSearch,
  FaFilter,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const ProductFilters = ({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  categories,
  onReset,
}) => {
  const hasFilters =
    search !== "" ||
    category !== "All" ||
    sort !== "default";

  return (
    <section className="sticky top-[72px] z-30 border-b border-slate-200 bg-white/95 py-4 shadow-sm backdrop-blur-xl lg:top-[78px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
          {/* Search */}
          <div className="relative min-w-0 flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-10 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <FaTimes className="text-xs" />
              </button>
            )}
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:flex">
            {/* Category */}
            <div className="relative">
              <FaFilter className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-xs text-slate-400" />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-12 w-full min-w-[190px] appearance-none rounded-xl border border-slate-200 bg-white pl-9 pr-10 text-sm font-medium text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
              >
                <option value="All">All Categories</option>

                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-400" />
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-12 w-full min-w-[190px] appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-sm font-medium text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
              >
                <option value="default">Sort: Recommended</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name: A to Z</option>
              </select>

              <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-400" />
            </div>

            {/* Reset */}
            {hasFilters && (
              <button
                type="button"
                onClick={onReset}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 text-sm font-semibold text-slate-600 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
              >
                <FaTimes className="text-xs" />
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFilters;