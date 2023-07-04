'use client';

import { IGenre } from '@/services/get-genres';
import React from 'react';
import { Button } from './ui/button';

interface IProps {
  genre: IGenre;
}

const GenreListItem = ({ genre }: IProps) => {
  return (
    <Button
      className="p-1 h-7"
      variant={'link'}
      onClick={() => console.log(genre)}
    >
      {genre.name}
    </Button>
  );
};

export default GenreListItem;
