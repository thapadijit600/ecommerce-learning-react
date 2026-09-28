
import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaHeart,
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaShieldAlt,
  FaStar,
  FaTruck,
  FaUndo,
  FaUser,
  FaBolt,
  FaMapMarkerAlt,
  FaHeadset,
} from "react-icons/fa";

/* =========================================================
   PRODUCT DATA
   Replace/add products here according to your Products.jsx
========================================================= */

const productsData = [
  {
    id: 1,
    slug:"premium-running-shoes",
    name: "Premium Running Shoes",
    category: "Fashion & Footwear",
    price: 4500,
    oldPrice: 6000,
    discount: 25,
    rating: 4.8,
    reviews: 124,
    stock: 18,
    brand: "SportX",
    color: "Black / White",
    size: "40 - 44",
    image: "/images/Product.jpg",
    images: [
      "/images/Product.jpg",
      "/images/Product.jpg",
      "/images/Product.jpg",
    ],
    description:
      "Experience excellent comfort and performance with these premium running shoes. Designed for everyday use, walking, running, workouts, and casual wear.",
    features: [
      "Lightweight and comfortable design",
      "Breathable upper material",
      "Durable rubber outsole",
      "Comfortable cushioned insole",
      "Suitable for running and everyday use",
    ],
  },

  {
    id: 2,
    name: "Classic Sneakers",
    category: "Fashion & Footwear",
    price: 5500,
    oldPrice: 7000,
    discount: 21,
    rating: 4.7,
    reviews: 98,
    stock: 25,
    brand: "UrbanStep",
    color: "White",
    size: "39 - 44",
    image: "/images/Sneakers.jpg",
    images: [
      "/images/Sneakers.jpg",
      "/images/Sneakers.jpg",
      "/images/Sneakers.jpg",
    ],
    description:
      "A stylish pair of sneakers designed for modern everyday outfits. Comfortable, versatile, and easy to pair with casual clothing.",
    features: [
      "Modern casual design",
      "Soft interior cushioning",
      "Durable sole",
      "Comfortable for everyday walking",
      "Easy to maintain",
    ],
  },

  {
    id: 3,
    name: "Smartphone Pro",
    category: "Electronics & Gadgets",
    price: 35000,
    oldPrice: 40000,
    discount: 13,
    rating: 4.9,
    reviews: 215,
    stock: 12,
    brand: "TechPro",
    color: "Midnight Black",
    size: "128GB",
    image: "/images/Smartphone.jpg",
    images: [
      "/images/Smartphone.jpg",
      "/images/Smartphone.jpg",
      "/images/Smartphone.jpg",
    ],
    description:
      "A powerful smartphone built for everyday performance, photography, entertainment, communication, and productivity.",
    features: [
      "High-performance processor",
      "High-quality camera system",
      "Large immersive display",
      "Long-lasting battery",
      "Fast and responsive performance",
    ],
  },

  {
    id: 4,
    name: "Digital Camera",
    category: "Electronics & Gadgets",
    price: 90000,
    oldPrice: 105000,
    discount: 14,
    rating: 4.8,
    reviews: 76,
    stock: 7,
    brand: "VisionPro",
    color: "Black",
    size: "24MP",
    image: "/images/Camera.jpg",
    images: [
      "/images/Camera.jpg",
      "/images/Camera.jpg",
      "/images/Camera.jpg",
    ],
    description:
      "Capture memorable moments with this versatile digital camera. Ideal for photography enthusiasts, travel, events, and content creation.",
    features: [
      "High-resolution image sensor",
      "Excellent image quality",
      "Easy-to-use controls",
      "Portable design",
      "Suitable for photography and video",
    ],
  },
];

/* =========================================================
   HELPER
========================================================= */

const formatPrice = (price) => {
  return `Rs. ${price.toLocaleString("en-IN")}`;
};

function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = productsData.find((item) => String(item.slug) === String(slug));

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(
    product?.image || ""
  );
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [addedMessage, setAddedMessage] = useState("");

  /* =========================================================
     RELATED PRODUCTS
  ========================================================= */

  const relatedProducts = useMemo(() => {
    if (!product) return [];

    return productsData
      .filter(
        (item) =>
          item.id !== product.id &&
          item.category === product.category
      )
      .slice(0, 3);
  }, [product]);

  /* =========================================================
     PRODUCT NOT FOUND
  ========================================================= */

  if (!product) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-3xl text-red-500">
            !
          </div>

          <h1 className="mt-6 text-3xl font-extrabold text-slate-900">
            Product Not Found
          </h1>

          <p className="mt-3 text-slate-600">
            Sorry, we couldn't find the product you're looking for.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-bold text-white transition hover:bg-emerald-600"
          >
            <FaArrowLeft />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  /* =========================================================
     QUANTITY
  ========================================================= */

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity((previous) => previous + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((previous) => previous - 1);
    }
  };

  /* =========================================================
     ADD TO CART
  ========================================================= */

  const addToCart = () => {
    const existingCart = JSON.parse(
      localStorage.getItem("shop_zone_cart") || "[]"
    );

    const existingProduct = existingCart.find(
      (item) => Number(item.id) === Number(product.id)
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = existingCart.map((item) =>
        Number(item.id) === Number(product.id)
          ? {
              ...item,
              quantity: Math.min(
                (item.quantity || 1) + quantity,
                product.stock
              ),
            }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...product,
          quantity,
        },
      ];
    }

    localStorage.setItem(
      "shop_zone_cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(new Event("cartUpdated"));

    setAddedMessage("Added to cart!");

    setTimeout(() => {
      setAddedMessage("");
    }, 2500);
  };

  /* =========================================================
     BUY NOW
  ========================================================= */

  const buyNow = () => {
    addToCart();
    navigate("/cart");
  };

  /* =========================================================
     WISHLIST
  ========================================================= */

  const toggleWishlist = () => {
    const existingWishlist = JSON.parse(
      localStorage.getItem("shop_zone_wishlist") || "[]"
    );

    const exists = existingWishlist.some(
      (item) => Number(item.id) === Number(product.id)
    );

    let updatedWishlist;

    if (exists) {
      updatedWishlist = existingWishlist.filter(
        (item) => Number(item.id) !== Number(product.id)
      );
    } else {
      updatedWishlist = [...existingWishlist, product];
    }

    localStorage.setItem(
      "shop_zone_wishlist",
      JSON.stringify(updatedWishlist)
    );

    setIsWishlisted(!exists);

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-slate-500 transition hover:text-emerald-600"
            >
              Home
            </Link>

            <span className="text-slate-300">/</span>

            <Link
              to="/products"
              className="text-slate-500 transition hover:text-emerald-600"
            >
              Products
            </Link>

            <span className="text-slate-300">/</span>

            <span className="font-medium text-slate-900">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          PRODUCT SECTION
      ===================================================== */}

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">

        <Link
          to="/products"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-emerald-600"
        >
          <FaArrowLeft />
          Back to Products
        </Link>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* =================================================
              IMAGE SECTION
          ================================================= */}

          <div>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

              {/* Discount */}

              {product.discount > 0 && (
                <div className="absolute left-5 top-5 z-10 rounded-full bg-red-500 px-4 py-2 text-sm font-extrabold text-white shadow-lg">
                  -{product.discount}% OFF
                </div>
              )}

              {/* Wishlist */}

              <button
                type="button"
                onClick={toggleWishlist}
                aria-label="Add to wishlist"
                className={`absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border bg-white shadow-md transition ${
                  isWishlisted
                    ? "border-red-200 text-red-500"
                    : "border-slate-200 text-slate-500 hover:border-red-200 hover:text-red-500"
                }`}
              >
                <FaHeart
                  className={isWishlisted ? "fill-current" : ""}
                />
              </button>

              <div className="flex min-h-[350px] items-center justify-center p-6 sm:min-h-[480px] sm:p-10">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="max-h-[450px] w-full object-contain transition duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Thumbnail Images */}

            <div className="mt-4 grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`flex h-24 items-center justify-center overflow-hidden rounded-xl border bg-white p-2 transition sm:h-28 ${
                    selectedImage === image
                      ? "border-emerald-500 ring-2 ring-emerald-100"
                      : "border-slate-200 hover:border-emerald-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* =================================================
              PRODUCT INFORMATION
          ================================================= */}

          <div className="flex flex-col">

            <span className="w-fit rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-700">
              {product.category}
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              {product.name}
            </h1>

            {/* Rating */}

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-3 py-1.5 text-sm font-bold text-amber-600">
                <FaStar />
                {product.rating}
              </div>

              <span className="text-sm text-slate-500">
                {product.reviews} customer reviews
              </span>

              <span className="hidden text-slate-300 sm:inline">
                |
              </span>

              <span className="flex items-center gap-1 text-sm font-semibold text-emerald-600">
                <FaCheckCircle />
                Verified Product
              </span>
            </div>

            {/* Price */}

            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex flex-wrap items-end gap-3">
                <span className="text-3xl font-black text-slate-900 sm:text-4xl">
                  {formatPrice(product.price)}
                </span>

                <span className="mb-1 text-lg text-slate-400 line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              </div>

              <p className="mt-2 text-sm font-medium text-emerald-600">
                You save{" "}
                {formatPrice(product.oldPrice - product.price)}
              </p>
            </div>

            {/* Description */}

            <p className="mt-6 leading-7 text-slate-600">
              {product.description}
            </p>

            {/* Product Info */}

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-xs text-slate-500">Brand</p>
                <p className="mt-1 font-bold text-slate-900">
                  {product.brand}
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-xs text-slate-500">Color</p>
                <p className="mt-1 font-bold text-slate-900">
                  {product.color}
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-xs text-slate-500">Size</p>
                <p className="mt-1 font-bold text-slate-900">
                  {product.size}
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-xs text-slate-500">Stock</p>
                <p className="mt-1 font-bold text-emerald-600">
                  {product.stock} left
                </p>
              </div>
            </div>

            {/* Stock */}

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-600">
              <FaCheckCircle />
              In Stock — Ready to ship
            </div>

            {/* Quantity */}

            <div className="mt-7">
              <p className="mb-3 text-sm font-bold text-slate-900">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-slate-300 bg-white">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className="flex h-12 w-12 items-center justify-center text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <FaMinus />
                </button>

                <span className="flex h-12 w-14 items-center justify-center border-x border-slate-200 font-bold text-slate-900">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  disabled={quantity >= product.stock}
                  className="flex h-12 w-12 items-center justify-center text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            {/* Actions */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={addToCart}
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-500 bg-white px-5 py-4 font-bold text-emerald-600 transition hover:bg-emerald-50"
              >
                <FaShoppingCart />
                Add to Cart
              </button>

              <button
                type="button"
                onClick={buyNow}
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-4 font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600"
              >
                <FaBolt />
                Buy Now
              </button>
            </div>

            {/* Added Message */}

            {addedMessage && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">
                <FaCheckCircle />
                {addedMessage}
              </div>
            )}

            {/* Service Cards */}

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <FaTruck className="text-xl text-emerald-500" />

                <h3 className="mt-3 text-sm font-bold text-slate-900">
                  Fast Delivery
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Reliable delivery across Nepal.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <FaUndo className="text-xl text-emerald-500" />

                <h3 className="mt-3 text-sm font-bold text-slate-900">
                  Easy Returns
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Return eligible products easily.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <FaShieldAlt className="text-xl text-emerald-500" />

                <h3 className="mt-3 text-sm font-bold text-slate-900">
                  Secure Shopping
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Safe and trusted shopping experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            DETAILS TABS
        ================================================= */}

        <section className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          <div className="flex overflow-x-auto border-b border-slate-200">
            {[
              ["description", "Description"],
              ["features", "Features"],
              ["shipping", "Shipping & Returns"],
              ["reviews", "Reviews"],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setActiveTab(value)}
                className={`whitespace-nowrap border-b-2 px-5 py-4 text-sm font-bold transition sm:px-8 ${
                  activeTab === value
                    ? "border-emerald-500 text-emerald-600"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="p-6 sm:p-8 lg:p-10">

            {activeTab === "description" && (
              <div className="max-w-4xl">
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Product Description
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  {product.description}
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Shop confidently with ShopZone. We provide detailed product
                  information to help you choose products that fit your needs.
                </p>
              </div>
            )}

            {activeTab === "features" && (
              <div className="max-w-3xl">
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Product Features
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                    >
                      <FaCheckCircle className="mt-1 shrink-0 text-emerald-500" />

                      <span className="text-sm leading-6 text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-6">
                  <FaTruck className="text-2xl text-emerald-500" />

                  <h3 className="mt-4 font-bold text-slate-900">
                    Delivery
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Delivery availability and estimated time may vary
                    depending on your location.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6">
                  <FaUndo className="text-2xl text-emerald-500" />

                  <h3 className="mt-4 font-bold text-slate-900">
                    Returns
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Eligible products can be returned according to the
                    ShopZone return policy.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6">
                  <FaShieldAlt className="text-2xl text-emerald-500" />

                  <h3 className="mt-4 font-bold text-slate-900">
                    Secure Shopping
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Your shopping experience is designed with security and
                    customer support in mind.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <FaStar className="text-2xl text-amber-400" />

                      <span className="text-3xl font-extrabold text-slate-900">
                        {product.rating}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      Based on {product.reviews} reviews
                    </p>
                  </div>

                  <div className="h-px flex-1 bg-slate-200 sm:h-12 sm:w-px" />

                  <div className="text-sm text-slate-600">
                    <p className="flex items-center gap-2">
                      <FaCheckCircle className="text-emerald-500" />
                      Verified customer reviews
                    </p>

                    <p className="mt-2 flex items-center gap-2">
                      <FaUser className="text-slate-400" />
                      Customer feedback available
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =================================================
            DELIVERY INFORMATION
        ================================================= */}

        <section className="mt-10 rounded-3xl bg-slate-900 p-6 text-white sm:p-8 lg:p-10">
          <div className="grid gap-8 md:grid-cols-3">

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-xl text-emerald-400">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-bold">Delivery Across Nepal</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Check delivery availability during checkout.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-xl text-emerald-400">
                <FaShieldAlt />
              </div>

              <div>
                <h3 className="font-bold">Secure Purchase</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Shop confidently with ShopZone.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-xl text-emerald-400">
                <FaHeadset />
              </div>

              <div>
                <h3 className="font-bold">Customer Support</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Need help? Our support team is available.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =================================================
            RELATED PRODUCTS
        ================================================= */}

        {relatedProducts.length > 0 && (
          <section className="mt-16">

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                  You May Also Like
                </span>

                <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                  Related Products
                </h2>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700"
              >
                View All
                <FaArrowLeft className="rotate-180" />
              </Link>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/products/${item.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-56 items-center justify-center bg-slate-50 p-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                      {item.category}
                    </p>

                    <h3 className="mt-2 font-bold text-slate-900">
                      {item.name}
                    </h3>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-lg font-extrabold text-slate-900">
                        {formatPrice(item.price)}
                      </span>

                      <span className="flex items-center gap-1 text-sm font-bold text-amber-500">
                        <FaStar />
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default ProductDetails;

