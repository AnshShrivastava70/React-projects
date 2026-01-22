import { ShoppingCart } from "lucide-react";
import { formatPrice } from "../utils/priceUtils.js";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import useProduct from "../hooks/useProduct.jsx";
import ProductSkeleton from "../components/loadingSkeletons/ProductSkeleton.jsx";

const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart, cartItems } = useCart();
  const { data: product, error, isLoading = true } = useProduct(productId);

  if (isLoading)
    return (
      <ProductSkeleton />
    );

  if (error) return <p>{error.message}</p>;

  console.log("ID:", productId);
  console.log("Product:", product);
  console.log("Loading:", isLoading);
  console.log("Error:", error);

  if (!product) {
    return <p className="text-black text-center mt-10">Product not found</p>;
  }
  return (
    <div>
      <section className="w-full md:min-h-[90vh] grid md:grid-cols-2 gap-3 text-black bg-gray-300 md:py-10 md:px-20">
        <div className="grid place-items-center bg-gray-200 p-8">
          <img className="h-70 md:max-h-90" src={product.image} alt="" />
        </div>
        {/* product info */}
        <div className="grid grid-col-1 gap-8 bg-gray-200 p-5 md:p-10">
          <div className="flex flex-col gap-8">
            <header className="">
              <h2 className="text-2xl">{product.title}</h2>
              <h3 className="text-lg text-gray-400 font-bold capitalize">
                {product.category}
              </h3>
            </header>

            <span className="text-3xl font-bold text-slate-600">
              {formatPrice(product.price)}
            </span>
            <p className="text-gray-500 text-sm font-semibold">
              {product.description}
            </p>
          </div>
          <div className="flex gap-3 items-center ">
            <button className="bg-slate-800 text-white text-xs md:text-lg active:scale-95 cursor-pointer w-full flex justify-evenly items-center font-medium  transition-all p-2">
              Buy Now
            </button>
            <button
              onClick={() => {
                addToCart(product);
                console.log(cartItems);
              }}
              className="bg-yellow-400 text-white text-xs md:text-lg active:scale-95 cursor-pointer w-full flex justify-evenly items-center font-medium transition-all p-2"
            >
              Add To Cart <ShoppingCart className="size-4 md:size-7" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProductDetails;
