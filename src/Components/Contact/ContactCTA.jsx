import {
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-emerald-600 px-6 py-10 shadow-xl shadow-emerald-600/20 sm:px-10 sm:py-14">
          {/* Decorative circles */}
          <div className="absolute -left-16 -top-20 h-48 w-48 rounded-full bg-white/10" />

          <div className="absolute -bottom-24 -right-10 h-56 w-56 rounded-full bg-white/10" />

          <div className="relative mx-auto max-w-2xl text-center">
            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
              <FaHeadset className="text-2xl" />
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
              We're always happy to hear from you.
            </h2>

            {/* Description */}
            <p className="mt-3 text-sm leading-6 text-emerald-50 sm:text-base">
              Your questions and feedback help us improve the ShopZone
              shopping experience.
            </p>

            {/* Badge */}
            <div className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-700 shadow-lg">
              <FaCheckCircle />
              ShopZone Support Team
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;