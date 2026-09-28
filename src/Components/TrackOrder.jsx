
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaSearch,
  FaBoxOpen,
  FaCheckCircle,
  FaTruck,
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowLeft,
  FaShoppingBag,
  FaShieldAlt,
  FaUndo,
} from "react-icons/fa";

/* =========================================================
   DEMO ORDER DATA
========================================================= */

const demoOrder = {
  orderId: "SZ10001",
  customer: "Ram Sharma",
  email: "ram@example.com",
  status: "Out for Delivery",
  statusMessage: "Your order is on the way and will arrive soon.",
  orderDate: "September 24, 2026",
  estimatedDelivery: "September 28, 2026",
  paymentMethod: "Cash on Delivery",
  total: 8500,

  items: [
    {
      name: "Running Shoes",
      quantity: 1,
      price: 4500,
    },
    {
      name: "Wireless Headphones",
      quantity: 1,
      price: 4000,
    },
  ],

  tracking: [
    {
      title: "Order Placed",
      description: "Your order has been successfully placed.",
      date: "September 24, 2026",
      time: "10:30 AM",
      completed: true,
      icon: FaShoppingBag,
    },
    {
      title: "Order Confirmed",
      description: "Your order has been confirmed by ShopZone.",
      date: "September 24, 2026",
      time: "11:15 AM",
      completed: true,
      icon: FaCheckCircle,
    },
    {
      title: "Shipped",
      description: "Your package has left our warehouse.",
      date: "September 26, 2026",
      time: "09:20 AM",
      completed: true,
      icon: FaBoxOpen,
    },
    {
      title: "Out for Delivery",
      description: "Your package is with the delivery partner.",
      date: "September 28, 2026",
      time: "08:45 AM",
      completed: true,
      current: true,
      icon: FaTruck,
    },
    {
      title: "Delivered",
      description: "Your package will be marked delivered after arrival.",
      date: "Expected today",
      time: "",
      completed: false,
      icon: FaMapMarkerAlt,
    },
  ],
};

/* =========================================================
   TRACK ORDER PAGE
========================================================= */

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [contact, setContact] = useState("");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  /* =======================================================
     TRACK ORDER
  ======================================================= */

  const handleTrackOrder = (e) => {
    e.preventDefault();

    const cleanOrderId = orderId.trim().toUpperCase();
    const cleanContact = contact.trim();

    setError("");
    setOrder(null);

    if (!cleanOrderId) {
      setError("Please enter your order ID.");
      return;
    }

    if (!cleanContact) {
      setError("Please enter your email or phone number.");
      return;
    }

    /*
      Demo tracking:
      Use SZ10001 and any email/phone for testing.
    */

    if (cleanOrderId === "SZ10001") {
      setOrder(demoOrder);

      setTimeout(() => {
        document
          .getElementById("tracking-result")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 100);
    } else {
      setError(
        "We couldn't find an order with that ID. Please check your order ID and try again."
      );
    }
  };

  /* =======================================================
     RESET TRACKING
  ======================================================= */

  const handleReset = () => {
    setOrderId("");
    setContact("");
    setOrder(null);
    setError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     FORMAT PRICE
  ======================================================= */

  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString("en-IN")}`;
  };

  return (
    <main className="min-h-screen bg-slate-50">

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative overflow-hidden bg-slate-950">

        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
              <FaTruck className="text-2xl" />
            </div>

            <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-emerald-400">
              Order Tracking
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Track Your Order
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Enter your order details below to check your
              order status and delivery progress.
            </p>

          </div>

        </div>
      </section>

      {/* ===================================================
          TRACKING FORM
      =================================================== */}

      <section className="relative -mt-8 px-4 pb-12 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-4xl">

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/10 sm:p-7 lg:p-9">

            <div className="mb-7">

              <h2 className="text-xl font-black text-slate-900 sm:text-2xl">
                Find Your Order
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Enter your order ID and the email address or
                phone number used during checkout.
              </p>

            </div>

            <form
              onSubmit={handleTrackOrder}
              className="grid grid-cols-1 gap-5 md:grid-cols-2"
            >

              {/* ORDER ID */}

              <div>
                <label
                  htmlFor="orderId"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Order ID
                </label>

                <div className="relative">

                  <FaBoxOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    id="orderId"
                    type="text"
                    value={orderId}
                    onChange={(e) =>
                      setOrderId(e.target.value)
                    }
                    placeholder="Example: SZ10001"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                  />

                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Your order ID can be found in your order confirmation.
                </p>
              </div>

              {/* EMAIL / PHONE */}

              <div>
                <label
                  htmlFor="contact"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Email or Phone
                </label>

                <div className="relative">

                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    id="contact"
                    type="text"
                    value={contact}
                    onChange={(e) =>
                      setContact(e.target.value)
                    }
                    placeholder="Email or phone number"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                  />

                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Use the details provided when placing your order.
                </p>
              </div>

              {/* ERROR */}

              {error && (
                <div className="md:col-span-2">

                  <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                    {error}
                  </div>

                </div>
              )}

              {/* BUTTON */}

              <div className="md:col-span-2">

                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 text-sm font-black text-white shadow-lg shadow-emerald-600/20 transition duration-200 hover:bg-emerald-500 active:scale-[0.99]"
                >
                  <FaSearch />
                  Track Order
                </button>

              </div>

            </form>

            {/* DEMO INFO */}

            <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50 p-4">

              <p className="text-xs font-bold text-emerald-800">
                Demo order for testing
              </p>

              <p className="mt-1 text-xs leading-5 text-emerald-700">
                Order ID:{" "}
                <span className="font-black">
                  SZ10001
                </span>
                {" "}• Enter any email or phone number.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          TRACKING RESULT
      =================================================== */}

      {order && (
        <section
          id="tracking-result"
          className="px-4 pb-16 sm:px-6 lg:px-8"
        >

          <div className="mx-auto max-w-7xl">

            {/* STATUS HEADER */}

            <div className="rounded-3xl bg-emerald-600 p-6 text-white shadow-xl shadow-emerald-600/10 sm:p-8">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-100">
                    Order #{order.orderId}
                  </p>

                  <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                    {order.status}
                  </h2>

                  <p className="mt-2 text-sm text-emerald-50">
                    {order.statusMessage}
                  </p>

                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                  <FaTruck className="text-2xl" />
                </div>

              </div>

            </div>

            {/* ORDER INFORMATION */}

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">

              {/* TRACKING TIMELINE */}

              <div className="lg:col-span-2">

                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">

                  <div className="flex items-center justify-between gap-4">

                    <div>
                      <h3 className="text-xl font-black text-slate-900">
                        Delivery Progress
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Follow your order from placement to delivery.
                      </p>
                    </div>

                    <FaShieldAlt className="hidden text-xl text-emerald-500 sm:block" />

                  </div>

                  <div className="mt-8">

                    {order.tracking.map((step, index) => {
                      const Icon = step.icon;
                      const isLast =
                        index === order.tracking.length - 1;

                      return (
                        <div
                          key={step.title}
                          className="relative flex gap-4"
                        >

                          {/* LINE */}

                          {!isLast && (
                            <div
                              className={`absolute left-5 top-11 h-[calc(100%-4px)] w-0.5 ${
                                step.completed
                                  ? "bg-emerald-500"
                                  : "bg-slate-200"
                              }`}
                            />
                          )}

                          {/* ICON */}

                          <div
                            className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                              step.current
                                ? "bg-emerald-600 text-white ring-4 ring-emerald-100"
                                : step.completed
                                ? "bg-emerald-100 text-emerald-600"
                                : "bg-slate-100 text-slate-400"
                            }`}
                          >
                            <Icon className="text-sm" />
                          </div>

                          {/* CONTENT */}

                          <div
                            className={`min-w-0 flex-1 ${
                              isLast ? "pb-0" : "pb-9"
                            }`}
                          >

                            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">

                              <div>

                                <h4
                                  className={`text-sm font-black ${
                                    step.current
                                      ? "text-emerald-600"
                                      : step.completed
                                      ? "text-slate-900"
                                      : "text-slate-400"
                                  }`}
                                >
                                  {step.title}
                                </h4>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                  {step.description}
                                </p>

                              </div>

                              <div className="shrink-0 text-left sm:text-right">

                                <p className="text-xs font-bold text-slate-700">
                                  {step.date}
                                </p>

                                {step.time && (
                                  <p className="mt-0.5 text-[11px] text-slate-400">
                                    {step.time}
                                  </p>
                                )}

                              </div>

                            </div>

                          </div>

                        </div>
                      );
                    })}

                  </div>

                </div>

              </div>

              {/* ORDER SUMMARY */}

              <div>

                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">

                  <h3 className="text-xl font-black text-slate-900">
                    Order Summary
                  </h3>

                  <div className="mt-5 space-y-4">

                    {order.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4"
                      >

                        <div className="min-w-0">

                          <h4 className="truncate text-sm font-bold text-slate-800">
                            {item.name}
                          </h4>

                          <p className="mt-1 text-xs text-slate-400">
                            Quantity: {item.quantity}
                          </p>

                        </div>

                        <p className="shrink-0 text-sm font-black text-slate-900">
                          {formatPrice(item.price)}
                        </p>

                      </div>
                    ))}

                  </div>

                  <div className="mt-5 space-y-3">

                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">
                        Order Date
                      </span>

                      <span className="font-bold text-slate-800">
                        {order.orderDate}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">
                        Payment
                      </span>

                      <span className="font-bold text-slate-800">
                        {order.paymentMethod}
                      </span>
                    </div>

                    <div className="flex justify-between border-t border-slate-100 pt-4">
                      <span className="font-bold text-slate-700">
                        Total
                      </span>

                      <span className="text-lg font-black text-emerald-600">
                        {formatPrice(order.total)}
                      </span>
                    </div>

                  </div>

                </div>

                {/* DELIVERY INFO */}

                <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">

                  <div className="flex items-start gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <FaClock />
                    </div>

                    <div>

                      <h4 className="text-sm font-black text-slate-900">
                        Estimated Delivery
                      </h4>

                      <p className="mt-1 text-sm font-bold text-emerald-600">
                        {order.estimatedDelivery}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Delivery times may vary depending on location.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* RESET */}

            <div className="mt-8 text-center">

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600"
              >
                <FaArrowLeft />
                Track Another Order
              </button>

            </div>

          </div>

        </section>
      )}

      {/* ===================================================
          HELP SECTION
      =================================================== */}

      <section className="border-t border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <FaPhoneAlt className="text-lg text-emerald-600" />

              <h3 className="mt-4 text-base font-black text-slate-900">
                Need Help?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Our support team is ready to help with your order.
              </p>

              <a
                href="tel:+9779800000000"
                className="mt-4 inline-block text-sm font-bold text-emerald-600 hover:text-emerald-500"
              >
                +977 9800000000
              </a>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <FaEnvelope className="text-lg text-emerald-600" />

              <h3 className="mt-4 text-base font-black text-slate-900">
                Email Support
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Send us your order details and we'll assist you.
              </p>

              <a
                href="mailto:support@shopzone.com"
                className="mt-4 inline-block break-all text-sm font-bold text-emerald-600 hover:text-emerald-500"
              >
                support@shopzone.com
              </a>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <FaUndo className="text-lg text-emerald-600" />

              <h3 className="mt-4 text-base font-black text-slate-900">
                Returns & Refunds
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Need to return an item? Check our return information.
              </p>

              <Link
                to="/returns"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-500"
              >
                Learn More
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default TrackOrder;
