import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/priceUtils";

const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useCart();

  return (
    <div>
      <article className="bg-white rounded-2xl md:w-60 shadow-lg">
        <Link to={`/product/${product.id}`} className="flex flex-col">
          <figure className="grid place-items-center p-2 bg-[#f3f4f6]">
            <img
              className="h-25 max-w-20 md:h-50 md:max-w-45 bg-gray-100 object-cover "
              src={product.image}
              alt="productImg"
            />
          </figure>

          <header className="p-2">
            <h2 className=" text-gray-800 text-sm md:text-lg max-w-[15ch] truncate">
              {product.title}
            </h2>
            <h3 className="text-sm text-gray-400 font-bold capitalize">
              {product.category}
            </h3>
          </header>
          <div className="flex p-2">
            <span className=" text-gray-700 md:text-xl font-bold rounded w-full ">
              {formatPrice(product.price)}
            </span>
          </div>
        </Link>
        <button
          onClick={() => {
            addToCart(product);
            console.log(cartItems);
          }}
          className="flex justify-evenly items-center bg-yellow-400 text-white text-xs md:text-lg rounded-b-xl cursor-pointer active:bg-amber-500  w-full font-medium transition-all p-2"
        >
          Add To Cart <ShoppingCart size={24} />
        </button>
      </article>
    </div>
  );
};
export default ProductCard;
