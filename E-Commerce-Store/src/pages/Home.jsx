import ProductListSkeleton from "../components/loadingSkeletons/ProductListSkeleton";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

const Home = () => {
  const {
    isLoading,
    data: products,
    error,
  } = useProducts();

  if (isLoading)
    return (
  <ProductListSkeleton/>
      // <div className="flex items-center justify-center h-screen bg-black">
      //   <img
      //     src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzVwNzFtOGR5bjhjMjkzZzBlYnk5anBraGRjdGlpMWJwbmpmOG94NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohc1f8hcZ7LBe2Zzy/giphy.gif"
      //     alt=""
      //   />
      // </div>
    );
  if (error) return <p>{error}</p>;
  console.log(products);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center max-w-[100vw]  min-h-screen gap-5 md:gap-7 py-4 p-2 md:p-6 md:py-8 bg-slate-200">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Home;
