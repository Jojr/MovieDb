import React from 'react';
import { StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import FastImage from 'react-native-fast-image';
import { Spacing } from '../../../styles';
import { getW780ImageUrl } from '../../../utils/constants';
import { Container } from './styles';

interface HeroImageProps {
  source: string;
  uniqueId: string;
  height?: number;
}

export const HeroImage: React.FC<HeroImageProps> = ({
  source,
  uniqueId,
  height,
}) => {
  return (
    <Container>
      <SharedElement id={uniqueId}>
        <FastImage
          style={[
            styles.heroImage,
            { height: height ? height : Spacing.SCALE_160 },
          ]}
          resizeMode="cover"
          source={{
            uri: getW780ImageUrl(source),
          }}
        />
      </SharedElement>
    </Container>
  );
};

const styles = StyleSheet.create({
  heroImage: {
    width: '100%',
    height: Spacing.SCALE_160,
  },
});
