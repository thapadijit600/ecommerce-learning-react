import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaSearch,
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
  FaStar,
  FaClock,
  FaArrowRight,
  FaCheck,
  FaFilter,
  FaTimes,
  FaFire,
  FaTruck,
  FaShieldAlt,
  FaUndo,
  FaTag,
} from "react-icons/fa";

/* =========================================================
   DEALS DATA
========================================================= */

const dealsData = [
  {
    id: 1,
    name: "Premium Running Shoes",
    category: "Fashion",
    price: 3499,
    oldPrice: 4999,
    discount: 30,
    rating: 4.8,
    reviews: 124,
    sold: 86,
    badge: "Best Deal",
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    description:
      "Premium running shoes designed for comfort, everyday use and active lifestyles.",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    oldPrice: 3999,
    discount: 38,
    rating: 4.7,
    reviews: 98,
    sold: 74,
    badge: "Hot",
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    description:
      "Enjoy immersive audio with comfortable wireless headphones and long battery life.",
  },
  {
    id: 3,
    name: "Smart Watch Pro",
    category: "Electronics",
    price: 4299,
    oldPrice: 6499,
    discount: 34,
    rating: 4.6,
    reviews: 87,
    sold: 62,
    badge: "Popular",
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    description:
      "Modern smartwatch with fitness tracking, notifications and smart everyday features.",
  },
  {
    id: 4,
    name: "Casual Denim Jacket",
    category: "Fashion",
    price: 2799,
    oldPrice: 3999,
    discount: 30,
    rating: 4.5,
    reviews: 63,
    sold: 48,
    badge: "Deal",
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
    description:
      "Classic denim jacket suitable for casual outfits and everyday wear.",
  },
  {
    id: 5,
    name: "Modern Backpack",
    category: "Accessories",
    price: 1599,
    oldPrice: 2499,
    discount: 36,
    rating: 4.7,
    reviews: 76,
    sold: 55,
    badge: "Hot",
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    description:
      "Stylish and practical backpack for work, travel and everyday essentials.",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 1899,
    oldPrice: 2999,
    discount: 37,
    rating: 4.6,
    reviews: 91,
    sold: 68,
    badge: "Best Deal",
    stock: 14,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80",
    description:
      "Portable Bluetooth speaker with powerful sound and compact design.",
  },
  {
    id: 7,
    name: "Fitness Smart Band",
    category: "Sports",
    price: 1299,
    oldPrice: 1999,
    discount: 35,
    rating: 4.5,
    reviews: 54,
    sold: 42,
    badge: "Deal",
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?auto=format&fit=crop&w=900&q=80",
    description:
      "Lightweight smart fitness band for tracking daily activity and workouts.",
  },
  {
    id: 8,
    name: "Premium Sunglasses",
    category: "Accessories",
    price: 999,
    oldPrice: 1699,
    discount: 41,
    rating: 4.4,
    reviews: 46,
    sold: 38,
    badge: "Limited",
    stock: 9,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
    description:
      "Stylish sunglasses designed for everyday fashion and outdoor use.",
  },
  {
    id: 9,
    name: "Kitchen Blender",
    category: "Home & Living",
    price: 2199,
    oldPrice: 3299,
    discount: 33,
    rating: 4.6,
    reviews: 71,
    sold: 51,
    badge: "Hot",
    stock: 16,
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=900&q=80",
    description:
      "Powerful kitchen blender for smoothies, sauces and everyday food preparation.",
  },
  {
    id: 10,
    name: "Skincare Essentials Set",
    category: "Beauty",
    price: 1799,
    oldPrice: 2699,
    discount: 33,
    rating: 4.8,
    reviews: 102,
    sold: 77,
    badge: "Popular",
    stock: 22,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80",
    description:
      "Complete skincare essentials set for your everyday beauty routine.",
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All Deals",
  "Electronics",
  "Fashion",
  "Home & Living",
  "Beauty",
  "Sports",
  "Accessories",
];

/* =========================================================
   DEAL CARD
========================================================= */

const DealCard = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
}) => {
  const stockPercentage = Math.min(
    Math.max((product.stock / 30) * 100, 8),
    100
  );

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-900/10">
      {/* Image */}
      <div className="relative overflow-hidden bg-slate-100">
        <Link to={`/products/${product.id}`}>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Discount */}
        <div className="absolute left-3 top-3 rounded-lg bg-rose-500 px-2.5 py-1.5 text-xs font-extrabold text-white shadow-lg">
          -{product.discount}%
        </div>

        {/* Badge */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-lg bg-white/95 px-2.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-slate-700 shadow-md backdrop-blur">
          <FaFire className="text-amber-500" />
          {product.badge}
        </div>

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => onToggleWishlist(product.id)}
          aria-label={
            isWishlisted ? "Remove from wishlist" : "Add to wishlist"
          }
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-600 shadow-lg backdrop-blur transition-all hover:scale-110 hover:text-rose-500"
        >
          {isWishlisted ? (
            <FaHeart className="text-rose-500" />
          ) : (
            <FaRegHeart />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
          {product.category}
        </p>

        {/* Name */}
        <Link to={`/products/${product.id}`}>
          <h3 className="line-clamp-1 text-base font-bold text-slate-900 transition-colors hover:text-emerald-600">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700">
            <FaStar className="text-amber-400" />
            {product.rating}
          </div>

          <span className="text-xs text-slate-400">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-end gap-2">
          <span className="text-xl font-extrabold text-slate-900">
            Rs. {product.price.toLocaleString()}
          </span>

          <span className="pb-0.5 text-sm text-slate-400 line-through">
            Rs. {product.oldPrice.toLocaleString()}
          </span>
        </div>

        {/* Savings */}
        <p className="mt-1 text-xs font-semibold text-emerald-600">
          Save Rs.{" "}
          {(product.oldPrice - product.price).toLocaleString()}
        </p>

        {/* Stock */}
        <div className="mt-4">
          <div className="mb-1.5 flex items-center justify-between text-[11px]">
            <span className="font-semibold text-slate-500">
              {product.sold} sold
            </span>

            <span
              className={`font-bold ${
                product.stock <= 10
                  ? "text-rose-500"
                  : "text-slate-500"
              }`}
            >
              {product.stock} left
            </span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className={`h-full rounded-full transition-all ${
                product.stock <= 10
                  ? "bg-rose-500"
                  : "bg-emerald-500"
              }`}
              style={{ width: `${stockPercentage}%` }}
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/20 active:scale-[0.98]"
        >
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </article>
  );
};

/* =========================================================
   HERO
========================================================= */

const DealsHero = ({ countdown }) => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1800&q=85"
          alt="Deals"
          className="h-full w-full object-cover opacity-30"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
            <FaBolt className="text-amber-400" />
            Limited Time Deals
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Big Savings.
            <span className="block text-emerald-400">
              Limited Time.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base lg:text-lg">
            Discover amazing deals across electronics, fashion, beauty,
            sports and more. Grab your favorites before the offers
            disappear.
          </p>

          {/* Countdown */}
          <div className="mt-8">
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <FaClock className="text-emerald-400" />
              Deal ends in
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                ["Hours", countdown.hours],
                ["Minutes", countdown.minutes],
                ["Seconds", countdown.seconds],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="min-w-[72px] rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-center backdrop-blur-md sm:min-w-[85px]"
                >
                  <div className="text-2xl font-black text-white sm:text-3xl">
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="#deals"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/30"
          >
            Shop Deals
            <FaArrowRight className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   DEALS PAGE
========================================================= */

const Deals = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Deals");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recommended");

  const [wishlist, setWishlist] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const [cartMessage, setCartMessage] = useState("");
  const [countdown, setCountdown] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  /* -------------------------------------------------------
     COUNTDOWN
  ------------------------------------------------------- */

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((previous) => {
        let { hours, minutes, seconds } = previous;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
        }

        return {
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* -------------------------------------------------------
     WISHLIST
  ------------------------------------------------------- */

  const toggleWishlist = (id) => {
    setWishlist((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  /* -------------------------------------------------------
     CART
  ------------------------------------------------------- */

  const addToCart = (product) => {
    setCartMessage(`${product.name} added to your cart.`);

    setTimeout(() => {
      setCartMessage("");
    }, 2500);
  };

  /* -------------------------------------------------------
     FILTER + SORT
  ------------------------------------------------------- */

  const filteredDeals = useMemo(() => {
    let result = [...dealsData];

    if (selectedCategory !== "All Deals") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search)
      );
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "discount":
        result.sort((a, b) => b.discount - a.discount);
        break;

      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;

      case "popular":
        result.sort((a, b) => b.sold - a.sold);
        break;

      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;

      default:
        break;
    }

    return result;
  }, [selectedCategory, searchTerm, sortBy]);

  /* -------------------------------------------------------
     RESET
  ------------------------------------------------------- */

  const resetFilters = () => {
    setSelectedCategory("All Deals");
    setSearchTerm("");
    setSortBy("recommended");
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <DealsHero countdown={countdown} />

      {/* Main */}
      <main id="deals">
        {/* Section Header */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-bold text-emerald-600">
                  <FaFire />
                  Today's Offers
                </div>

                <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                  Deals you don't want to miss
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Save more on popular products with limited-time
                  discounts from Shop Zone.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="font-semibold text-slate-900">
                  {filteredDeals.length}
                </span>
                deals available
              </div>
            </div>
          </div>
        </section>

        {/* Toolbar */}
        <section className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              {/* Search */}
              <div className="relative flex-1">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search deals..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-10 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                />

                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>

              {/* Mobile filter button */}
              <button
                type="button"
                onClick={() => setShowFilters(true)}
                className="flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 lg:hidden"
              >
                <FaFilter />
                Filters
              </button>

              {/* Desktop Categories */}
              <div className="hidden items-center gap-2 overflow-x-auto lg:flex">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-bold transition-all ${
                      selectedCategory === category
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
              >
                <option value="recommended">Recommended</option>
                <option value="discount">Biggest Discount</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="popular">Most Popular</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>
          </div>
        </section>

        {/* Deals */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          {/* Result information */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-slate-500">
                Showing{" "}
                <span className="font-bold text-slate-900">
                  {filteredDeals.length}
                </span>{" "}
                {filteredDeals.length === 1 ? "deal" : "deals"}
              </p>
            </div>

            {(searchTerm || selectedCategory !== "All Deals") && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs font-bold text-emerald-600 transition hover:text-emerald-700"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Grid */}
          {filteredDeals.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredDeals.map((product) => (
                <DealCard
                  key={product.id}
                  product={product}
                  isWishlisted={wishlist.includes(product.id)}
                  onToggleWishlist={toggleWishlist}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <FaSearch className="text-2xl" />
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                No deals found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                We couldn't find any deals matching your search or
                selected category.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
              >
                View All Deals
              </button>
            </div>
          )}
        </section>

        {/* Benefits */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 px-4 py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 px-4 py-6 sm:justify-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <FaTruck />
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Fast Delivery
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Quick & reliable delivery
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-6 sm:justify-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FaShieldAlt />
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Secure Shopping
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Safe and secure checkout
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-6 sm:justify-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <FaUndo />
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Easy Returns
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Simple return process
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
              <FaTag className="text-xl" />
            </div>

            <h2 className="mt-5 text-2xl font-black text-white sm:text-3xl">
              Don't miss the next deal
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
              Explore more products and discover new offers added to
              Shop Zone every day.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-500"
            >
              Explore All Products
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </section>
      </main>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-[70] transition ${
          showFilters ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <button
          type="button"
          aria-label="Close filters"
          onClick={() => setShowFilters(false)}
          className={`absolute inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity ${
            showFilters ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <aside
          className={`absolute right-0 top-0 h-full w-[min(88vw,380px)] overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ${
            showFilters ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900">
                Deal Filters
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Find exactly what you're looking for
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowFilters(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200"
            >
              <FaTimes />
            </button>
          </div>

          <div className="p-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              Categories
            </p>

            <div className="space-y-1.5">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowFilters(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    selectedCategory === category
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{category}</span>

                  {selectedCategory === category && (
                    <FaCheck className="text-xs text-emerald-600" />
                  )}
                </button>
              ))}
            </div>

            <div className="my-6 border-t border-slate-100" />

            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              Sort Deals
            </p>

            <div className="space-y-1.5">
              {[
                ["recommended", "Recommended"],
                ["discount", "Biggest Discount"],
                ["price-low", "Price: Low to High"],
                ["price-high", "Price: High to Low"],
                ["rating", "Highest Rated"],
                ["popular", "Most Popular"],
                ["name", "Name: A-Z"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setSortBy(value);
                    setShowFilters(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    sortBy === value
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {label}

                  {sortBy === value && (
                    <FaCheck className="text-xs text-emerald-600" />
                  )}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                resetFilters();
                setShowFilters(false);
              }}
              className="mt-6 flex w-full items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
            >
              Reset All Filters
            </button>
          </div>
        </aside>
      </div>

      {/* Cart Toast */}
      <div
        className={`fixed bottom-5 left-1/2 z-[80] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 transition-all duration-300 ${
          cartMessage
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }`}
      >
        <div className="flex items-center gap-3 rounded-2xl bg-slate-950 px-4 py-4 text-white shadow-2xl">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500">
            <FaCheck className="text-sm" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold">Added to cart</p>
            <p className="truncate text-xs text-slate-400">
              {cartMessage}
            </p>
          </div>

          <Link
            to="/cart"
            className="shrink-0 rounded-lg bg-white/10 px-3 py-2 text-xs font-bold text-white transition hover:bg-white/20"
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Deals;