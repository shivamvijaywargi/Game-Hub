import React from 'react';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

interface IProps {
  score: number;
}

const CriticScore = ({ score }: IProps) => {
  return (
    <Badge
      className={cn(
        score > 75
          ? 'bg-green-100/80 text-green-700'
          : score > 60
          ? 'bg-yellow-100/80 text-yellow-700'
          : ''
      )}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
