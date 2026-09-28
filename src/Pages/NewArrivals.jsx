
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaArrowRight,
  FaBolt,
  FaCheck,
  FaFilter,
  FaTimes,
  FaChevronDown,
  FaEye,
  FaTag,
} from "react-icons/fa";

/* =========================================================
   STORAGE KEYS
========================================================= */

const CART_KEY = "shop_zone_cart";
const WISHLIST_KEY = "shop_zone_wishlist";

/* =========================================================
   NEW ARRIVAL PRODUCTS
========================================================= */

const newProducts = [
  {
    id: 101,
    name: "Apple iPhone 16",
    category: "Mobile",
    price: 124999,
    oldPrice: 134999,
    rating: 4.9,
    reviews: 42,
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=700&q=80",
    badge: "New",
    description:
      "Experience powerful performance with the latest iPhone technology.",
  },
  {
    id: 102,
    name: "Premium Running Shoes",
    category: "Footwear",
    price: 6499,
    oldPrice: 7999,
    rating: 4.8,
    reviews: 35,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    badge: "New",
    description:
      "Lightweight and comfortable running shoes for everyday performance.",
  },
  {
    id: 103,
    name: "Wireless Headphones Pro",
    category: "Audio",
    price: 8999,
    oldPrice: 10999,
    rating: 4.7,
    reviews: 28,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    badge: "Just In",
    description:
      "Enjoy immersive sound with premium wireless headphones.",
  },
  {
    id: 104,
    name: "Smart Laptop X15",
    category: "Electronics",
    price: 119999,
    oldPrice: 129999,
    rating: 4.9,
    reviews: 51,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",
    badge: "New",
    description:
      "Powerful laptop designed for work, coding, editing and entertainment.",
  },
  {
    id: 105,
    name: "Modern Backpack",
    category: "Bags",
    price: 3499,
    oldPrice: 4499,
    rating: 4.6,
    reviews: 19,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    badge: "New",
    description:
      "A stylish and durable backpack for travel, school and work.",
  },
  {
    id: 106,
    name: "Smart Watch Series 5",
    category: "Wearables",
    price: 15999,
    oldPrice: 18999,
    rating: 4.8,
    reviews: 44,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    badge: "Trending",
    description:
      "Track your fitness and stay connected with a modern smartwatch.",
  },
  {
    id: 107,
    name: "Digital Camera 4K",
    category: "Cameras",
    price: 89999,
    oldPrice: 99999,
    rating: 4.8,
    reviews: 23,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80",
    badge: "New",
    description:
      "Capture high-quality photos and videos with advanced 4K technology.",
  },
  {
    id: 108,
    name: "Gaming Controller",
    category: "Gaming",
    price: 5999,
    oldPrice: 6999,
    rating: 4.7,
    reviews: 31,
    image:
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=700&q=80",
    badge: "Just In",
    description:
      "Take your gaming experience to the next level with a responsive controller.",
  },
];

/* =========================================================
   FORMAT PRICE
========================================================= */

const formatPrice = (price) => {
  return `Rs. ${price.toLocaleString("en-IN")}`;
};

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
    ((product.oldPrice - product.price) /
      product.oldPrice) *
      100
  );

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
      {/* =================================================
          IMAGE
      ================================================= */}

      <div className="relative overflow-hidden bg-slate-100">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
            loading="lazy"
          />
        </Link>

        {/* BADGE */}

        <span className="absolute left-3 top-3 rounded-full bg-emerald-600 px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-white shadow-lg">
          {product.badge}
        </span>

        {/* DISCOUNT */}

        {discount > 0 && (
          <span className="absolute right-3 top-3 rounded-full bg-rose-500 px-2.5 py-1.5 text-[10px] font-black text-white">
            -{discount}%
          </span>
        )}

        {/* WISHLIST */}

        <button
          type="button"
          onClick={() => onWishlist(product)}
          aria-label={
            isWishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          className={`absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition ${
            isWishlisted
              ? "text-rose-500"
              : "text-slate-500 hover:text-rose-500"
          }`}
        >
          <FaHeart
            className={
              isWishlisted ? "scale-110" : ""
            }
          />
        </button>

        {/* QUICK VIEW */}

        <Link
          to={`/products/${product.id}`}
          className="absolute bottom-3 left-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-slate-600 opacity-0 shadow-lg transition duration-300 hover:text-emerald-600 group-hover:translate-y-0 group-hover:opacity-100"
          aria-label={`View ${product.name}`}
        >
          <FaEye />
        </Link>
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="p-4 sm:p-5">
        {/* CATEGORY */}

        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-emerald-600">
          {product.category}
        </p>

        {/* NAME */}

        <Link to={`/products/${product.id}`}>
          <h3 className="mt-1 line-clamp-1 text-base font-black text-slate-900 transition hover:text-emerald-600">
            {product.name}
          </h3>
        </Link>

        {/* DESCRIPTION */}

        <p className="mt-2 line-clamp-2 min-h-[40px] text-xs leading-5 text-slate-500">
          {product.description}
        </p>

        {/* RATING */}

        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1 text-amber-400">
            <FaStar className="text-xs" />
            <span className="text-xs font-black text-slate-700">
              {product.rating}
            </span>
          </div>

          <span className="text-xs text-slate-400">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* PRICE */}

        <div className="mt-4 flex items-end gap-2">
          <span className="text-lg font-black text-slate-950">
            {formatPrice(product.price)}
          </span>

          <span className="pb-0.5 text-xs font-medium text-slate-400 line-through">
            {formatPrice(product.oldPrice)}
          </span>
        </div>

        {/* ADD TO CART */}

        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-xs font-black text-white transition hover:bg-emerald-600"
        >
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </article>
  );
};

/* =========================================================
   NEW ARRIVALS PAGE
========================================================= */

const NewArrivals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  /* =======================================================
     CATEGORY LIST
  ======================================================= */

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(newProducts.map((product) => product.category)),
    ];
  }, []);

  /* =======================================================
     LOAD WISHLIST
  ======================================================= */

  useMemo(() => {
    try {
      const savedWishlist =
        localStorage.getItem(WISHLIST_KEY);

      if (savedWishlist) {
        const parsed = JSON.parse(savedWishlist);

        if (Array.isArray(parsed)) {
          setWishlist(parsed);
        }
      }
    } catch (error) {
      console.error(
        "Unable to load wishlist:",
        error
      );
    }
  }, []);

  /* =======================================================
     WISHLIST
  ======================================================= */

  const handleWishlist = (product) => {
    setWishlist((previous) => {
      const exists = previous.some(
        (item) => item.id === product.id
      );

      const updated = exists
        ? previous.filter(
            (item) => item.id !== product.id
          )
        : [...previous, product];

      try {
        localStorage.setItem(
          WISHLIST_KEY,
          JSON.stringify(updated)
        );

        window.dispatchEvent(
          new Event("wishlistUpdated")
        );
      } catch (error) {
        console.error(
          "Unable to save wishlist:",
          error
        );
      }

      return updated;
    });
  };

  /* =======================================================
     ADD TO CART
  ======================================================= */

  const handleAddToCart = (product) => {
    try {
      const savedCart =
        localStorage.getItem(CART_KEY);

      let cart = [];

      if (savedCart) {
        const parsed = JSON.parse(savedCart);

        if (Array.isArray(parsed)) {
          cart = parsed;
        }
      }

      const existingIndex = cart.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex !== -1) {
        cart[existingIndex].quantity =
          (Number(
            cart[existingIndex].quantity
          ) || 1) + 1;
      } else {
        cart.push({
          ...product,
          quantity: 1,
        });
      }

      localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
      );

      window.dispatchEvent(
        new Event("cartUpdated")
      );
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
    let result = [...newProducts];

    const search = searchTerm
      .trim()
      .toLowerCase();

    if (search) {
      result = result.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(search) ||
          product.category
            .toLowerCase()
            .includes(search) ||
          product.description
            .toLowerCase()
            .includes(search)
      );
    }

    if (category !== "All") {
      result = result.filter(
        (product) =>
          product.category === category
      );
    }

    if (sortBy === "price-low") {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sortBy === "price-high") {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sortBy === "rating") {
      result.sort(
        (a, b) => b.rating - a.rating
      );
    }

    if (sortBy === "name") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [searchTerm, category, sortBy]);

  /* =======================================================
     CLEAR FILTERS
  ======================================================= */

  const clearFilters = () => {
    setSearchTerm("");
    setCategory("All");
    setSortBy("newest");
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative overflow-hidden bg-slate-950">
        {/* DECORATION */}

        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            {/* LABEL */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-emerald-300">
              <FaBolt />
              Freshly Added
            </div>

            {/* TITLE */}

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              New{" "}
              <span className="text-emerald-400">
                Arrivals
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Discover the latest products added to
              SHOP ZONE. Find fresh styles, new
              technology and exciting products.
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
                  placeholder="Search new arrivals..."
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white pl-13 pr-5 text-sm font-medium text-slate-800 outline-none shadow-xl transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20 sm:text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          FEATURE STRIP
      =================================================== */}

      <section className="relative z-10 mx-auto -mt-7 max-w-6xl px-4 sm:px-6">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 sm:grid-cols-3">
          <div className="flex items-center gap-4 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <FaBolt />
            </div>

            <div>
              <p className="text-sm font-black text-slate-900">
                Fresh Products
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Recently added items
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FaTag />
            </div>

            <div>
              <p className="text-sm font-black text-slate-900">
                Special Prices
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Great introductory offers
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <FaStar />
            </div>

            <div>
              <p className="text-sm font-black text-slate-900">
                Quality Products
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Rated by our customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          PRODUCTS SECTION
      =================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-600">
              Latest Products
            </p>

            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Explore New Arrivals
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Showing{" "}
              <span className="font-bold text-slate-700">
                {filteredProducts.length}
              </span>{" "}
              new products
            </p>
          </div>

          {/* MOBILE FILTER BUTTON */}

          <button
            type="button"
            onClick={() =>
              setShowFilters(!showFilters)
            }
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm lg:hidden"
          >
            <FaFilter />
            Filters & Sort
            <FaChevronDown
              className={`text-xs transition-transform ${
                showFilters
                  ? "rotate-180"
                  : ""
              }`}
            />
          </button>
        </div>

        {/* =================================================
            FILTER BAR
        ================================================= */}

        <div
          className={`mt-7 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ${
            showFilters ? "block" : "hidden lg:block"
          }`}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* CATEGORIES */}

            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    setCategory(item)
                  }
                  className={`rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                    category === item
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                      : "bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* SORT */}

            <div className="relative min-w-[190px]">
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
                className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 pr-10 text-sm font-bold text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
              >
                <option value="newest">
                  Newest First
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
                <option value="name">
                  Name: A-Z
                </option>
              </select>

              <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
            </div>
          </div>
        </div>

        {/* =================================================
            ACTIVE SEARCH
        ================================================= */}

        {(searchTerm || category !== "All") && (
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500">
              Active filters:
            </span>

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700"
              >
                Search: "{searchTerm}"
                <FaTimes className="text-[9px]" />
              </button>
            )}

            {category !== "All" && (
              <button
                type="button"
                onClick={() => setCategory("All")}
                className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700"
              >
                {category}
                <FaTimes className="text-[9px]" />
              </button>
            )}

            <button
              type="button"
              onClick={clearFilters}
              className="text-xs font-bold text-rose-500 hover:text-rose-600"
            >
              Clear All
            </button>
          </div>
        )}

        {/* =================================================
            PRODUCT GRID
        ================================================= */}

        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.some(
                  (item) =>
                    item.id === product.id
                )}
                onWishlist={handleWishlist}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          /* =================================================
             EMPTY STATE
          ================================================= */

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <FaSearch className="text-xl" />
            </div>

            <h3 className="mt-5 text-xl font-black text-slate-900">
              No new arrivals found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              We couldn't find any products matching
              your current search or filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-black text-white transition hover:bg-emerald-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* ===================================================
          CTA
      =================================================== */}

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-slate-950">
            <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16">
              <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl" />

              <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <FaCheck />
                </div>

                <h2 className="mt-5 text-2xl font-black text-white sm:text-3xl">
                  Don't miss what's new
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  Explore our complete product collection
                  and discover more products for your
                  everyday needs.
                </p>

                <Link
                  to="/products"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500"
                >
                  View All Products
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewArrivals;
