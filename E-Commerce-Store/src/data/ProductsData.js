export const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Error fetching the Products");
  return res.json();
};

export const fetchProduct = async (productId) => {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};
