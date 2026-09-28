import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaEye,
} from "react-icons/fa";

const ProductCard = ({ product, onAddToCart, onWishlist }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative overflow-hidden bg-slate-100">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />
        </Link>

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white shadow-md">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => onWishlist(product)}
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-500 shadow-md transition hover:bg-rose-50 hover:text-rose-500"
        >
          <FaHeart />
        </button>

        {/* Quick View */}
        <Link
          to={`/products/${product.id}`}
          className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-14 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-800 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-emerald-600 hover:text-white"
        >
          <FaEye />
          Quick View
        </Link>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
          {product.category}
        </p>

        <Link to={`/products/${product.id}`}>
          <h2 className="mt-2 min-h-[48px] text-base font-bold leading-6 text-slate-900 transition hover:text-emerald-600">
            {product.name}
          </h2>
        </Link>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <FaStar className="text-sm text-amber-400" />

            <span className="text-sm font-bold text-slate-700">
              {product.rating}
            </span>
          </div>

          <span className="text-xs text-slate-400">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xl font-extrabold text-slate-900">
            Rs. {product.price.toLocaleString()}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-slate-400 line-through">
              Rs. {product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add Cart */}
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-emerald-600 active:scale-[0.98]"
        >
          <FaShoppingCart className="text-sm" />
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;