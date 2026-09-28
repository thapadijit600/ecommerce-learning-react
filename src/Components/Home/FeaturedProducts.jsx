import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: "4,999",
    oldPrice: "6,499",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "Classic Running Shoes",
    category: "Fashion",
    price: "3,499",
    oldPrice: "4,500",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    name: "Smart Watch Pro",
    category: "Electronics",
    price: "5,999",
    oldPrice: "7,499",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "Modern Backpack",
    category: "Accessories",
    price: "2,499",
    oldPrice: "3,200",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="font-semibold uppercase tracking-wider text-emerald-600">
              Featured Products
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Popular Right Now
            </h2>

            <p className="mt-3 max-w-xl text-slate-600">
              Check out some of our most popular products selected for you.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-semibold text-emerald-600 hover:text-emerald-700"
          >
            View All Products
            <FaArrowRight className="text-sm" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-500 shadow-md transition hover:bg-red-50 hover:text-red-500"
                >
                  <FaHeart />
                </button>

                <span className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">
                  SALE
                </span>
              </div>

              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-emerald-600">
                  {product.category}
                </p>

                <h3 className="mt-2 min-h-[48px] font-bold text-slate-900">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center gap-1 text-sm">
                  <FaStar className="text-amber-400" />
                  <span className="font-semibold text-slate-700">
                    {product.rating}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xl font-extrabold text-slate-900">
                    Rs. {product.price}
                  </span>

                  <span className="text-sm text-slate-400 line-through">
                    Rs. {product.oldPrice}
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-emerald-600"
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;