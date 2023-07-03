import { IGame } from '@/services/get-games';
import Image from 'next/image';

interface IProps {
  game: IGame;
}

const GameCard = ({ game }: IProps) => {
  return (
    <div className="self-stretch bg-zinc-800 h-full rounded-lg">
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
      </div>
    </div>
  );
};

export default GameCard;
