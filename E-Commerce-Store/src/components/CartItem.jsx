import { Link } from "react-router-dom";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, incrementQty, decrementQty } = useCart();

  return (
    <div>
      <article key={item.id} className="grid grid-cols-3 ">
        <Link to={`/product/${item.id}`} className="col-span-2">
          {/* product info section */}
          <section className="flex gap-2 ">
            <img
              className="h-20 max-w-20 md:h-30 bg-gray-200 object-cover "
              src={item.image}
              alt="productImg"
            />
            <div className="flex flex-col min-w-0 md:gap-4">
              <header className="p-2">
                <h2 className=" text-gray-800 text-sm md:text-base line-clamp-2">
                  {item.title}
                </h2>
                <h3 className="text-sm text-gray-400 font-bold">
                  {item.category}
                </h3>
              </header>
              <div className="flex justify-between items-center p-2 ">
                <span className=" text-gray-700 md:text-xl font-bold rounded w-full ">
                  Rs.{item.price}
                </span>
              </div>
            </div>
          </section>
        </Link>
        {/* Action section  */}
        <section className="flex flex-col justify-end items-end col-span-1 gap-6">
          <div className="flex items-center border border-black">
            <button
            onClick={() => decrementQty(item.id)}
            className="bg-slate-800 cursor-pointer px-1 md:px-2">
              <Minus />
            </button>
            <span className="text-slate-800 px-2 md:px-4">{item.quantity}</span>
            <button
            onClick={() => incrementQty(item.id)}
            className=" bg-slate-800 cursor-pointer px-1 md:px-2">
              <Plus />
            </button>
          </div>
          <div className="flex ">
            <button
              onClick={() => {
                removeFromCart(item.id);
              }}
              className=" text-gray-500 text-xs md:text-base cursor-pointer flex items-center border font-medium p-1"
            >
              <X size={16} /> <span>Remove Item</span>
            </button>
          </div>
        </section>
      </article>
      <hr className="w-full border-0 bg-gray-300 h-0.5 my-4"></hr>
    </div>
  );
};
export default CartItem;
