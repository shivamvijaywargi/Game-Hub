import getGenres from '@/services/get-genres';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import GenreListItem from './GenreListItem';

const GenreList = async () => {
  const genres = await getGenres();

  return (
    <ul className="space-y-2">
      {genres?.map((genre) => (
        <li key={genre.id} className="flex gap-2">
          <Image
            alt={genre.name}
            src={genre.image_background}
            width={40}
            height={40}
            className="rounded-md"
          />
          <GenreListItem genre={genre} />
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
