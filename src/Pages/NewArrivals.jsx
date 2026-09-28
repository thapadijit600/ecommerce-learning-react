import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBolt,
  FaBoxOpen,
  FaCartPlus,
  FaCheckCircle,
  FaChevronDown,
  FaHeart,
  FaSearch,
  FaShippingFast,
  FaStar,
  FaTimes,
} from "react-icons/fa";

const newProducts = [
  {
    id: 1,
    name: "Apple AirPods Pro 2",
    category: "Electronics",
    price: 34999,
    oldPrice: 39999,
    rating: 4.8,
    reviews: 124,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1588423771077-4d6b2b0f4f2f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Premium Casual Sneakers",
    category: "Fashion",
    price: 5499,
    oldPrice: 6999,
    rating: 4.7,
    reviews: 86,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Smart LED Table Lamp",
    category: "Home & Living",
    price: 2499,
    oldPrice: 2999,
    rating: 4.6,
    reviews: 53,
    badge: "Just In",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Minimalist Leather Backpack",
    category: "Accessories",
    price: 3999,
    oldPrice: 4999,
    rating: 4.9,
    reviews: 112,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Wireless Mechanical Keyboard",
    category: "Electronics",
    price: 7299,
    oldPrice: 8499,
    rating: 4.7,
    reviews: 71,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Oversized Cotton T-Shirt",
    category: "Fashion",
    price: 1899,
    oldPrice: 2499,
    rating: 4.5,
    reviews: 94,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "Premium Skincare Set",
    category: "Beauty",
    price: 3199,
    oldPrice: 3999,
    rating: 4.8,
    reviews: 64,
    badge: "Just In",
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "Professional Football",
    category: "Sports",
    price: 2299,
    oldPrice: 2799,
    rating: 4.6,
    reviews: 48,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    name: "Smart Fitness Watch",
    category: "Electronics",
    price: 8999,
    oldPrice: 10999,
    rating: 4.7,
    reviews: 137,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    name: "Modern Ceramic Vase",
    category: "Home & Living",
    price: 1799,
    oldPrice: 2299,
    rating: 4.5,
    reviews: 39,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 11,
    name: "Classic Sunglasses",
    category: "Accessories",
    price: 2199,
    oldPrice: 2999,
    rating: 4.6,
    reviews: 58,
    badge: "Just In",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 12,
    name: "Running Performance Shoes",
    category: "Sports",
    price: 4799,
    oldPrice: 5999,
    rating: 4.8,
    reviews: 101,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=80",
  },
];

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Home & Living",
  "Beauty",
  "Sports",
  "Accessories",
];

const NewArrivals = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [wishlist, setWishlist] = useState([]);
  const [cartMessage, setCartMessage] = useState("");
  const [quickView, setQuickView] = useState(null);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const addToCart = (product) => {
    setCartMessage(`${product.name} added to your cart.`);

    setTimeout(() => {
      setCartMessage("");
    }, 3000);
  };

  const filteredProducts = useMemo(() => {
    let products = [...newProducts];

    if (category !== "All") {
      products = products.filter(
        (product) => product.category === category
      );
    }

    if (search.trim()) {
      const searchTerm = search.toLowerCase();

      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm)
      );
    }

    if (sortBy === "price-low") {
      products.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      products.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      products.sort((a, b) => b.rating - a.rating);
    }

    return products;
  }, [search, category, sortBy]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* =====================================================
          CART NOTIFICATION
      ====================================================== */}
      {cartMessage && (
        <div className="fixed right-4 top-24 z-[100] w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-emerald-200 bg-white p-4 shadow-2xl">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <FaCheckCircle />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-bold text-slate-900">
                Added to Cart
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {cartMessage}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setCartMessage("")}
              className="ml-auto text-slate-400 transition hover:text-slate-700"
              aria-label="Close notification"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Decorative background */}
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="absolute right-1/4 top-16 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:px-6 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Hero content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
                <FaBolt className="text-emerald-400" />

                <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                  Fresh Collection
                </span>
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Discover what's
                <span className="text-emerald-400">
                  {" "}new.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base lg:text-lg">
                Explore our latest products, fresh styles, new technology,
                and trending essentials — carefully selected for your
                everyday shopping.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#new-products"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 active:scale-[0.98]"
                >
                  Explore New Arrivals
                  <FaArrowRight className="text-xs" />
                </a>

                <Link
                  to="/deals"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  View Deals
                </Link>
              </div>

              {/* Hero stats */}
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-7">
                <div>
                  <p className="text-xl font-extrabold text-white sm:text-2xl">
                    100+
                  </p>

                  <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">
                    New Products
                  </p>
                </div>

                <div>
                  <p className="text-xl font-extrabold text-white sm:text-2xl">
                    24/7
                  </p>

                  <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">
                    Support
                  </p>
                </div>

                <div>
                  <p className="text-xl font-extrabold text-white sm:text-2xl">
                    Secure
                  </p>

                  <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">
                    Shopping
                  </p>
                </div>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative hidden lg:block">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-5 rounded-[2rem] bg-emerald-500/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
                  <img
                    src={newProducts[0].image}
                    alt="Latest ShopZone product"
                    className="h-[390px] w-full rounded-[1.5rem] object-cover"
                  />

                  <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-slate-950/85 p-4 backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold text-emerald-400">
                          JUST ARRIVED
                        </p>

                        <h3 className="mt-1 text-base font-bold text-white">
                          {newProducts[0].name}
                        </h3>
                      </div>

                      <div className="rounded-xl bg-emerald-600 px-3 py-2 text-sm font-extrabold text-white">
                        New
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <FaShippingFast />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Fast Delivery
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Quick & reliable delivery
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <FaBoxOpen />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Fresh Products
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Latest products added
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <FaCheckCircle />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Trusted Shopping
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Safe & secure checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ====================================================== */}
      <section id="new-products" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16 lg:px-6">
          {/* Section heading */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
                Latest Products
              </span>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                New arrivals
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Be the first to discover the newest products available on
                ShopZone.
              </p>
            </div>

            <div className="text-sm font-semibold text-slate-500">
              <span className="font-bold text-emerald-600">
                {filteredProducts.length}
              </span>{" "}
              products found
            </div>
          </div>

          {/* Filters */}
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              {/* Search */}
              <div className="relative w-full xl:max-w-md">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search new products..."
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-10 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                    aria-label="Clear search"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="flex gap-2 overflow-x-auto pb-1 xl:flex-1 xl:justify-center">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-bold transition sm:text-sm ${
                      category === item
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                        : "bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="relative shrink-0">
                <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-400" />

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 pr-10 text-sm font-semibold text-slate-700 outline-none transition focus:border-emerald-500 focus:bg-white sm:w-48"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">
                    Price: Low to High
                  </option>
                  <option value="price-high">
                    Price: High to Low
                  </option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => {
                const discount = Math.round(
                  ((product.oldPrice - product.price) /
                    product.oldPrice) *
                    100
                );

                const isWishlisted = wishlist.includes(product.id);

                return (
                  <article
                    key={product.id}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
                  >
                    {/* Product Image */}
                    <div className="relative overflow-hidden bg-slate-100">
                      <Link to={`/products/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                        />
                      </Link>

                      {/* Badge */}
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-emerald-600 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg">
                          {product.badge}
                        </span>
                      </div>

                      {/* Discount */}
                      <div className="absolute bottom-4 left-4">
                        <span className="rounded-lg bg-white/95 px-2.5 py-1.5 text-xs font-extrabold text-rose-600 shadow-md backdrop-blur">
                          -{discount}%
                        </span>
                      </div>

                      {/* Wishlist */}
                      <button
                        type="button"
                        onClick={() =>
                          toggleWishlist(product.id)
                        }
                        aria-label={
                          isWishlisted
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }
                        className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl backdrop-blur transition ${
                          isWishlisted
                            ? "bg-rose-500 text-white"
                            : "bg-white/95 text-slate-500 hover:bg-emerald-600 hover:text-white"
                        }`}
                      >
                        <FaHeart
                          className={
                            isWishlisted ? "text-sm" : "text-sm"
                          }
                        />
                      </button>
                    </div>

                    {/* Product Details */}
                    <div className="p-5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                        {product.category}
                      </p>

                      <Link to={`/products/${product.id}`}>
                        <h3 className="mt-2 min-h-[48px] text-base font-extrabold leading-6 text-slate-900 transition hover:text-emerald-600">
                          {product.name}
                        </h3>
                      </Link>

                      {/* Rating */}
                      <div className="mt-3 flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-xs text-amber-400" />

                          <span className="text-xs font-bold text-slate-700">
                            {product.rating}
                          </span>
                        </div>

                        <span className="text-xs text-slate-400">
                          ({product.reviews} reviews)
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mt-4 flex items-end gap-2">
                        <span className="text-xl font-extrabold text-slate-900">
                          Rs. {product.price.toLocaleString()}
                        </span>

                        <span className="pb-0.5 text-xs font-medium text-slate-400 line-through">
                          Rs. {product.oldPrice.toLocaleString()}
                        </span>
                      </div>

                      {/* Buttons */}
                      <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
                        <button
                          type="button"
                          onClick={() => addToCart(product)}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-bold text-white transition hover:bg-emerald-700 active:scale-[0.98] sm:text-sm"
                        >
                          <FaCartPlus />
                          Add to Cart
                        </button>

                        <button
                          type="button"
                          onClick={() => setQuickView(product)}
                          className="rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <FaSearch className="text-xl" />
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                No products found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                We couldn't find any new arrivals matching your search or
                selected category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-6 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          NEWSLETTER CTA
      ====================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 lg:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-emerald-600 px-6 py-12 shadow-xl shadow-emerald-600/20 sm:px-10 lg:py-14">
            <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-white/10" />

            <div className="absolute -bottom-32 -right-16 h-72 w-72 rounded-full bg-white/10" />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                <FaBolt className="text-2xl" />
              </div>

              <h2 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
                Don't miss the next drop.
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-emerald-50 sm:text-base">
                Keep checking ShopZone for the latest products, trending
                styles, and exciting new arrivals.
              </p>

              <Link
                to="/products"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-emerald-700 shadow-lg transition hover:bg-emerald-50"
              >
                Explore All Products
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK VIEW MODAL
      ====================================================== */}
      {quickView && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setQuickView(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setQuickView(null)}
              aria-label="Close quick view"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-slate-600 shadow-lg backdrop-blur transition hover:bg-slate-100"
            >
              <FaTimes />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="bg-slate-100">
                <img
                  src={quickView.image}
                  alt={quickView.name}
                  className="h-full min-h-[320px] w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  {quickView.category}
                </span>

                <h2 className="mt-2 text-2xl font-extrabold leading-tight text-slate-900">
                  {quickView.name}
                </h2>

                <div className="mt-4 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-sm text-amber-400" />

                    <span className="text-sm font-bold">
                      {quickView.rating}
                    </span>
                  </div>

                  <span className="text-sm text-slate-400">
                    ({quickView.reviews} reviews)
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-slate-900">
                    Rs. {quickView.price.toLocaleString()}
                  </span>

                  <span className="text-sm text-slate-400 line-through">
                    Rs. {quickView.oldPrice.toLocaleString()}
                  </span>
                </div>

                <div className="mt-6 rounded-2xl bg-emerald-50 p-4">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-emerald-600" />

                    <p className="text-sm font-semibold text-emerald-800">
                      New arrival — available now
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-6 text-slate-500">
                  Discover this latest addition to the ShopZone collection.
                  Enjoy a convenient shopping experience with secure checkout
                  and reliable delivery.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    addToCart(quickView);
                    setQuickView(null);
                  }}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
                >
                  <FaCartPlus />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default NewArrivals;