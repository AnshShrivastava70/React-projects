import Skeleton from "./Skeleton";

const ProductListSkeleton = () => {
  return (
    <div className="p-6 md:p-8">
      
      {/* Page heading */}
      <Skeleton className="h-7 w-48 mb-6" />

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 space-y-4"
          >
            {/* Image */}
            <Skeleton className="h-40 w-full rounded" />

            {/* Title */}
            <Skeleton className="h-4 w-3/4" />

            {/* Price */}
            <Skeleton className="h-4 w-1/3" />

            {/* Button */}
            <Skeleton className="h-9 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListSkeleton;
