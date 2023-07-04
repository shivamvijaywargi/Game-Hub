import getGenres from '@/services/get-genres';
import React from 'react';

const GenreList = async () => {
  const genres = await getGenres();

  return (
    <ul>
      {genres?.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
