/* eslint-disable react-native/no-inline-styles */
import { View, FlatList } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { I18n } from '@aws-amplify/core';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Typography } from '../../../../styles';
import { getW1280ImageUrl } from '../../../../utils/constants';

export const Background = styled.View`
  background-color: ${Colors.BLACK};
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    //alignItems: 'center',
    //flex: 1,
    flexGrow: 1,
  },
}))`
  flex: 1;
`;

export const Section = styled.View`
  margin-top: 10px;
`;

export const Row = styled.View.attrs((props) => ({
  align: props.align || 'flex-start',
}))`
  flex-direction: row;
  justify-content: ${(props) => props.align || 'flex-start'};
`;

export const TagWrapper = styled.View`
  flex-direction: row;
  width: auto;
  height: 40px;
  position: absolute;
  top: 65%;
`;

export const Tag = styled.View.attrs((props) => ({
  bgColor: props.bgColor || Colors.GRAY_DARK,
}))`
  flex-direction: row;
  background-color: ${(props) => props.bgColor || Colors.GRAY_DARK};
  margin: 5px;
  padding: 10px;
  border-radius: 6px;
  width: auto;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.View.attrs((props) => ({
  color: props.color || Colors.GRAY_DARK,
}))`
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  height: 30px;
  position: absolute;
  top: 76%;
  align-items: center;
`;

export const FeatureImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
`;

export const CoverGradient = styled(LinearGradient).attrs({
  start: { x: 0.0, y: 0.0 },
  end: { x: 0.0, y: 1 },
  locations: [0.0, 0.2, 0.85, 1],
  colors: [
    'rgba(18,18,20,1)',
    'rgba(18,18,20,0.1)',
    'rgba(18,18,20,0.1)',
    'rgba(18,18,20,1)',
  ],
})`
  width: 100%;
  height: 100%;
  margin-top: 0px;
  position: absolute;
`;

export const Title = styled.Text.attrs((props) => ({
  color: props.color || Colors.WHITE,
}))`
  color: ${(props) => props.color || Colors.GRAY_DARK};
  font-size: 35px;
  font-family: ${Typography.FONT_FAMILY_BOLD};
  letter-spacing: -1px;
  margin-top: 0%;
  position: absolute;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  padding: 10px;
  text-align: center;
`;

export const TagText = styled.Text.attrs((props) => ({
  color: props.color || Colors.GRAY_DARK,
}))`
  color: ${(props) => props.color || Colors.GRAY_DARK};
  font-size: 14px;
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  letter-spacing: 1px;
  text-transform: capitalize;
`;

export const ButtonWrapper = styled.TouchableOpacity.attrs((props) => ({
  color: props.color,
  direction: props.direction,
}))`
  flex-direction: ${(props) => props.direction || 'row'};
  background-color: ${(props) => props.color || 'rgba(255,0,0,0.0)'};
  border: 1px solid;
  border-color: ${(props) => props.color || Colors.WHITE};
  margin: 10px;
  padding: 10px;
  border-radius: 6px;
  width: auto;
  height: 40px;
  align-items: center;
`;

export const ButtonText = styled.Text.attrs((props) => ({
  color: props.color || Colors.GRAY_DARK,
}))`
  color: ${(props) => props.color || Colors.GRAY_DARK};
  font-size: 14px;
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  letter-spacing: 1px;
  padding: 5px;
`;

export const Text = styled.Text.attrs((props) => ({
  color: props.color,
  size: props.size,
}))`
  color: ${(props) => props.color || Colors.WHITE};
  font-size: ${(props) => props.size || '14px'};
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  letter-spacing: 1px;
  padding: 5px;
`;

export const Button = (props) => {
  return (
    <ButtonWrapper
      color={props.bgColor || null}
      style={{ alignItems: 'center' }}
      onPress={props.onPress}>
      <Icon
        name={props.icon}
        size={18}
        color={props.iconColor || Colors.WHITE}
      />
      <ButtonText color={Colors.WHITE}>{props.text || ''}</ButtonText>
    </ButtonWrapper>
  );
};

interface Movie {
  id: number;
  title: string;
  posterPath: string;
}

export const ListMovies = styled(FlatList as new () => FlatList<Movie>)`
  padding: 5px;
  min-height: 150px;
`;

export const ContainerItem = styled.TouchableOpacity`
  width: 100px;
  height: 150px;
  border-radius: 4px;
  background-color: ${Colors.BLACK};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.50);
  margin: 5px;
`;

export const ItemTitle = styled.Text`
  padding-left: 4px;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: #121212;
`;

export const ItemPicture = styled.Image`
  width: 100px;
  height: 150px;
`;

export const SearchContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  position: absolute;
  top: 50px;
  z-index: 1000;
`;

export const SearchBox = styled.View`
  border-color: #ffffff70;
  width: 70%;
  height: 100%;
  border-width: 1px;
  border-radius: 10px;
  justify-content: center;
  padding: 5px;
`;

export const InputText = styled.TextInput`
  font-size: 20px;
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  color: ${Colors.WHITE}
`;

export const RenderFeatureImage = (props) => {
  return (
    <View style={Typography.WRAPPER_FEATURE_IMAGE}>
      <FastImage
        style={Typography.FEATURE_IMAGE_SIZE}
        source={{
          uri: getW1280ImageUrl(props.source),
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <CoverGradient />
      <TagWrapper>
        <Tag bgColor={Colors.DARK_GRAY_OPACITY}>
          <Icon
            name="star-outline"
            size={12}
            color={props.iconColor || Colors.WHITE}
          />
          <TagText color={Colors.WHITE}> {props.voteAverage}</TagText>
        </Tag>
        <Tag bgColor={Colors.SECONDARY}>
          <TagText color={Colors.BLACK}>{I18n.get(props.mediaType)}</TagText>
        </Tag>
        <Tag bgColor={Colors.DARK_GRAY_OPACITY}>
          <Icon
            name="thumbs-up-outline"
            size={12}
            color={props.iconColor || Colors.WHITE}
          />
          <TagText color={Colors.WHITE}> {props.voteCount}</TagText>
        </Tag>
      </TagWrapper>
      <TitleWrapper>
        <Title>{props.title}</Title>
      </TitleWrapper>
    </View>
  );
};
