
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
  FaTrash,
  FaArrowRight,
  FaStar,
  FaShoppingBag,
  FaSearch,
  FaTimes,
  FaCheck,
  FaExclamationTriangle,
} from "react-icons/fa";

/* =========================================================
   STORAGE KEYS
========================================================= */

const WISHLIST_KEY = "shop_zone_wishlist";
const CART_KEY = "shop_zone_cart";

/* =========================================================
   HELPERS
========================================================= */

const formatPrice = (price) => {
  const number = Number(price) || 0;

  return `Rs. ${number.toLocaleString("en-IN")}`;
};

const getProductId = (product) => {
  return product?.id ?? product?._id ?? product?.productId;
};

/* =========================================================
   WISHLIST PAGE
========================================================= */

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  /* =======================================================
     LOAD WISHLIST
  ======================================================= */

  const loadWishlist = () => {
    try {
      const savedWishlist =
        localStorage.getItem(WISHLIST_KEY);

      if (!savedWishlist) {
        setWishlist([]);
        return;
      }

      const parsedWishlist =
        JSON.parse(savedWishlist);

      if (Array.isArray(parsedWishlist)) {
        setWishlist(parsedWishlist);
      } else {
        setWishlist([]);
      }
    } catch (error) {
      console.error(
        "Unable to load wishlist:",
        error
      );

      setWishlist([]);
    }
  };

  /* =======================================================
     INITIAL LOAD
  ======================================================= */

  useEffect(() => {
    loadWishlist();

    window.addEventListener(
      "wishlistUpdated",
      loadWishlist
    );

    window.addEventListener(
      "storage",
      loadWishlist
    );

    return () => {
      window.removeEventListener(
        "wishlistUpdated",
        loadWishlist
      );

      window.removeEventListener(
        "storage",
        loadWishlist
      );
    };
  }, []);

  /* =======================================================
     SAVE WISHLIST
  ======================================================= */

  const saveWishlist = (items) => {
    try {
      localStorage.setItem(
        WISHLIST_KEY,
        JSON.stringify(items)
      );

      setWishlist(items);

      window.dispatchEvent(
        new Event("wishlistUpdated")
      );
    } catch (error) {
      console.error(
        "Unable to save wishlist:",
        error
      );
    }
  };

  /* =======================================================
     SHOW MESSAGE
  ======================================================= */

  const showMessage = (
    text,
    type = "success"
  ) => {
    setMessage(text);
    setMessageType(type);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  /* =======================================================
     REMOVE FROM WISHLIST
  ======================================================= */

  const removeFromWishlist = (product) => {
    const productId = getProductId(product);

    const updatedWishlist = wishlist.filter(
      (item) =>
        getProductId(item) !== productId
    );

    saveWishlist(updatedWishlist);

    showMessage(
      "Product removed from wishlist."
    );
  };

  /* =======================================================
     CLEAR WISHLIST
  ======================================================= */

  const clearWishlist = () => {
    if (wishlist.length === 0) {
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to remove all wishlist items?"
    );

    if (!confirmed) {
      return;
    }

    saveWishlist([]);

    showMessage(
      "Wishlist cleared successfully."
    );
  };

  /* =======================================================
     ADD TO CART
  ======================================================= */

  const addToCart = (product) => {
    try {
      const savedCart =
        localStorage.getItem(CART_KEY);

      let cart = [];

      if (savedCart) {
        const parsedCart =
          JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          cart = parsedCart;
        }
      }

      const productId = getProductId(product);

      const existingIndex = cart.findIndex(
        (item) =>
          getProductId(item) === productId
      );

      if (existingIndex !== -1) {
        cart[existingIndex] = {
          ...cart[existingIndex],
          quantity:
            (Number(
              cart[existingIndex].quantity
            ) || 1) + 1,
        };
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

      showMessage(
        `${product.name || "Product"} added to cart.`
      );
    } catch (error) {
      console.error(
        "Unable to add product to cart:",
        error
      );

      showMessage(
        "Unable to add product to cart.",
        "error"
      );
    }
  };

  /* =======================================================
     MOVE ALL TO CART
  ======================================================= */

  const moveAllToCart = () => {
    if (wishlist.length === 0) {
      return;
    }

    try {
      const savedCart =
        localStorage.getItem(CART_KEY);

      let cart = [];

      if (savedCart) {
        const parsedCart =
          JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          cart = parsedCart;
        }
      }

      wishlist.forEach((product) => {
        const productId =
          getProductId(product);

        const existingIndex =
          cart.findIndex(
            (item) =>
              getProductId(item) ===
              productId
          );

        if (existingIndex !== -1) {
          cart[existingIndex] = {
            ...cart[existingIndex],
            quantity:
              (Number(
                cart[existingIndex].quantity
              ) || 1) + 1,
          };
        } else {
          cart.push({
            ...product,
            quantity: 1,
          });
        }
      });

      localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
      );

      window.dispatchEvent(
        new Event("cartUpdated")
      );

      showMessage(
        "All wishlist products added to cart."
      );
    } catch (error) {
      console.error(
        "Unable to move wishlist to cart:",
        error
      );

      showMessage(
        "Unable to add wishlist products.",
        "error"
      );
    }
  };

  /* =======================================================
     SEARCH FILTER
  ======================================================= */

  const filteredWishlist = useMemo(() => {
    const search =
      searchTerm.trim().toLowerCase();

    if (!search) {
      return wishlist;
    }

    return wishlist.filter((product) => {
      const name =
        product?.name
          ?.toString()
          .toLowerCase() || "";

      const category =
        product?.category
          ?.toString()
          .toLowerCase() || "";

      return (
        name.includes(search) ||
        category.includes(search)
      );
    });
  }, [wishlist, searchTerm]);

  /* =======================================================
     EMPTY WISHLIST
  ======================================================= */

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50">
        {/* PAGE HEADER */}

        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-rose-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-rose-300">
                <FaHeart />
                Your Favorites
              </div>

              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                My Wishlist
              </h1>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Save the products you love and
                easily come back to them whenever
                you're ready to shop.
              </p>
            </div>
          </div>
        </section>

        {/* EMPTY STATE */}

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-rose-50 text-rose-400 shadow-inner">
              <FaRegHeart className="text-4xl" />
            </div>

            <h2 className="mt-7 text-2xl font-black text-slate-900 sm:text-3xl">
              Your wishlist is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
              You haven't saved any products yet.
              Explore our collection and add your
              favorite products to your wishlist.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 hover:shadow-xl"
              >
                <FaShoppingBag />
                Browse Products
                <FaArrowRight className="text-xs" />
              </Link>

              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  /* =======================================================
     MAIN PAGE
  ======================================================= */

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-rose-300">
                <FaHeart />
                Saved Items
              </div>

              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                My Wishlist
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                Keep your favorite products in one
                place and shop them whenever you're
                ready.
              </p>
            </div>

            {/* TOTAL */}

            <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400">
                <FaHeart />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400">
                  Saved Products
                </p>

                <p className="text-xl font-black text-white">
                  {wishlist.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          MAIN CONTENT
      =================================================== */}

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* MESSAGE */}

        {message && (
          <div
            className={`mb-6 flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold ${
              messageType === "error"
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-emerald-200 bg-emerald-50 text-emerald-700"
            }`}
          >
            {messageType === "error" ? (
              <FaExclamationTriangle />
            ) : (
              <FaCheck />
            )}

            <span>{message}</span>
          </div>
        )}

        {/* =================================================
            TOOLBAR
        ================================================= */}

        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* SEARCH */}

            <div className="relative w-full lg:max-w-md">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
                placeholder="Search your wishlist..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-11 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
              />

              {searchTerm && (
                <button
                  type="button"
                  onClick={() =>
                    setSearchTerm("")
                  }
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Clear search"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* ACTIONS */}

            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={moveAllToCart}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700"
              >
                <FaShoppingCart />
                Add All to Cart
              </button>

              <button
                type="button"
                onClick={clearWishlist}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-600 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
              >
                <FaTrash />
                Clear Wishlist
              </button>
            </div>
          </div>

          {/* SEARCH RESULT COUNT */}

          <div className="mt-4 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
            Showing{" "}
            <span className="text-slate-900">
              {filteredWishlist.length}
            </span>{" "}
            of{" "}
            <span className="text-slate-900">
              {wishlist.length}
            </span>{" "}
            saved products
          </div>
        </div>

        {/* =================================================
            NO SEARCH RESULT
        ================================================= */}

        {filteredWishlist.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <FaSearch className="text-2xl" />
            </div>

            <h2 className="mt-5 text-xl font-black text-slate-900">
              No products found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Try searching with a different
              product name or category.
            </p>

            <button
              type="button"
              onClick={() =>
                setSearchTerm("")
              }
              className="mt-6 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-600"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* =================================================
            PRODUCT GRID
        ================================================= */}

        {filteredWishlist.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredWishlist.map(
              (product, index) => {
                const productId =
                  getProductId(product);

                const productImage =
                  product?.image ||
                  product?.img ||
                  product?.thumbnail ||
                  "https://placehold.co/600x600?text=Product";

                const rating =
                  Number(product?.rating) || 0;

                const reviews =
                  Number(product?.reviews) || 0;

                const originalPrice =
                  Number(
                    product?.originalPrice
                  ) || 0;

                const currentPrice =
                  Number(product?.price) || 0;

                const discount =
                  originalPrice > currentPrice &&
                  originalPrice > 0
                    ? Math.round(
                        ((originalPrice -
                          currentPrice) /
                          originalPrice) *
                          100
                      )
                    : 0;

                return (
                  <article
                    key={
                      productId ??
                      `wishlist-${index}`
                    }
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* IMAGE */}

                    <div className="relative aspect-square overflow-hidden bg-slate-100">
                      <img
                        src={productImage}
                        alt={
                          product?.name ||
                          "Product"
                        }
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://placehold.co/600x600?text=Product";
                        }}
                      />

                      {/* DISCOUNT */}

                      {discount > 0 && (
                        <span className="absolute left-3 top-3 rounded-lg bg-rose-500 px-2.5 py-1.5 text-[10px] font-black text-white shadow-md">
                          -{discount}%
                        </span>
                      )}

                      {/* REMOVE */}

                      <button
                        type="button"
                        onClick={() =>
                          removeFromWishlist(
                            product
                          )
                        }
                        className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-rose-500 shadow-md backdrop-blur transition hover:bg-rose-500 hover:text-white"
                        aria-label={`Remove ${
                          product?.name ||
                          "product"
                        } from wishlist`}
                      >
                        <FaHeart />
                      </button>

                      {/* CATEGORY */}

                      {product?.category && (
                        <span className="absolute bottom-3 left-3 rounded-lg bg-slate-950/80 px-2.5 py-1.5 text-[10px] font-bold text-white backdrop-blur">
                          {product.category}
                        </span>
                      )}
                    </div>

                    {/* CONTENT */}

                    <div className="p-4 sm:p-5">
                      {/* NAME */}

                      <Link
                        to={
                          productId
                            ? `/products/${productId}`
                            : "/products"
                        }
                        className="block"
                      >
                        <h2 className="line-clamp-2 min-h-[48px] text-base font-black leading-6 text-slate-900 transition group-hover:text-emerald-600">
                          {product?.name ||
                            "Unnamed Product"}
                        </h2>
                      </Link>

                      {/* RATING */}

                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex items-center gap-1 text-amber-500">
                          <FaStar className="text-xs" />

                          <span className="text-xs font-black">
                            {rating
                              ? rating.toFixed(
                                  1
                                )
                              : "New"}
                          </span>
                        </div>

                        {reviews > 0 && (
                          <span className="text-xs text-slate-400">
                            ({reviews} reviews)
                          </span>
                        )}
                      </div>

                      {/* PRICE */}

                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="text-lg font-black text-emerald-600">
                          {formatPrice(
                            currentPrice
                          )}
                        </span>

                        {originalPrice >
                          currentPrice && (
                          <span className="text-xs font-semibold text-slate-400 line-through">
                            {formatPrice(
                              originalPrice
                            )}
                          </span>
                        )}
                      </div>

                      {/* ACTIONS */}

                      <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            addToCart(product)
                          }
                          className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3 py-3 text-xs font-black text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 sm:text-sm"
                        >
                          <FaShoppingCart />
                          Add to Cart
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            removeFromWishlist(
                              product
                            )
                          }
                          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500"
                          aria-label="Remove product"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              }
            )}
          </div>
        )}

        {/* =================================================
            SHOP MORE
        ================================================= */}

        {wishlist.length > 0 && (
          <div className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-700">
                  <FaShoppingBag />
                  <span className="text-xs font-black uppercase tracking-wider">
                    Keep Shopping
                  </span>
                </div>

                <h3 className="mt-2 text-xl font-black text-slate-900">
                  Discover more products
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  Find something new to add to
                  your collection.
                </p>
              </div>

              <Link
                to="/products"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-600"
              >
                Browse Products
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Wishlist;
