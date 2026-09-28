import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const contactCards = [
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    value: "+977 9800000000",
    description: "Mon - Sat, 9:00 AM - 6:00 PM",
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    value: "support@shopzone.com",
    description: "We usually reply within 24 hours",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    value: "Kathmandu, Nepal",
    description: "ShopZone customer support office",
  },
  {
    icon: FaClock,
    title: "Working Hours",
    value: "9:00 AM - 6:00 PM",
    description: "Monday - Saturday",
  },
];

const ContactInfo = () => {
  return (
    <section className="border-b border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14 lg:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                    <Icon className="text-lg" />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-900">
                      {card.title}
                    </h3>

                    <p className="mt-1 break-words text-sm font-bold text-emerald-600">
                      {card.value}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;