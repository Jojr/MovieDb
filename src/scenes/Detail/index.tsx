import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';
import { Colors } from '../../styles';
import { addFavorite, removeFavorite } from '../../redux/actions/favorites';
import { Background, Container } from '../../components/organisms';
import { Movie } from '../../redux/actions/main/types';
import { HeroDetail } from '../../components/molecules';

export function detailNavigationOptions({ navigation }) {
  return {
    headerShown: false,
  };
}

const Detail: React.FC = ({ navigation }) => {
  const item = navigation.getParam<Movie>('item');
  const uniqueId = navigation.getParam('uniqueId');
  const featured = navigation.getParam('featured');
  const dispatch = useDispatch();
  const { savedFavorites } = useSelector((state) => state.favorites);

  const handleFavorite = () => {
    const isFavorite = savedFavorites.findIndex((x: any) => x.id === item.id);
    console.log(savedFavorites);
    if (isFavorite >= 0) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor={Colors.BLACK} />
      <Container>
        <HeroDetail
          uniqueId={uniqueId}
          onPress={() => navigation.goBack()}
          name={item.title}
          imageSource={featured ? item.backdrop_path : item.poster_path}
          favorite={
            savedFavorites.findIndex((x: any) => x.id === item.id) >= 0
              ? true
              : false
          }
          description={item.overview}
          favoriteOnpress={() => handleFavorite(item)}
        />
      </Container>
    </Background>
  );
};

Detail.sharedElements = (navigation, otherNavigation, showing) => {
  const uniqueId = navigation.getParam('uniqueId');
  return [uniqueId];
};

export default Detail;
