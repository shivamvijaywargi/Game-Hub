import React from 'react';
import { Skeleton } from './ui/skeleton';

const GameCardSkeleton = () => {
  return (
    <div className="self-stretch bg-gray-100 dark:bg-zinc-800 h-full rounded-lg">
      <Skeleton className="h-52" />
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
  );
};

export default GameCardSkeleton;
