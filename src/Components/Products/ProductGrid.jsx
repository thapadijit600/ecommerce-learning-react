import { FaSearch, FaBoxOpen } from "react-icons/fa";
import ProductCard from "./ProductHero.jsx";

const ProductGrid = ({
  products,
  onAddToCart,
  onWishlist,
}) => {
  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white px-6 py-20 text-center shadow-sm">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
          <FaBoxOpen className="text-3xl" />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-slate-900">
          No Products Found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
          We couldn't find any products matching your current search or
          filters. Try changing your search or selecting another category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onWishlist={onWishlist}
        />
      ))}
    </div>
  );
};

export default ProductGrid;