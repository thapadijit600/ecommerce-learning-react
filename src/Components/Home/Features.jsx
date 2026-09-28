import {
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaUndo,
} from "react-icons/fa";

const features = [
  {
    icon: FaTruck,
    title: "Fast Delivery",
    description: "Get your orders delivered quickly and safely.",
  },
  {
    icon: FaShieldAlt,
    title: "Secure Payment",
    description: "Your payment and personal information stay protected.",
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    description: "Our support team is ready whenever you need help.",
  },
  {
    icon: FaUndo,
    title: "Easy Returns",
    description: "Enjoy a simple and convenient return experience.",
  },
];

const Features = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white">
                  <Icon className="text-xl" />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;