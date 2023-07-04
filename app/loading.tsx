import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // Need to make this adapt to sidebar as well along with the gamecards
  return (
    <main className="grid grid-cols-auto-1 sm:grid-cols-auto-2">
      <aside className="hidden lg:block space-y-3 p-4">
        {skeletons.map((skeleton) => (
          <Skeleton
            className="w-52 h-4 bg-zinc-200 dark:bg-zinc-500"
            key={skeleton}
          />
        ))}
      </aside>
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {skeletons.map((skeleton) => (
            <div
              className="self-stretch bg-gray-100 dark:bg-zinc-800 rounded-lg "
              key={skeleton}
            >
              <Skeleton className="h-[200px] min-w-[240px] w-full bg-zinc-200 dark:bg-zinc-500" />
              <div className="p-2">
                <Skeleton className="w-52 h-4 bg-zinc-200 dark:bg-zinc-500" />
                <div className="flex justify-between items-center mt-2">
                  <div className="flex gap-2">
                    <Skeleton className="w-4 h-4 bg-zinc-200 dark:bg-zinc-500" />
                    <Skeleton className="w-4 h-4 bg-zinc-200 dark:bg-zinc-500" />
                    <Skeleton className="w-4 h-4 bg-zinc-200 dark:bg-zinc-500" />
                  </div>

                  <Badge className="bg-transparent">
                    <Skeleton className="h-4 w-8 bg-zinc-200 dark:bg-zinc-500" />
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;
