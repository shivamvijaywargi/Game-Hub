import Image from 'next/image';

import { IGame } from '@/services/get-games';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

interface IProps {
  game: IGame;
}

const GameCard = ({ game }: IProps) => {
  return (
    <div className="self-stretch bg-gray-100 dark:bg-zinc-800 h-full rounded-lg">
      <Image
        src={game.background_image}
        alt={game.name}
        width={700}
        height={300}
        className="object-contain rounded-t-lg"
        loading="lazy"
      />
      <div className="p-2">
        <h2 className="text-xl">{game.name}</h2>
        <div className="flex justify-between items-center">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />

          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
