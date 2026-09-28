import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
  FaShieldAlt,
  FaTruck,
  FaCheckCircle,
  FaStore,
} from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [agreeTerms, setAgreeTerms] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  /* =========================================================
     HANDLE INPUT
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  /* =========================================================
     PASSWORD STRENGTH
  ========================================================= */

  const getPasswordStrength = () => {
    const password = formData.password;

    if (!password) {
      return {
        text: "",
        width: "w-0",
        color: "",
      };
    }

    if (password.length < 6) {
      return {
        text: "Weak password",
        width: "w-1/3",
        color: "bg-red-500",
      };
    }

    if (
      password.length >= 6 &&
      password.length < 8
    ) {
      return {
        text: "Medium password",
        width: "w-2/3",
        color: "bg-amber-500",
      };
    }

    return {
      text: "Strong password",
      width: "w-full",
      color: "bg-emerald-500",
    };
  };

  const passwordStrength = getPasswordStrength();

  /* =========================================================
     VALIDATION
  ========================================================= */

  const validateForm = () => {
    if (!formData.name.trim()) {
      return "Please enter your full name.";
    }

    if (formData.name.trim().length < 2) {
      return "Please enter a valid name.";
    }

    if (!formData.email.trim()) {
      return "Please enter your email address.";
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      return "Please enter your phone number.";
    }

    const phoneRegex = /^[0-9+\-\s()]{7,15}$/;

    if (!phoneRegex.test(formData.phone)) {
      return "Please enter a valid phone number.";
    }

    if (!formData.password) {
      return "Please create a password.";
    }

    if (formData.password.length < 6) {
      return "Password must contain at least 6 characters.";
    }

    if (!formData.confirmPassword) {
      return "Please confirm your password.";
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      return "Passwords do not match.";
    }

    if (!agreeTerms) {
      return "Please agree to the Terms & Conditions.";
    }

    return "";
  };

  /* =========================================================
     REGISTER
  ========================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    /*
      Demo registration.

      This stores the account locally for now.
      Later you can connect this to Firebase
      or your own backend/API.
    */

    const userData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
    };

    localStorage.setItem(
      "shop_zone_user",
      JSON.stringify(userData)
    );

    setError("");
    setSuccess(true);

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="relative overflow-hidden">
        {/* Decorative backgrounds */}

        <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-emerald-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-emerald-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          {/* Back button */}

          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-emerald-600"
          >
            <FaArrowLeft />
            Back to Home
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            {/* =================================================
                LEFT INFORMATION
            ================================================= */}

            <section className="hidden lg:block">
              <div className="max-w-xl">
                {/* Logo */}

                <div className="mb-7 inline-flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                    <FaStore className="text-xl" />
                  </div>

                  <div>
                    <div className="text-xl font-black tracking-tight text-slate-950">
                      SHOP
                      <span className="text-emerald-600">
                        ZONE
                      </span>
                    </div>

                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Smart Shopping
                    </div>
                  </div>
                </div>

                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                  <FaCheckCircle />
                  Join SHOP ZONE
                </div>

                <h1 className="text-4xl font-black leading-tight text-slate-950 xl:text-5xl">
                  Create your
                  <span className="block text-emerald-600">
                    shopping account
                  </span>
                </h1>

                <p className="mt-5 text-lg leading-8 text-slate-500">
                  Create your free SHOP ZONE account and enjoy a
                  faster, easier and more personalized shopping
                  experience.
                </p>

                {/* Benefits */}

                <div className="mt-10 space-y-5">
                  {/* Benefit 1 */}

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                      <FaShieldAlt />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Secure Account
                      </h3>

                      <p className="text-sm text-slate-500">
                        Your account information stays protected.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 2 */}

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <FaTruck />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Easy Order Tracking
                      </h3>

                      <p className="text-sm text-slate-500">
                        Manage and track your orders easily.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 3 */}

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-500">
                      <FaCheckCircle />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Personalized Shopping
                      </h3>

                      <p className="text-sm text-slate-500">
                        Save products and manage your preferences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                REGISTER CARD
            ================================================= */}

            <section className="mx-auto w-full max-w-lg">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
                {/* Mobile Logo */}

                <div className="mb-6 flex justify-center lg:hidden">
                  <Link
                    to="/"
                    className="flex items-center gap-2"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                      <FaStore />
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

                <div className="mb-6">
                  <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">
                    Create Account
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Join SHOP ZONE today. It only takes a minute.
                  </p>
                </div>

                {/* Success */}

                {success && (
                  <div className="mb-5 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                    <FaCheckCircle className="shrink-0" />

                    Account created successfully!
                    Redirecting...
                  </div>
                )}

                {/* Error */}

                {error && (
                  <div
                    role="alert"
                    className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600"
                  >
                    {error}
                  </div>
                )}

                {/* =================================================
                    FORM
                ================================================= */}

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-4"
                >
                  {/* FULL NAME */}

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Full Name
                    </label>

                    <div className="relative">
                      <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>
                  </div>

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

                  {/* PHONE */}

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Phone Number
                    </label>

                    <div className="relative">
                      <FaPhone className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="98XXXXXXXX"
                        autoComplete="tel"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>
                  </div>

                  {/* PASSWORD */}

                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Password
                    </label>

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
                        placeholder="Create a password"
                        autoComplete="new-password"
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

                    {/* Password strength */}

                    {formData.password && (
                      <div className="mt-2">
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${passwordStrength.width} ${passwordStrength.color}`}
                          />
                        </div>

                        <p className="mt-1 text-xs font-semibold text-slate-500">
                          {passwordStrength.text}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CONFIRM PASSWORD */}

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Confirm Password
                    </label>

                    <div className="relative">
                      <FaLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={
                          showConfirmPassword
                            ? "text"
                            : "password"
                        }
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        autoComplete="new-password"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-12 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(
                            !showConfirmPassword
                          )
                        }
                        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-emerald-600"
                        aria-label={
                          showConfirmPassword
                            ? "Hide confirm password"
                            : "Show confirm password"
                        }
                      >
                        {showConfirmPassword ? (
                          <FaEyeSlash />
                        ) : (
                          <FaEye />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* TERMS */}

                  <label className="flex cursor-pointer items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) =>
                        setAgreeTerms(e.target.checked)
                      }
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />

                    <span className="text-xs leading-5 text-slate-500">
                      I agree to the{" "}
                      <Link
                        to="/terms"
                        className="font-bold text-emerald-600 hover:text-emerald-700"
                      >
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/privacy"
                        className="font-bold text-emerald-600 hover:text-emerald-700"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>

                  {/* REGISTER BUTTON */}

                  <button
                    type="submit"
                    disabled={success}
                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-black text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {success
                      ? "Creating Account..."
                      : "Create Account"}
                  </button>
                </form>

                {/* LOGIN LINK */}

                <div className="mt-6 border-t border-slate-100 pt-6 text-center">
                  <p className="text-sm text-slate-500">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-bold text-emerald-600 transition hover:text-emerald-700"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>

              {/* Security */}

              <div className="mt-5 flex items-center justify-center gap-2 px-4 text-center text-xs text-slate-400">
                <FaShieldAlt className="shrink-0 text-emerald-500" />

                <span>
                  Your information is protected and secure.
                </span>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;