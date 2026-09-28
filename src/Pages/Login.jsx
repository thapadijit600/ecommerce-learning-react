import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaLock,
  FaEnvelope,
  FaArrowLeft,
  FaGoogle,
  FaShieldAlt,
  FaTruck,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  /* =========================================================
     HANDLE INPUT
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  /* =========================================================
     VALIDATION
  ========================================================= */

  const validateForm = () => {
    if (!formData.email.trim()) {
      return "Please enter your email address.";
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address.";
    }

    if (!formData.password) {
      return "Please enter your password.";
    }

    if (formData.password.length < 6) {
      return "Password must contain at least 6 characters.";
    }

    return "";
  };

  /* =========================================================
     LOGIN
  ========================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    /*
      Demo login.

      Later you can connect this form
      with your backend / Firebase / API.
    */

    const userData = {
      email: formData.email,
      rememberMe,
      loggedIn: true,
    };

    localStorage.setItem(
      "shop_zone_user",
      JSON.stringify(userData)
    );

    setError("");
    setSuccess(true);

    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  /* =========================================================
     GOOGLE LOGIN
  ========================================================= */

  const handleGoogleLogin = () => {
    alert(
      "Google login will be available when authentication is connected."
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="relative overflow-hidden">
        {/* Background decoration */}

        <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-emerald-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          {/* Back to shopping */}

          <Link
            to="/products"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-emerald-600"
          >
            <FaArrowLeft />
            Back to Shopping
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <section className="hidden lg:block">
              <div className="max-w-xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                  <FaCheckCircle />
                  Welcome Back
                </div>

                <h1 className="text-4xl font-black leading-tight text-slate-950 xl:text-5xl">
                  Shop smarter with
                  <span className="block text-emerald-600">
                    SHOP ZONE
                  </span>
                </h1>

                <p className="mt-5 text-lg leading-8 text-slate-500">
                  Sign in to access your account, manage your
                  orders, save your favorite products and enjoy a
                  faster shopping experience.
                </p>

                {/* Benefits */}

                <div className="mt-10 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                      <FaShieldAlt />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Secure Shopping
                      </h3>

                      <p className="text-sm text-slate-500">
                        Your account information is protected.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <FaTruck />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Easy Order Tracking
                      </h3>

                      <p className="text-sm text-slate-500">
                        Track your orders easily from your account.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-500">
                      <FaHeadset />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Customer Support
                      </h3>

                      <p className="text-sm text-slate-500">
                        We're here whenever you need help.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                LOGIN CARD
            ================================================= */}

            <section className="mx-auto w-full max-w-md">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
                {/* Mobile logo */}

                <div className="mb-7 text-center lg:hidden">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                      <span className="text-lg font-black">
                        SZ
                      </span>
                    </div>

                    <span className="text-xl font-black text-slate-950">
                      SHOP
                      <span className="text-emerald-600">
                        ZONE
                      </span>
                    </span>
                  </Link>
                </div>

                {/* Heading */}

                <div className="mb-7">
                  <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">
                    Welcome Back!
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Sign in to continue shopping with SHOP ZONE.
                  </p>
                </div>

                {/* Success Message */}

                {success && (
                  <div className="mb-5 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                    <FaCheckCircle className="shrink-0" />

                    Login successful! Redirecting...
                  </div>
                )}

                {/* Error Message */}

                {error && (
                  <div
                    role="alert"
                    className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600"
                  >
                    {error}
                  </div>
                )}

                {/* =================================================
                    GOOGLE BUTTON
                ================================================= */}

                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <FaGoogle className="text-red-500" />

                  Continue with Google
                </button>

                {/* Divider */}

                <div className="my-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-slate-200" />

                  <span className="text-xs font-semibold text-slate-400">
                    OR CONTINUE WITH EMAIL
                  </span>

                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                {/* =================================================
                    FORM
                ================================================= */}

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  {/* EMAIL */}

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Email Address
                    </label>

                    <div className="relative">
                      <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>
                  </div>

                  {/* PASSWORD */}

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-sm font-bold text-slate-700"
                      >
                        Password
                      </label>

                      <Link
                        to="/forgot-password"
                        className="text-xs font-bold text-emerald-600 transition hover:text-emerald-700"
                      >
                        Forgot Password?
                      </Link>
                    </div>

                    <div className="relative">
                      <FaLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        id="password"
                        name="password"
                        type={
                          showPassword
                            ? "text"
                            : "password"
                        }
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-12 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-emerald-600"
                        aria-label={
                          showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                      >
                        {showPassword ? (
                          <FaEyeSlash />
                        ) : (
                          <FaEye />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* REMEMBER ME */}

                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) =>
                        setRememberMe(e.target.checked)
                      }
                      className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />

                    <span className="text-sm font-medium text-slate-600">
                      Remember me
                    </span>
                  </label>

                  {/* LOGIN BUTTON */}

                  <button
                    type="submit"
                    disabled={success}
                    className="flex h-12 w-full items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-black text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {success
                      ? "Signing In..."
                      : "Sign In"}
                  </button>
                </form>

                {/* REGISTER */}

                <div className="mt-7 text-center">
                  <p className="text-sm text-slate-500">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="font-bold text-emerald-600 hover:text-emerald-700"
                    >
                      Create Account
                    </Link>
                  </p>
                </div>
              </div>

              {/* Security text */}

              <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
                <FaShieldAlt className="text-emerald-500" />

                <span>
                  Your information is safe and secure with us.
                </span>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;