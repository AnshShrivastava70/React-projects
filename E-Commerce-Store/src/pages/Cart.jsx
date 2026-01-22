import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import OrderInfo from "../components/OrderInfo";
import { useNavigate } from "react-router-dom";
import emptyCartImage from "../assets/shopping.png";

const Cart = () => {
  const { cartItems } = useCart();
  const Navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="grid grid-rows-1 gap-3 place-items-center h-[70vh] md:h-[80vh] py-3">
        <img
          className="h-50 md:h-78"
          src={emptyCartImage}
          alt="emptyCartImage"
        />
        <h2 className="text-slate-800 md:text-xl font-light">
          Oops! Your cart is empty. Let’s change that.
        </h2>
        <button
          onClick={() => {
            Navigate("/");
          }}
          className="bg-slate-800 p-3 rounded cursor-pointer active:text-slate-800 active:scale-95 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }
  return (
    <div>

      <div className="grid md:grid-cols-3 grid-flow-row md:p-3 ">
        <div
          className="md:col-span-2 bg-white
 md:h-screen md:max-h-[80vh] md:overflow-y-auto p-5 my-2 md:m-3 shadow-xl"
        >
          <h2 className="text-gray-400 md:text-2xl">
            My Cart ({`${cartItems.length}`})
          </h2>
          <hr className="w-full border-0 bg-gray-300 h-0.5 my-3"></hr>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <aside
          className="bg-white text-black shadow-xl
 p-5 my-2 md:m-3"
        >
          <OrderInfo />
        </aside>
      </div>
    </div>
  );
};
export default Cart;
