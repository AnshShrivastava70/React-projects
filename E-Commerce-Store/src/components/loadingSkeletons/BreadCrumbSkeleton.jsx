import Skeleton from "./Skeleton";
import { ChevronRight } from "lucide-react";

const BreadcrumbSkeleton = () => {
  return (
    <nav className="mx-8 my-4 flex items-center space-x-3 text-gray-400">
      <Skeleton className="h-4 w-16" />

      <ChevronRight size={16} />

      <Skeleton className="h-4 w-24" />
    </nav>
  );
};

export default BreadcrumbSkeleton;
