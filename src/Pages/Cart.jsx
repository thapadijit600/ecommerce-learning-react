
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaTrash,
  FaMinus,
  FaPlus,
  FaArrowRight,
  FaShieldAlt,
  FaTruck,
  FaUndo,
  FaLock,
  FaStore,
  FaArrowLeft,
  FaTag,
  FaCheckCircle,
} from "react-icons/fa";

const CART_KEY = "shop_zone_cart";

/* =========================================================
   CART PAGE
========================================================= */

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  /* =======================================================
     LOAD CART
  ======================================================= */

  const loadCart = () => {
    try {
      const savedCart = localStorage.getItem(CART_KEY);

      if (!savedCart) {
        setCartItems([]);
        return;
      }

      const parsedCart = JSON.parse(savedCart);

      if (Array.isArray(parsedCart)) {
        setCartItems(parsedCart);
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("Unable to load cart:", error);
      setCartItems([]);
    }
  };

  /* =======================================================
     INITIAL LOAD + CART UPDATE LISTENER
  ======================================================= */

  useEffect(() => {
    loadCart();
    setIsLoaded(true);

    /*
      Product.jsx dispatches this event whenever
      a product is added to the cart.
    */
    const handleCartUpdate = () => {
      loadCart();
    };

    window.addEventListener(
      "cartUpdated",
      handleCartUpdate
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        handleCartUpdate
      );
    };
  }, []);

  /* =======================================================
     SAVE CART
  ======================================================= */

  const saveCart = (updatedCart) => {
    try {
      localStorage.setItem(
        CART_KEY,
        JSON.stringify(updatedCart)
      );

      /*
        Tell Navbar and other components
        that the cart changed.
      */
      window.dispatchEvent(
        new Event("cartUpdated")
      );
    } catch (error) {
      console.error("Unable to save cart:", error);
    }
  };

  /* =======================================================
     UPDATE QUANTITY
  ======================================================= */

  const updateQuantity = (id, change) => {
    setCartItems((previousItems) => {
      const updatedItems = previousItems.map((item) => {
        if (Number(item.id) !== Number(id)) {
          return item;
        }

        const currentQuantity =
          Number(item.quantity) || 1;

        /*
          Respect product stock.
          If stock doesn't exist, allow up to 999.
        */
        const maxStock =
          Number(item.stock) || 999;

        const newQuantity = Math.min(
          maxStock,
          Math.max(
            1,
            currentQuantity + change
          )
        );

        return {
          ...item,
          quantity: newQuantity,
        };
      });

      saveCart(updatedItems);

      return updatedItems;
    });
  };

  /* =======================================================
     REMOVE ITEM
  ======================================================= */

  const removeItem = (id) => {
    setCartItems((previousItems) => {
      const updatedItems = previousItems.filter(
        (item) =>
          Number(item.id) !== Number(id)
      );

      saveCart(updatedItems);

      return updatedItems;
    });
  };

  /* =======================================================
     CLEAR CART
  ======================================================= */

  const clearCart = () => {
    const confirmed = window.confirm(
      "Are you sure you want to remove all products from your cart?"
    );

    if (!confirmed) return;

    setCartItems([]);

    localStorage.removeItem(CART_KEY);

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  /* =======================================================
     TOTAL ITEMS
     
     Example:
     Product A × 2
     Product B × 1
     
     Total = 3
  ======================================================= */

  const totalItems = useMemo(() => {
    return cartItems.reduce(
      (total, item) =>
        total +
        (Number(item.quantity) || 1),
      0
    );
  }, [cartItems]);

  /* =======================================================
     SUBTOTAL
  ======================================================= */

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => {
        const price =
          Number(item.price) || 0;

        const quantity =
          Number(item.quantity) || 1;

        return (
          total +
          price * quantity
        );
      },
      0
    );
  }, [cartItems]);

  /* =======================================================
     DELIVERY
  ======================================================= */

  const deliveryCharge =
    subtotal === 0
      ? 0
      : subtotal >= 5000
      ? 0
      : 150;

  /* =======================================================
     TOTAL
  ======================================================= */

  const total =
    subtotal + deliveryCharge;

  /* =======================================================
     FREE DELIVERY
  ======================================================= */

  const amountForFreeDelivery =
    Math.max(
      0,
      5000 - subtotal
    );

  const deliveryProgress = Math.min(
    (subtotal / 5000) * 100,
    100
  );

  /* =======================================================
     FORMAT PRICE
  ======================================================= */

  const formatPrice = (price) => {
    return `Rs. ${Number(
      price || 0
    ).toLocaleString()}`;
  };

  /* =======================================================
     LOADING
  ======================================================= */

  if (!isLoaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">

          <div className="mx-auto flex h-14 w-14 animate-pulse items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
            <FaShoppingCart className="text-2xl" />
          </div>

          <p className="mt-4 text-sm font-semibold text-slate-500">
            Loading your cart...
          </p>

        </div>
      </main>
    );
  }

  /* =======================================================
     EMPTY CART
  ======================================================= */

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50">

        {/* ===============================================
            CART HEADER
        =============================================== */}

        <section className="border-b border-slate-200 bg-white">

          <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                  <FaShoppingCart />
                  Shopping Cart
                </div>

                <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  Your Cart
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                  Your cart is currently empty
                </p>

              </div>

              {/* CART LOGO */}

              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700">

                <FaShoppingCart className="text-2xl" />

                {/* Notification */}

                <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-emerald-600 px-1.5 text-[11px] font-black text-white shadow-lg ring-4 ring-white">
                  0
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* ===============================================
            EMPTY CONTENT
        =============================================== */}

        <section className="mx-auto flex min-h-[calc(100vh-250px)] max-w-7xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">

          <div className="w-full max-w-xl text-center">

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600 shadow-sm">

              <FaShoppingCart className="text-4xl" />

            </div>

            <h1 className="mt-7 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Your cart is empty
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
              Looks like you haven't added anything
              to your cart yet. Explore our products
              and find something you love.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:shadow-xl active:scale-95"
            >
              <FaStore />

              Start Shopping

              <FaArrowRight className="text-xs" />
            </Link>

            {/* Trust cards */}

            <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-3">

              <div className="rounded-2xl border border-slate-200 bg-white p-4">

                <FaTruck className="mx-auto text-emerald-600" />

                <p className="mt-2 text-xs font-bold text-slate-800">
                  Fast Delivery
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">

                <FaShieldAlt className="mx-auto text-blue-600" />

                <p className="mt-2 text-xs font-bold text-slate-800">
                  Secure Payment
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">

                <FaUndo className="mx-auto text-amber-600" />

                <p className="mt-2 text-xs font-bold text-slate-800">
                  Easy Returns
                </p>

              </div>

            </div>

          </div>

        </section>

      </div>
    );
  }

  /* =======================================================
     MAIN CART
  ======================================================= */

  return (
    <div className="min-h-screen bg-slate-50">

      {/* =================================================
          PAGE HEADER
      ================================================== */}

      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* TITLE */}

            <div>

              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">

                <FaShoppingCart />

                Shopping Cart

              </div>

              <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Your Cart
              </h1>

              <p className="mt-2 text-sm text-slate-500">

                {totalItems}{" "}

                {totalItems === 1
                  ? "item"
                  : "items"}{" "}

                in your cart

              </p>

            </div>

            {/* ===========================================
                CART LOGO + NOTIFICATION
            =========================================== */}

            <Link
              to="/cart"
              aria-label={`Shopping cart with ${totalItems} items`}
              className="group relative flex h-16 w-16 items-center justify-center self-start rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 sm:self-auto"
            >

              <FaShoppingCart className="text-2xl transition-transform group-hover:scale-110" />

              {/* =========================================
                  LIVE NUMBER NOTIFICATION
              ========================================= */}

              <span
                className={`absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-[11px] font-black text-white shadow-lg ring-4 ring-white ${
                  totalItems > 0
                    ? "bg-emerald-600"
                    : "bg-slate-400"
                }`}
              >
                {totalItems > 99
                  ? "99+"
                  : totalItems}
              </span>

            </Link>

          </div>

        </div>

      </section>

      {/* =================================================
          MAIN CONTENT
      ================================================== */}

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_400px]">

          {/* =================================================
              LEFT - PRODUCTS
          ================================================= */}

          <section>

            {/* Toolbar */}

            <div className="mb-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5">

              <div>

                <p className="text-sm font-bold text-slate-900">
                  Cart Items
                </p>

                <p className="mt-0.5 text-xs text-slate-500">

                  {totalItems}{" "}

                  {totalItems === 1
                    ? "product"
                    : "products"}{" "}
                  selected

                </p>

              </div>

              <button
                type="button"
                onClick={clearCart}
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold text-rose-500 transition hover:bg-rose-50 hover:text-rose-600"
              >

                <FaTrash className="text-[10px]" />

                Clear Cart

              </button>

            </div>

            {/* Products */}

            <div className="space-y-4">

              {cartItems.map((item) => {

                const quantity =
                  Number(item.quantity) || 1;

                const maxStock =
                  Number(item.stock) || 999;

                const itemTotal =
                  (Number(item.price) || 0) *
                  quantity;

                return (
                  <article
                    key={item.id}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                  >

                    <div className="p-4 sm:p-5">

                      <div className="flex gap-4 sm:gap-5">

                        {/* IMAGE */}

                        <Link
                          to={`/products/${item.id}`}
                          className="group h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-32 sm:w-32"
                        >

                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                          />

                        </Link>

                        {/* PRODUCT INFO */}

                        <div className="min-w-0 flex-1">

                          <div className="flex items-start justify-between gap-3">

                            <div className="min-w-0">

                              {item.category && (
                                <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                                  {item.category}
                                </p>
                              )}

                              <Link
                                to={`/products/${item.id}`}
                                className="line-clamp-2 text-sm font-bold text-slate-900 transition hover:text-emerald-600 sm:text-base"
                              >
                                {item.name}
                              </Link>

                              {item.rating && (
                                <div className="mt-2 flex items-center gap-1">

                                  <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">
                                    ★ {item.rating}
                                  </span>

                                  {item.reviews && (
                                    <span className="text-[10px] text-slate-400">
                                      ({item.reviews})
                                    </span>
                                  )}

                                </div>
                              )}

                            </div>

                            {/* DESKTOP REMOVE */}

                            <button
                              type="button"
                              onClick={() =>
                                removeItem(item.id)
                              }
                              aria-label={`Remove ${item.name}`}
                              className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-rose-50 hover:text-rose-500 sm:flex"
                            >
                              <FaTrash className="text-xs" />
                            </button>

                          </div>

                          {/* PRICE + QUANTITY */}

                          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

                            <div>

                              <p className="text-lg font-black text-slate-900">
                                {formatPrice(item.price)}
                              </p>

                              {item.oldPrice &&
                                Number(item.oldPrice) >
                                  Number(item.price) && (
                                  <p className="mt-0.5 text-xs text-slate-400 line-through">
                                    {formatPrice(
                                      item.oldPrice
                                    )}
                                  </p>
                                )}

                            </div>

                            <div className="flex items-center justify-between gap-4 sm:justify-end">

                              {/* QUANTITY */}

                              <div>

                                <div className="flex items-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50">

                                  <button
                                    type="button"
                                    onClick={() =>
                                      updateQuantity(
                                        item.id,
                                        -1
                                      )
                                    }
                                    disabled={
                                      quantity <= 1
                                    }
                                    aria-label="Decrease quantity"
                                    className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-white hover:text-emerald-600 disabled:cursor-not-allowed disabled:opacity-40"
                                  >
                                    <FaMinus className="text-[10px]" />
                                  </button>

                                  <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 bg-white px-2 text-sm font-bold text-slate-800">
                                    {quantity}
                                  </span>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      updateQuantity(
                                        item.id,
                                        1
                                      )
                                    }
                                    disabled={
                                      quantity >=
                                      maxStock
                                    }
                                    aria-label="Increase quantity"
                                    className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-white hover:text-emerald-600 disabled:cursor-not-allowed disabled:opacity-40"
                                  >
                                    <FaPlus className="text-[10px]" />
                                  </button>

                                </div>

                                {item.stock && (
                                  <p className="mt-1 text-[9px] text-slate-400">

                                    {quantity >=
                                    maxStock
                                      ? "Maximum stock"
                                      : `${maxStock - quantity} available`}

                                  </p>
                                )}

                              </div>

                              {/* ITEM TOTAL */}

                              <div className="text-right">

                                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                                  Total
                                </p>

                                <p className="mt-0.5 text-base font-extrabold text-slate-900">
                                  {formatPrice(
                                    itemTotal
                                  )}
                                </p>

                              </div>

                            </div>

                          </div>

                          {/* MOBILE REMOVE */}

                          <button
                            type="button"
                            onClick={() =>
                              removeItem(item.id)
                            }
                            className="mt-3 flex items-center gap-1.5 text-xs font-bold text-rose-500 sm:hidden"
                          >

                            <FaTrash className="text-[10px]" />

                            Remove

                          </button>

                        </div>

                      </div>

                    </div>

                  </article>
                );
              })}

            </div>

            {/* FREE DELIVERY */}

            <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 sm:p-5">

              {deliveryCharge === 0 ? (

                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <FaCheckCircle className="text-sm" />
                  </div>

                  <div>

                    <p className="text-sm font-bold text-emerald-800">
                      You've unlocked FREE delivery!
                    </p>

                    <p className="mt-1 text-xs text-emerald-700/80">
                      Your order qualifies for free delivery.
                    </p>

                  </div>

                </div>

              ) : (

                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm">
                    <FaTruck />
                  </div>

                  <div className="flex-1">

                    <p className="text-sm font-bold text-emerald-800">

                      You're Rs.{" "}

                      {amountForFreeDelivery.toLocaleString()}{" "}

                      away from FREE delivery

                    </p>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-emerald-100">

                      <div
                        className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                        style={{
                          width: `${deliveryProgress}%`,
                        }}
                      />

                    </div>

                  </div>

                </div>

              )}

            </div>

          </section>

          {/* =================================================
              RIGHT - ORDER SUMMARY
          ================================================= */}

          <aside className="lg:sticky lg:top-24 lg:self-start">

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              {/* HEADER */}

              <div className="border-b border-slate-100 px-5 py-5">

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <h2 className="text-lg font-extrabold text-slate-900">
                      Order Summary
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                      Review your order before checkout
                    </p>

                  </div>

                  {/* SUMMARY CART BADGE */}

                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">

                    <FaShoppingCart />

                    <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-600 px-1 text-[9px] font-black text-white ring-2 ring-white">
                      {totalItems > 99
                        ? "99+"
                        : totalItems}
                    </span>

                  </div>

                </div>

              </div>

              {/* SUMMARY */}

              <div className="space-y-4 px-5 py-5">

                <div className="flex items-center justify-between text-sm">

                  <span className="text-slate-500">
                    Subtotal ({totalItems}{" "}
                    {totalItems === 1
                      ? "item"
                      : "items"})
                  </span>

                  <span className="font-bold text-slate-900">
                    {formatPrice(subtotal)}
                  </span>

                </div>

                <div className="flex items-center justify-between text-sm">

                  <span className="text-slate-500">
                    Delivery
                  </span>

                  {deliveryCharge === 0 ? (

                    <span className="font-bold text-emerald-600">
                      FREE
                    </span>

                  ) : (

                    <span className="font-bold text-slate-900">
                      {formatPrice(
                        deliveryCharge
                      )}
                    </span>

                  )}

                </div>

                <div className="border-t border-dashed border-slate-200" />

                <div className="flex items-center justify-between">

                  <span className="text-base font-extrabold text-slate-900">
                    Total
                  </span>

                  <span className="text-xl font-black text-emerald-600">
                    {formatPrice(total)}
                  </span>

                </div>

                {/* CHECKOUT */}

                <Link
                  to="/checkout"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:shadow-xl active:scale-[0.98]"
                >

                  Proceed to Checkout

                  <FaArrowRight className="text-xs" />

                </Link>

                <div className="flex items-center justify-center gap-2 text-center text-[10px] text-slate-400">

                  <FaLock className="text-emerald-500" />

                  Secure checkout

                </div>

              </div>

              {/* PROMO */}

              <div className="border-t border-slate-100 bg-slate-50 px-5 py-5">

                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                    <FaTag />
                  </div>

                  <div>

                    <p className="text-xs font-bold text-slate-800">
                      Have a promo code?
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-slate-500">
                      Promo codes can be applied during checkout.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* TRUST CARDS */}

            <div className="mt-4 space-y-2">

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <FaTruck />
                </div>

                <div>

                  <p className="text-xs font-bold text-slate-800">
                    Fast Delivery
                  </p>

                  <p className="text-[10px] text-slate-500">
                    Reliable delivery to your doorstep
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <FaShieldAlt />
                </div>

                <div>

                  <p className="text-xs font-bold text-slate-800">
                    Secure Shopping
                  </p>

                  <p className="text-[10px] text-slate-500">
                    Your information is protected
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <FaUndo />
                </div>

                <div>

                  <p className="text-xs font-bold text-slate-800">
                    Easy Returns
                  </p>

                  <p className="text-[10px] text-slate-500">
                    Simple and convenient returns
                  </p>

                </div>

              </div>

            </div>

          </aside>

        </div>

      </main>

    </div>
  );
};

export default Cart;
