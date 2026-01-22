import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../data/ProductsData";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000,
  });
};
export default useProducts;
