import { useState } from "react";
import { FaEnvelope, FaCheckCircle } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
          <FaEnvelope className="text-xl" />
        </div>

        <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
          Stay in the Loop
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          Subscribe to receive updates about new products, special offers, and
          exclusive deals.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              required
            />

            <button
              type="submit"
              className="rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-600"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-3 rounded-xl bg-emerald-50 px-5 py-4 font-medium text-emerald-700">
            <FaCheckCircle />
            Thank you for subscribing!
          </div>
        )}

        <p className="mt-4 text-xs text-slate-400">
          We respect your privacy. You can unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;