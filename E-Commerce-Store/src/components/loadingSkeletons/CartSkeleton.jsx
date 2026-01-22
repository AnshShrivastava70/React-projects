import Skeleton from "./Skeleton";

const CartSkeleton = () => {
  return (
    <div className="p-6 md:p-8 space-y-6">

      {/* Page title */}
      <Skeleton className="h-7 w-40" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT: cart items */}
        <div className="lg:col-span-2 space-y-6">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="flex gap-4 items-center border-b pb-4"
            >
              {/* Image */}
              <Skeleton className="h-20 w-20 rounded" />

              {/* Details */}
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/4" />
              </div>

              {/* Quantity */}
              <Skeleton className="h-8 w-20" />

              {/* Remove */}
              <Skeleton className="h-6 w-6" />
            </div>
          ))}
        </div>

        {/* RIGHT: summary */}
        <div className="space-y-4 border p-4 rounded">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-10 w-full mt-4" />
        </div>

      </div>
    </div>
  );
};

export default CartSkeleton;
