import { useEffect, useState } from "react";
import {
  NavLink,
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaChevronDown,
  FaStore,
  FaBoxOpen,
  FaPhoneAlt,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";

/* =========================================================
   CART STORAGE KEY
========================================================= */

const CART_KEY = "shop_zone_cart";

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  /* =======================================================
     CART COUNT
  ======================================================= */

  const [cartCount, setCartCount] = useState(0);

  /* =======================================================
     GET CART COUNT
  ======================================================= */

  const updateCartCount = () => {
    try {
      const savedCart =
        localStorage.getItem(CART_KEY);

      if (!savedCart) {
        setCartCount(0);
        return;
      }

      const parsedCart = JSON.parse(savedCart);

      if (!Array.isArray(parsedCart)) {
        setCartCount(0);
        return;
      }

      const totalQuantity = parsedCart.reduce(
        (total, item) =>
          total + (Number(item.quantity) || 1),
        0
      );

      setCartCount(totalQuantity);
    } catch (error) {
      console.error(
        "Unable to read cart:",
        error
      );

      setCartCount(0);
    }
  };

  /* =======================================================
     CART EVENT LISTENER
  ======================================================= */

  useEffect(() => {
    /* Get current count when Navbar loads */

    updateCartCount();

    /* Listen for Product.jsx / Cart.jsx updates */

    window.addEventListener(
      "cartUpdated",
      updateCartCount
    );

    /* Useful if cart changes in another browser tab */

    window.addEventListener(
      "storage",
      updateCartCount
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        updateCartCount
      );

      window.removeEventListener(
        "storage",
        updateCartCount
      );
    };
  }, []);

  /* =======================================================
     SEARCH
  ======================================================= */

  const handleSearch = (e) => {
    e.preventDefault();

    const search = searchTerm.trim();

    if (!search) {
      navigate("/products");
      return;
    }

    navigate(
      `/products?search=${encodeURIComponent(search)}`
    );

    setSearchTerm("");
    setMenuOpen(false);
  };

  /* =======================================================
     CLOSE MENU
  ======================================================= */

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  /* =======================================================
     ACTIVE LINK
  ======================================================= */

  const navLinkClass = ({ isActive }) =>
    `relative flex items-center py-2 text-sm font-bold transition ${
      isActive
        ? "text-emerald-600"
        : "text-slate-600 hover:text-emerald-600"
    }`;

  return (
    <header className="sticky top-0 z-[100] w-full">
      {/* ===================================================
          TOP INFORMATION BAR
      =================================================== */}

      <div className="hidden bg-slate-950 text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs lg:px-8">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <FaTruck className="text-emerald-400" />
              Free delivery on orders over Rs. 5,000
            </span>

            <span className="hidden lg:block text-slate-400">
              |
            </span>

            <span className="hidden items-center gap-2 lg:flex">
              <FaShieldAlt className="text-emerald-400" />
              Secure shopping
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/track-order"
              className="transition hover:text-emerald-400"
            >
              Track Order
            </Link>

            <Link
              to="/help"
              className="transition hover:text-emerald-400"
            >
              Help
            </Link>
          </div>
        </div>
      </div>

      {/* ===================================================
          MAIN NAVBAR
      =================================================== */}

      <div className="border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between gap-4">
            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              to="/"
              onClick={closeMenu}
              className="group flex shrink-0 items-center gap-2"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 transition group-hover:scale-105">
                <FaStore className="text-lg" />
              </div>

              <div className="hidden sm:block">
                <span className="block text-lg font-black leading-none tracking-tight text-slate-950">
                  SHOP
                  <span className="text-emerald-600">
                    ZONE
                  </span>
                </span>

                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Smart Shopping
                </span>
              </div>
            </Link>

            {/* =================================================
                DESKTOP SEARCH
            ================================================= */}

            <form
              onSubmit={handleSearch}
              className="hidden flex-1 md:flex md:max-w-xl lg:max-w-2xl"
            >
              <div className="relative w-full">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                  placeholder="Search products..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-24 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                />

                <button
                  type="submit"
                  className="absolute right-1 top-1 flex h-9 items-center justify-center rounded-lg bg-slate-900 px-4 text-xs font-bold text-white transition hover:bg-emerald-600"
                >
                  Search
                </button>
              </div>
            </form>

            {/* =================================================
                RIGHT ACTIONS
            ================================================= */}

            <div className="flex items-center gap-1 sm:gap-2">
              {/* USER */}

              <Link
                to="/login"
                className="hidden h-11 w-11 items-center justify-center rounded-xl text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-600 sm:flex"
                aria-label="Account"
              >
                <FaUser />
              </Link>

              {/* WISHLIST */}

              <Link
                to="/wishlist"
                className="relative flex h-11 w-11 items-center justify-center rounded-xl text-slate-600 transition hover:bg-rose-50 hover:text-rose-500"
                aria-label="Wishlist"
              >
                <FaHeart className="text-lg" />
              </Link>

              {/* =================================================
                  CART
              ================================================= */}

              <Link
                to="/cart"
                className="relative flex h-11 w-11 items-center justify-center rounded-xl text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600"
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <FaShoppingCart className="text-lg" />

                {/* CART BADGE */}

                {cartCount > 0 && (
                  <span className="absolute -right-1.5 -top-1.5 flex min-h-[21px] min-w-[21px] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-black leading-none text-white shadow-md ring-2 ring-white">
                    {cartCount > 99
                      ? "99+"
                      : cartCount}
                  </span>
                )}
              </Link>

              {/* MOBILE MENU */}

              <button
                type="button"
                onClick={() =>
                  setMenuOpen(!menuOpen)
                }
                className="ml-1 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600 md:hidden"
                aria-label={
                  menuOpen
                    ? "Close menu"
                    : "Open menu"
                }
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <FaTimes />
                ) : (
                  <FaBars />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}

        <div className="hidden border-t border-slate-100 md:block">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <nav className="flex h-12 items-center justify-center gap-7">
              <NavLink
                to="/"
                end
                className={navLinkClass}
              >
                Home
              </NavLink>

              <NavLink
                to="/categories"
                className={navLinkClass}
              >
                Categories
              </NavLink>

              <NavLink
                to="/products"
                className={navLinkClass}
              >
                Products
              </NavLink>

              <NavLink
                to="/deals"
                className={navLinkClass}log
              >
                Deals
              </NavLink>

              <NavLink
                to="/-arrivalsnew"
                className={navLinkClass}
              >
                New Arrivals
              </NavLink>

              <NavLink
                to="/about"
                className={navLinkClass}
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                className={navLinkClass}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
      </div>

      {/* ===================================================
          MOBILE MENU
      =================================================== */}

      {menuOpen && (
        <div className="border-b border-slate-200 bg-white shadow-xl md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
            {/* MOBILE SEARCH */}

            <form
              onSubmit={handleSearch}
              className="mb-5"
            >
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                  placeholder="Search products..."
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-20 text-sm outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                />

                <button
                  type="submit"
                  className="absolute right-1 top-1 h-10 rounded-lg bg-emerald-600 px-3 text-xs font-bold text-white"
                >
                  Search
                </button>
              </div>
            </form>

            {/* MOBILE LINKS */}

            <nav className="space-y-1">
              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className={navLinkClass}
              >
                Home
              </NavLink>

              <NavLink
                to="/categories"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Categories
              </NavLink>

              <NavLink
                to="/products"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Products
              </NavLink>

              <NavLink
                to="/deals"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Deals
              </NavLink>

              <NavLink
                to="/new-arrivals"
                onClick={closeMenu}
                className={navLinkClass}
              >
                New Arrivals
              </NavLink>

              {/* SERVICES */}

              <div>
                <button
                  type="button"
                  onClick={() =>
                    setServicesOpen(
                      !servicesOpen
                    )
                  }
                  className="flex w-full items-center justify-between py-2 text-sm font-bold text-slate-600"
                >
                  <span>Services</span>

                  <FaChevronDown
                    className={`text-xs transition-transform ${
                      servicesOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div className="ml-3 space-y-1 border-l-2 border-emerald-100 pl-4">
                    <Link
                      to="/track-order"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      Track Order
                    </Link>

                    <Link
                      to="/help"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      Help Center
                    </Link>
                  </div>
                )}
              </div>

              <NavLink
                to="/about"
                onClick={closeMenu}
                className={navLinkClass}
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Contact
              </NavLink>

              {/* ACCOUNT */}

              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700"
                >
                  <FaUser />
                  Account
                </Link>

                <Link
                  to="/wishlist"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700"
                >
                  <FaHeart />
                  Wishlist
                </Link>
              </div>

              {/* CART BUTTON */}

              <Link
                to="/cart"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-between rounded-xl bg-emerald-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20"
              >
                <span className="flex items-center gap-3">
                  <FaShoppingCart />
                  Shopping Cart
                </span>

                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-black text-emerald-700">
                  {cartCount}
                </span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;