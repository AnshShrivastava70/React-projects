import { useCart } from "../context/CartContext";
import { getSubTotal, getTotalAmt } from "../utils/priceUtils";
import { formatPrice } from "../utils/priceUtils";
import { useNavigate } from "react-router-dom";
const OrderInfo = () => {
  const { cartCount, cartItems, clearCart } = useCart();
  const subtotal = getSubTotal(cartItems);
  const totalAmt = getTotalAmt(cartItems);
  const navigate = useNavigate();

  const handleOrder = () => {
    clearCart();
    alert("Order Placed!");
    navigate("/");
  };
  return (
    <div>
      <h2 className="text-gray-400 md:text-2xl">Your Order</h2>
      <hr className="w-full border-0 bg-gray-300 h-0.5 my-3"></hr>
      <h2 className="text-gray-400 flex justify-between">
        Subtotal ({cartCount} items):
        <b className="text-black">{formatPrice(subtotal)}</b>
      </h2>
      <hr className="w-full border-0 bg-gray-300 h-1 rounded-full my-5"></hr>
      <h3 className="text-gray-500 text-xl flex justify-between font-bold">
        Total Payable: <b className="text-black">{formatPrice(totalAmt)}</b>
      </h3>
      <div className="flex justify-center items-center">
        <button
          onClick={handleOrder}
          className="mt-8 w-full bg-black text-white font-bold py-2 cursor-pointer disabled:bg-gray-400 shadow-2xl"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};
export default OrderInfo;
