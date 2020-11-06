import React from 'react';
import { HeroImage } from '../../atoms';

import { Touchable } from './styles';

interface HeroCardProps {
  imageSource: string;
  favorite: boolean;
  name: string;
  uniqueId: string;
  favoriteOnpress(): void;
  onPress(): void;
  active?: boolean;
}

export const HeroCard: React.FC<HeroCardProps> = ({
  imageSource,
  uniqueId,
  onPress,
}) => {
  return (
    <Touchable onPress={onPress} activeOpacity={1}>
      <HeroImage source={imageSource} uniqueId={uniqueId} />
    </Touchable>
  );
};
