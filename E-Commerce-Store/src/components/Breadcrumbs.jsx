import { useLocation, useNavigate, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { ChevronRight } from "lucide-react";
import Back from "./Back";
import BreadcrumbSkeleton from "./loadingSkeletons/BreadCrumbSkeleton";
const Breadcrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { productId } = useParams();

  const pathnames = location.pathname.split("/").filter(Boolean); //returns an array of pathnames ["product", "1"]

  const { data: product, isLoading } = useProduct(Number(productId)); // used to display title of the product
  if (productId && isLoading) {
    return <BreadcrumbSkeleton />;
  }
  if (location.pathname === "/") {
    return null;
  } // to avoid breadcrumb on Home screen

  return (
    <div>
      <Back />
      <nav className="mx-6 md:mx-10 my-3 flex items-end text-gray-400 text-xs md:text-base font-semibold space-x-1 md:space-x-3 ">
        <span className="cursor-pointer" onClick={() => navigate("/")}>
          Home
        </span>

        {pathnames.map((segment, index) => {
          const isLast = index === pathnames.length - 1;

          let label = segment;

          if (segment === "product") {
            return null;
          }

          if (productId && isLast && product) {
            label = product.title;
          }
          console.log("product:", product);
          return (
            <span
              key={index}
              className="flex items-end space-x-1 md:space-x-3 capitalize"
            >
              <span>
                <ChevronRight className="size-4 md:size-5" />
              </span>
              {isLast ? (
                <span className="text-gray-500 max-w-[28ch] truncate md:max-w-none">
                  {label}
                </span>
              ) : (
                <span onClick={() => navigate(`/${segment}`)}>{label}</span>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
};
export default Breadcrumbs;
