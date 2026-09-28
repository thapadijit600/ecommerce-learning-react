import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaFilter,
  FaTimes,
  FaChevronDown,
  FaSlidersH,
  FaBolt,
  FaCheck,
  FaArrowRight,
  FaExclamationTriangle,
} from "react-icons/fa";

/* =========================================================
   CART STORAGE KEY
========================================================= */

const CART_KEY = "shop_zone_cart";

/* =========================================================
   PRODUCT DATA
========================================================= */

const productsData = [
  {
    id: 1,
    slug: "premium-running-shoes",
    name: "Premium Running Shoes",
    category: "Fashion",
    price: 3499,
    oldPrice: 4999,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    badge: "Best Seller",
    stock: 12,
    description:
      "Comfortable premium running shoes designed for everyday use and sports activities.",
  },

  {
    id: 2,
    slug: "wireless-headphones",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    oldPrice: 3999,
    rating: 4.7,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    badge: "Hot",
    stock: 18,
    description:
      "Enjoy immersive sound with comfortable wireless headphones and long battery life.",
  },

  {
    id: 3,
    slug: "smart-watch-pro",
    name: "Smart Watch Pro",
    category: "Electronics",
    price: 4299,
    oldPrice: 6499,
    rating: 4.6,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    stock: 15,
    description:
      "Modern smartwatch with fitness tracking, notifications and everyday smart features.",
  },

  {
    id: 4,
    slug: "casual-denim-jacket",
    name: "Casual Denim Jacket",
    category: "Fashion",
    price: 2799,
    oldPrice: 3999,
    rating: 4.5,
    reviews: 63,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    badge: "New",
    stock: 20,
    description:
      "Classic denim jacket suitable for casual everyday outfits.",
  },

  {
    id: 5,
    slug: "modern-backpack",
    name: "Modern Backpack",
    category: "Accessories",
    price: 1599,
    oldPrice: 2499,
    rating: 4.7,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    badge: "Trending",
    stock: 25,
    description:
      "Stylish and practical backpack with enough space for work, travel and everyday essentials.",
  },

  {
    id: 6,
    slug: "bluetooth-speaker",
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 1899,
    oldPrice: 2999,
    rating: 4.6,
    reviews: 91,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    badge: "Best Deal",
    stock: 14,
    description:
      "Portable Bluetooth speaker with powerful sound and compact design.",
  },

  {
    id: 7,
    slug: "fitness-smart-band",
    name: "Fitness Smart Band",
    category: "Sports",
    price: 1299,
    oldPrice: 1999,
    rating: 4.5,
    reviews: 54,
    image:
      "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?auto=format&fit=crop&w=800&q=80",
    badge: "Deal",
    stock: 30,
    description:
      "Track your daily activity, steps and workouts with this lightweight smart band.",
  },

  {
    id: 8,
    slug: "premium-sunglasses",
    name: "Premium Sunglasses",
    category: "Accessories",
    price: 999,
    oldPrice: 1699,
    rating: 4.4,
    reviews: 46,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    badge: "Limited",
    stock: 9,
    description:
      "Stylish sunglasses designed for everyday fashion and outdoor use.",
  },

  {
    id: 9,
    slug: "kitchen-blender",
    name: "Kitchen Blender",
    category: "Home & Living",
    price: 2199,
    oldPrice: 3299,
    rating: 4.6,
    reviews: 71,
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    stock: 16,
    description:
      "Powerful kitchen blender for smoothies, sauces and everyday food preparation.",
  },

  {
    id: 10,
    slug: "skincare-essentials-set",
    name: "Skincare Essentials Set",
    category: "Beauty",
    price: 1799,
    oldPrice: 2699,
    rating: 4.8,
    reviews: 102,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    stock: 22,
    description:
      "Complete skincare essentials set for your everyday beauty routine.",
  },

  {
    id: 11,
    slug: "classic-sneakers",
    name: "Classic Sneakers",
    category: "Fashion",
    price: 2999,
    oldPrice: 4499,
    rating: 4.6,
    reviews: 82,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
    badge: "New",
    stock: 17,
    description:
      "Classic sneakers combining comfort, style and everyday durability.",
  },

  {
    id: 12,
    slug: "wireless-gaming-mouse",
    name: "Wireless Gaming Mouse",
    category: "Electronics",
    price: 1799,
    oldPrice: 2699,
    rating: 4.7,
    reviews: 66,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    badge: "Gaming",
    stock: 21,
    description:
      "Responsive wireless gaming mouse designed for smooth and accurate control.",
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All Products",
  "Electronics",
  "Fashion",
  "Home & Living",
  "Beauty",
  "Sports",
  "Accessories",
];

/* =========================================================
   PRODUCT CARD
========================================================= */

const ProductCard = ({
  product,
  isWishlisted,
  onWishlist,
  onAddToCart,
}) => {
  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  const isOutOfStock = product.stock <= 0;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
      {/* IMAGE */}
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <Link to={`/products/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
              isOutOfStock ? "opacity-60 grayscale" : ""
            }`}
          />
        </Link>

        {/* DISCOUNT */}
        <span className="absolute left-3 top-3 rounded-full bg-rose-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
          -{discount}%
        </span>

        {/* PRODUCT BADGE */}
        {product.badge && (
          <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">
            {product.badge}
          </span>
        )}

        {/* WISHLIST */}
        <button
          type="button"
          onClick={() => onWishlist(product.id)}
          aria-label={
            isWishlisted
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          className={`absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 ${
            isWishlisted
              ? "text-rose-500"
              : "text-slate-500 hover:text-rose-500"
          }`}
        >
          <FaHeart
            className={
              isWishlisted
                ? "scale-110"
                : "transition-transform group-hover:scale-110"
            }
          />
        </button>

        {/* QUICK VIEW */}
        <Link
          to={`/products/${product.slug}`}
          className="absolute bottom-3 left-3 hidden items-center gap-2 rounded-lg bg-slate-900/90 px-3 py-2 text-xs font-bold text-white opacity-0 backdrop-blur transition-all group-hover:flex group-hover:opacity-100"
        >
          View Product
          <FaArrowRight />
        </Link>
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5">
        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-emerald-600">
          {product.category}
        </p>

        <Link
          to={`/products/${product.slug}`}
          className="line-clamp-2 min-h-[48px] text-base font-bold text-slate-900 transition hover:text-emerald-600 sm:text-lg"
        >
          {product.name}
        </Link>

        {/* RATING */}
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-xs font-bold text-amber-600">
            <FaStar />
            {product.rating}
          </div>

          <span className="text-xs text-slate-400">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* PRICE */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xl font-extrabold text-slate-900">
            Rs. {product.price.toLocaleString()}
          </span>

          <span className="text-sm text-slate-400 line-through">
            Rs. {product.oldPrice.toLocaleString()}
          </span>
        </div>

        {/* STOCK */}
        <div className="mt-3 flex items-center gap-2 text-xs">
          {isOutOfStock ? (
            <>
              <FaExclamationTriangle className="text-rose-500" />

              <span className="font-semibold text-rose-500">
                Out of stock
              </span>
            </>
          ) : (
            <>
              <FaCheck className="text-emerald-500" />

              <span className="font-medium text-slate-500">
                {product.stock > 10
                  ? "In stock"
                  : `Only ${product.stock} left`}
              </span>
            </>
          )}
        </div>

        {/* ADD TO CART */}
        <button
          type="button"
          disabled={isOutOfStock}
          onClick={() => onAddToCart(product)}
          className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all active:scale-[0.98] ${
            isOutOfStock
              ? "cursor-not-allowed bg-slate-200 text-slate-400"
              : "bg-slate-900 text-white hover:bg-emerald-600"
          }`}
        >
          <FaShoppingCart />

          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
};

/* =========================================================
   PRODUCT PAGE
========================================================= */

const Product = () => {
  const [searchParams] = useSearchParams();

  const urlSearch = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(urlSearch);

  /* =======================================================
     SYNC NAVBAR SEARCH WITH PRODUCTS PAGE
  ======================================================= */

  useEffect(() => {
    setSearchTerm(urlSearch);
  }, [urlSearch]);

  const [selectedCategory, setSelectedCategory] =
    useState("All Products");

  const [sortBy, setSortBy] = useState("recommended");

  const [priceRange, setPriceRange] = useState("all");

  const [ratingFilter, setRatingFilter] = useState("all");

  const [showFilters, setShowFilters] = useState(false);

  const [wishlist, setWishlist] = useState([]);

  /* =======================================================
     WISHLIST
  ======================================================= */

  const toggleWishlist = (productId) => {
    setWishlist((previous) => {
      if (previous.includes(productId)) {
        return previous.filter((id) => id !== productId);
      }

      return [...previous, productId];
    });
  };

  /* =======================================================
     ADD TO CART

     NO TOAST / NO NOTIFICATION HERE.

     The Navbar listens to "cartUpdated" and changes
     the cart badge automatically.
  ======================================================= */

  const addToCart = (product) => {
    try {
      const savedCart = localStorage.getItem(CART_KEY);

      let existingCart = [];

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          existingCart = parsedCart;
        }
      }

      const existingProduct = existingCart.find(
        (item) => Number(item.id) === Number(product.id)
      );

      let updatedCart;

      /* PRODUCT ALREADY EXISTS */

      if (existingProduct) {
        const currentQuantity =
          Number(existingProduct.quantity) || 1;

        /* STOCK LIMIT */

        if (currentQuantity >= product.stock) {
          return;
        }

        updatedCart = existingCart.map((item) =>
          Number(item.id) === Number(product.id)
            ? {
                ...item,
                quantity: currentQuantity + 1,
              }
            : item
        );
      }

      /* NEW PRODUCT */

      else {
        updatedCart = [
          ...existingCart,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

      /* SAVE */

      localStorage.setItem(
        CART_KEY,
        JSON.stringify(updatedCart)
      );

      /* IMPORTANT:
         Navbar listens for this event.
      */

      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.error(
        "Unable to add product to cart:",
        error
      );
    }
  };

  /* =======================================================
     FILTER + SORT
  ======================================================= */

  const filteredProducts = useMemo(() => {
    let result = [...productsData];

    /* SEARCH */

    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase().trim();

      result = result.filter((product) => {
        const searchableText = [
          product.name,
          product.category,
          product.description,
          product.badge,
          product.slug,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchableText.includes(search);
      });
    }

    /* CATEGORY */

    if (selectedCategory !== "All Products") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    /* PRICE */

    if (priceRange === "under1000") {
      result = result.filter(
        (product) => product.price < 1000
      );
    }

    if (priceRange === "1000-2500") {
      result = result.filter(
        (product) =>
          product.price >= 1000 &&
          product.price <= 2500
      );
    }

    if (priceRange === "2500-5000") {
      result = result.filter(
        (product) =>
          product.price > 2500 &&
          product.price <= 5000
      );
    }

    if (priceRange === "above5000") {
      result = result.filter(
        (product) => product.price > 5000
      );
    }

    /* RATING */

    if (ratingFilter !== "all") {
      const minimumRating = Number(ratingFilter);

      result = result.filter(
        (product) => product.rating >= minimumRating
      );
    }

    /* SORT */

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "discount") {
      result.sort((a, b) => {
        const discountA =
          ((a.oldPrice - a.price) / a.oldPrice) * 100;

        const discountB =
          ((b.oldPrice - b.price) / b.oldPrice) * 100;

        return discountB - discountA;
      });
    }

    if (sortBy === "name") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [
    searchTerm,
    selectedCategory,
    sortBy,
    priceRange,
    ratingFilter,
  ]);

  /* =======================================================
     RESET FILTERS
  ======================================================= */

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All Products");
    setSortBy("recommended");
    setPriceRange("all");
    setRatingFilter("all");
  };

  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <FaBolt />
              Shop with confidence
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Explore Our
              <span className="text-emerald-400">
                {" "}
                Products
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Discover quality products across electronics,
              fashion, beauty, sports, accessories and home
              essentials.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* SEARCH + SORT */}

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 md:flex-row">
            {/* SEARCH */}

            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
                placeholder="Search products..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-11 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
              />

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* MOBILE FILTER */}

            <button
              type="button"
              onClick={() =>
                setShowFilters(!showFilters)
              }
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600 lg:hidden"
            >
              <FaSlidersH />

              {showFilters
                ? "Hide Filters"
                : "Filters"}
            </button>

            {/* SORT */}

            <div className="relative md:w-56">
              <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400" />

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
                className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
              >
                <option value="recommended">
                  Recommended
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>

                <option value="rating">
                  Highest Rated
                </option>

                <option value="discount">
                  Biggest Discount
                </option>

                <option value="name">
                  Name: A-Z
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* CATEGORY TABS */}

        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex min-w-max gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  selectedCategory === category
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-emerald-50 hover:text-emerald-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}

        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* FILTER SIDEBAR */}

          <aside
            className={`${
              showFilters ? "block" : "hidden"
            } lg:block`}
          >
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              {/* HEADER */}

              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaFilter className="text-emerald-600" />

                  <h2 className="font-bold text-slate-900">
                    Filters
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700"
                >
                  Reset
                </button>
              </div>

              {/* CATEGORY */}

              <div className="border-b border-slate-100 pb-5">
                <h3 className="mb-3 text-sm font-bold text-slate-900">
                  Category
                </h3>

                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() =>
                        setSelectedCategory(category)
                      }
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                        selectedCategory === category
                          ? "bg-emerald-50 font-bold text-emerald-700"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <span>{category}</span>

                      {selectedCategory === category && (
                        <FaCheck className="text-xs" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* PRICE */}

              <div className="border-b border-slate-100 py-5">
                <h3 className="mb-3 text-sm font-bold text-slate-900">
                  Price Range
                </h3>

                <div className="space-y-2">
                  {[
                    ["all", "All Prices"],
                    ["under1000", "Under Rs. 1,000"],
                    ["1000-2500", "Rs. 1,000 - 2,500"],
                    ["2500-5000", "Rs. 2,500 - 5,000"],
                    ["above5000", "Above Rs. 5,000"],
                  ].map(([value, label]) => (
                    <label
                      key={value}
                      className="flex cursor-pointer items-center gap-3 text-sm text-slate-600"
                    >
                      <input
                        type="radio"
                        name="price"
                        value={value}
                        checked={priceRange === value}
                        onChange={(e) =>
                          setPriceRange(e.target.value)
                        }
                        className="h-4 w-4 accent-emerald-600"
                      />

                      {label}
                    </label>
                  ))}
                </div>
              </div>

              {/* RATING */}

              <div className="pt-5">
                <h3 className="mb-3 text-sm font-bold text-slate-900">
                  Customer Rating
                </h3>

                <div className="space-y-2">
                  {[
                    ["all", "All Ratings"],
                    ["4", "4★ & above"],
                    ["4.5", "4.5★ & above"],
                  ].map(([value, label]) => (
                    <label
                      key={value}
                      className="flex cursor-pointer items-center gap-3 text-sm text-slate-600"
                    >
                      <input
                        type="radio"
                        name="rating"
                        value={value}
                        checked={ratingFilter === value}
                        onChange={(e) =>
                          setRatingFilter(e.target.value)
                        }
                        className="h-4 w-4 accent-emerald-600"
                      />

                      <span className="flex items-center gap-1">
                        {label}

                        {value !== "all" && (
                          <FaStar className="text-xs text-amber-400" />
                        )}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* PRODUCTS */}

          <div>
            {/* RESULT HEADER */}

            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">
                  {selectedCategory}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Showing{" "}
                  <span className="font-bold text-slate-700">
                    {filteredProducts.length}
                  </span>{" "}
                  products
                </p>
              </div>

              {searchTerm && (
                <div className="rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                  Search: "{searchTerm}"
                </div>
              )}
            </div>

            {/* PRODUCT GRID */}

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isWishlisted={wishlist.includes(
                      product.id
                    )}
                    onWishlist={toggleWishlist}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            ) : (
              /* EMPTY STATE */

              <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                  <FaSearch className="text-xl" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  No products found
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  We couldn't find products matching your
                  current search and filters. Try changing
                  your search or filters.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <FaCheck />
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Quality Products
              </h3>

              <p className="text-sm text-slate-500">
                Carefully selected products
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FaShoppingCart />
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Easy Shopping
              </h3>

              <p className="text-sm text-slate-500">
                Simple and secure checkout
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
              <FaStar />
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Trusted Service
              </h3>

              <p className="text-sm text-slate-500">
                Shopping made easier
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;

