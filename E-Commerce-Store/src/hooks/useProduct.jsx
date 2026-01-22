import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../data/ProductsData";

const useProduct = (productId) => {
  const numericId = Number(productId);
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
    enabled: Number.isFinite(numericId),
    staleTime: 5 * 60 * 1000
  });
};

export default useProduct;
