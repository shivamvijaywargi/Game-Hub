import Image from 'next/image';

import { IGame } from '@/services/get-games';
import PlatformIconList from './PlatformIconList';

interface IProps {
  game: IGame;
}

const GameCard = ({ game }: IProps) => {
  return (
    <div className="self-stretch bg-green-50 dark:bg-zinc-800 h-full rounded-lg">
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
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </div>
    </div>
  );
};

export default GameCard;
