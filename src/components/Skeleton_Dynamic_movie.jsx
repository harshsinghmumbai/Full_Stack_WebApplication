import { Skeleton } from "@/components/ui/skeleton";

const Skeleton_Dynamic_movie = () => {
  return (
    <>
      <div className="p-6 md:hidden">
        <Skeleton className="h-[300px] w-full rounded-md" />
        <div className="space-y-3">
          <Skeleton className="w-full h-4 mt-3" />
          <Skeleton className="w-full h-4 mt-3" />
          <Skeleton className="w-full h-20 mt-3" />
          <Skeleton className="w-full h-28 mt-3 " />
          <Skeleton className="w-full h-4 mt-2" />
          <Skeleton className="w-full h-8 mt-2" />
          <Skeleton className="w-full h-7 mt-3" />
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex p-6">
          <Skeleton className="h-[500px] w-[450px] rounded-md" />
          <div className="w-full pl-5 ">
            <Skeleton className="w-full h-14 mt-3" />
            <Skeleton className="w-full h-4 mt-3" />
            <Skeleton className="w-full h-20 mt-3" />
            <Skeleton className="w-full h-28 mt-3 " />
            <Skeleton className="w-full h-4 mt-2" />
            <Skeleton className="w-full h-14 mt-2" />
            <Skeleton className="w-full h-20 mt-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skeleton_Dynamic_movie;
