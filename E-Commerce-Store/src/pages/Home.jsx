import { useMemo, useState } from "react";
import ProductListSkeleton from "../components/loadingSkeletons/ProductListSkeleton";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

const Home = () => {
  const { isLoading, data: products = [], error } = useProducts();
  const [sortBy, setSortBy] = useState("");
  const sortedProducts = useMemo(() => {
    if (!products.length) return [];

    const sorted = [...products];

    switch (sortBy) {
      case "price-asc":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-desc":
        return sorted.sort((a, b) => b.price - a.price);
      case "name-asc":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "name-desc":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return sorted;
    }
  }, [products, sortBy]);

  if (isLoading) return <ProductListSkeleton />;
  if (error) return <p>{error}</p>;
  console.log(products);

  return (
    <>
      <div className="flex justify-end p-3 text-gray-500 relative">
        {/* Sorting  */}
        {/* <button
          className="w-48 flex items-center gap-2 bg-gray-300 px-4 py-2 rounded-md"
          onClick={() => setOpen((prev) => !prev)}
        >
          Sort By:{sortBy}
        </button> */}
        {/* {open && (
          <div className="absolute bg-white top-full right-0 w-48 p-2 border rounded-md shadow-lg z-10">
            <button value= className="block " onClick={() => {setOpen(false); setSortBy((e)=>e.target.value)}} >
              Price: Low to High
            </button>
            <button className="block " onClick={() => setOpen(false)}>Price: High to Low</button>
            <button className="block " onClick={() => setOpen(false)}>Name: A to Z</button>
            <button className="block " onClick={() => setOpen(false)}>Name: Z to A</button>
          </div>
        )} */}
        <select
          name="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-black"
        >
          <option value="">Sort By:</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>

      {/* ProductListing  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center max-w-screen  min-h-screen gap-5 md:gap-7 py-4 p-2 md:p-6 md:py-8 bg-slate-200">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default Home;
