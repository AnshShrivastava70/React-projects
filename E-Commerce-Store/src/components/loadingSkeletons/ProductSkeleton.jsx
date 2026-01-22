import Skeleton from "./Skeleton";

const ProductSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      
      {/* Image skeleton */}
      <Skeleton className="w-full h-[350px]" />

      {/* Right side */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-3/4" />   {/* title */}
        <Skeleton className="h-4 w-1/4" />   {/* category */}
        <Skeleton className="h-8 w-1/3" />   {/* price */}

        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>

        <div className="flex gap-4 mt-6">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-40" />
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
