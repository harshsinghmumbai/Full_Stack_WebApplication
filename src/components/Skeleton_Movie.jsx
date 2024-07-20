import { Skeleton } from "@/components/ui/skeleton";

const Skeleton_Movie = () => {
  return (
    <>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array(20)
          .fill(null)
          .map((items, id) => {
            return (
              <div className="p-4 my-5" key={id}>
                <div className="w-full max-w-[450px] md:max-w-[300px] rounded-md border dark:border-0  border-gray-300 mx-auto">
                  <Skeleton className="w-full h-40" />
                  <div className="p-4">
                    <Skeleton className="w-full h-6" />
                    <div className="flex justify-center">
                      <Skeleton className="mt-4 w-[80%] rounded-sm px-2 py-1.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Skeleton_Movie;
