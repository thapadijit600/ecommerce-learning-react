import {
  FaHeadset,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaComments,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const ContactSupport = () => {
  return (
    <div className="space-y-5">
      {/* Support Card */}
      <div className="overflow-hidden rounded-3xl bg-slate-950 p-6 text-white shadow-xl sm:p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
          <FaHeadset className="text-2xl" />
        </div>

        <h3 className="mt-6 text-2xl font-extrabold">
          Need quick help?
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-300">
          Our customer support team can help you with orders, products,
          delivery, returns, payments, and general questions.
        </p>

        {/* Support details */}
        <div className="mt-6 space-y-3">
          {/* Phone */}
          <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <FaPhoneAlt />
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Call Support
              </p>

              <p className="text-sm font-bold">
                +977 9800000000
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <FaEnvelope />
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Email Support
              </p>

              <p className="break-all text-sm font-bold">
                support@shopzone.com
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <FaClock />
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Working Hours
              </p>

              <p className="text-sm font-bold">
                Mon - Sat, 9 AM - 6 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
            <FaMapMarkerAlt />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Our Location
            </p>

            <h3 className="mt-1 text-lg font-extrabold text-slate-900">
              Kathmandu, Nepal
            </h3>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="relative mt-6 h-44 overflow-hidden rounded-2xl bg-slate-200">
          <div className="absolute inset-0 opacity-30">
            <div className="h-full w-full bg-[linear-gradient(45deg,#cbd5e1_25%,transparent_25%,transparent_75%,#cbd5e1_75%),linear-gradient(45deg,#cbd5e1_25%,transparent_25%,transparent_75%,#cbd5e1_75%)] bg-[length:40px_40px] bg-[position:0_0,20px_20px]" />
          </div>

          <div className="relative flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/30">
                <FaMapMarkerAlt />
              </div>

              <p className="mt-3 text-sm font-bold text-slate-800">
                ShopZone Office
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Kathmandu, Nepal
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <FaComments />
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Connect with us
            </h3>

            <p className="mt-0.5 text-xs text-slate-500">
              Follow ShopZone for updates
            </p>
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <button
            type="button"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-emerald-600 hover:text-white"
          >
            <FaFacebookF />
          </button>

          <button
            type="button"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-emerald-600 hover:text-white"
          >
            <FaInstagram />
          </button>

          <button
            type="button"
            aria-label="Twitter"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-emerald-600 hover:text-white"
          >
            <FaTwitter />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;