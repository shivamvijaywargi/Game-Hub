import React, { Fragment } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  const skeletons = [1, 2, 3, 4, 5, 6];

  // Need to make this adapt to sidebar as well along with the gamecards
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {skeletons.map((skeleton) => (
        <div
          className="self-stretch bg-gray-100 dark:bg-zinc-800 h-full rounded-lg "
          key={skeleton}
        >
          <Skeleton className="h-[200px]" />
          <div className="p-2">
            <Skeleton className="text-xl w-4 h-4" />
            {/* <div className="flex justify-between items-center">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />

          <CriticScore score={game.metacritic} />
        </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
