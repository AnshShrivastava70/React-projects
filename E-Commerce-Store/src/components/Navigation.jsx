import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

const Navigation = () => {
  const { cartCount } = useCart();

  return (
    <div>
      <nav className="bg-slate-800 text-lg md:text-2xl flex justify-between items-center px-3 md:px-10 py-4 overflow-hidden">
        <span className="flex items-center gap-1 md:gap-2"> <img className="object-cover h-5 md:h-10 " src="https://t4.ftcdn.net/jpg/16/78/40/95/240_F_1678409556_ajiWk5V5ddRiZ7uRChHsRQZxFWtnkgL5.png" alt="" />Neutron</span>
        <div className="flex items-center space-x-5 md:space-x-10 font-bold ">
          <Link to="/">Home</Link>
          <Link to="/cart" className="relative">
            <ShoppingCart className="relative"></ShoppingCart>{" "}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
