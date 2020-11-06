import React, { useEffect, useState } from 'react';
import { RefreshControl, StatusBar, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { I18n } from '@aws-amplify/core';
import { Colors } from '../../styles';
import {
  loadMovieGenres,
  loadMoviesRequest,
  loadMoviesByGenre,
} from '../../redux/actions/main';
import { addFavorite, removeFavorite } from '../../redux/actions/favorites';
import { Container } from '../../components/organisms';
import { Movie, MoviesState } from '../../redux/actions/main/types';
import { HeroCard, Warning } from '../../components/molecules';

import {
  Background,
  Scroll,
  Section,
  RenderFeatureImage,
  SearchContainer,
  SearchBox,
  InputText,
  Row,
  Button,
  Text,
  ListMovies,
} from './components/MovieList/styles';

import { Picker } from './components';

export function homeNavigationOptions<Props>() {
  return {
    headerShown: false,
    headerTitle: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
}

const Home: React.FC = ({ navigation }) => {
  const dispatch = useDispatch();
  const { movies, genres, loading } = useSelector<MoviesState>((state) => state.main);
  const { savedFavorites } = useSelector((state) => state.favorites);
  const [offsetPopular, setOffsetPopular] = useState<number>(1);
  const [offsetFamily, setOffsetFamily] = useState<number>(1);
  const [offsetAnimation, setOffsetAnimation] = useState<number>(1);
  const [offsetAction, setOffsetAction] = useState<number>(1);
  const [offsetTerror, setOffsetTerror] = useState<number>(1);

  const [currentPicker, setCurrentPicker] = useState<Array>([]);

  useEffect(() => {
    dispatch(loadMovieGenres());
  }, [dispatch]);

  useEffect(() => {
    const genreName = 'popular';
    const field = 'popular';
    dispatch(loadMoviesRequest(offsetPopular, field, genreName));
  }, [dispatch, offsetPopular]);

  useEffect(() => {
    const genreName = 'familia';
    const field = '10751';
    dispatch(loadMoviesByGenre(offsetFamily, field, genreName));
  }, [dispatch, offsetFamily]);

  useEffect(() => {
    const genreName = 'animacao';
    const field = '16';
    dispatch(loadMoviesByGenre(offsetAnimation, field, genreName));
  }, [dispatch, offsetAnimation]);

  useEffect(() => {
    const genreName = 'acao';
    const field = '28';
    dispatch(loadMoviesByGenre(offsetAction, field, genreName));
  }, [dispatch, offsetAction]);

  useEffect(() => {
    const genreName = 'terror';
    const field = '27';
    dispatch(loadMoviesByGenre(offsetTerror, field, genreName));
  }, [dispatch, offsetTerror]);

  const handleFavorite = (item: Hero) => {
    const isFavorite = savedFavorites.findIndex((x: any) => x.id === item.id);
    console.log(savedFavorites);
    if (isFavorite >= 0) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  };

  const renderItem = (item: any) => {
    const uniqueId = item.id.toString() + Math.random();
    return (
      <HeroCard
        onPress={() => {
          navigation.navigate('Detail', {
            item: item,
            uniqueId: uniqueId,
          });
        }}
        uniqueId={uniqueId}
        name={item.title}
        imageSource={item.poster_path}
        favorite={
          savedFavorites.findIndex((x: any) => x.id === item.id) >= 0
            ? true
            : false
        }
        favoriteOnpress={() => handleFavorite(item)}
      />
    );
  };

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor={Colors.BLACK} />
      <Scroll>
        <SearchContainer>
          <Text>kakakka</Text>
          <SearchBox>
            {/* <InputText
              placeholder={I18n.get('Search your movie')}
              placeholderTextColor="#ffffff85"
            /> */}
            <Picker
              placeholder={{
                label: I18n.get('Choose a category'),
                value: null,
                color: '#9EA0A4',
              }}
              items={genres}
              onValueChange={(value) => setCurrentPicker(value)}
              value={currentPicker}
              // onUpArrow={() => {
              //   this.inputRefs.firstTextInput.focus();
              // }}
              // onDownArrow={() => {
              //   this.inputRefs.favSport1.togglePicker();
              // }}
              //style={pickerSelectStyles}
              // ref={el => {
              //   this.inputRefs.favSport0 = el;
              // }}
            />
          </SearchBox>
        </SearchContainer>
        <RenderFeatureImage
          title={movies.popular[0]?.title}
          source={movies.popular[0]?.backdrop_path}
          voteAverage={movies.popular[0]?.vote_average}
          mediaType={movies.popular[0]?.media_type}
          voteCount={movies.popular[0]?.vote_count}
        />
        <Row align="center">
          <Button
            icon="add-outline"
            text="Salvar"
            //onPress={() => console.log('pressed')}
            onPress={() => {
              navigation.navigate('Detail', {
                item: movies.popular[0],
                uniqueId: movies.popular[0]?.id.toString(),
                featured: true,
              });
            }}
          />
          <Button
            bgColor={
              savedFavorites.findIndex(
                (x: any) => x.id === movies.popular[0]?.id,
              ) >= 0
                ? Colors.GREEN
                : false
            }
            //icon="heart-outline"
            icon={
              savedFavorites.findIndex(
                (x: any) => x.id === movies.popular[0]?.id,
              ) >= 0
                ? 'thumbs-up-outline'
                : 'heart-outline'
            }
            text={I18n.get('Favorite')}
            onPress={() => handleFavorite(movies.popular[0])}
          />
          <Button
            bgColor={Colors.PRIMARY}
            icon="videocam-outline"
            text="Trailer"
            onPress={() => console.log('pressed')}
          />
        </Row>
        <Section>
          <Text>{I18n.get('Family')}</Text>
          <ListMovies
            data={movies.familia}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item: any) => `${item.backdrop_path}`}
            onEndReached={() => setOffsetFamily(offsetFamily + 1)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            // Performance settings
            removeClippedSubviews={true}
            initialNumToRender={5}
            maxToRenderPerBatch={10}
            windowSize={10}
          />
        </Section>
        <Section>
          <Text>{I18n.get('Popular')}</Text>
          <ListMovies
            data={movies.popular}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item: any) => `${item.backdrop_path}`}
            onEndReached={() => setOffsetPopular(offsetPopular + 1)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            // Performance settings
            removeClippedSubviews={true}
            initialNumToRender={5}
            maxToRenderPerBatch={10}
            windowSize={10}
          />
        </Section>
        <Section>
          <Text>{I18n.get('Action')}</Text>
          <ListMovies
            data={movies.acao}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item: any) => `${item.backdrop_path}`}
            onEndReached={() => setOffsetAction(offsetAction + 1)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            // Performance settings
            removeClippedSubviews={true}
            initialNumToRender={5}
            maxToRenderPerBatch={10}
            windowSize={10}
          />
        </Section>
        <Section>
          <Text>{I18n.get('Animações')}</Text>
          <ListMovies
            data={movies.animacao}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item: any) => `${item.backdrop_path}`}
            onEndReached={() => setOffsetAnimation(offsetAnimation + 1)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            // Performance settings
            removeClippedSubviews={true}
            initialNumToRender={5}
            maxToRenderPerBatch={10}
            windowSize={10}
          />
        </Section>
        <Section>
          <Text>{I18n.get('Terror')}</Text>
          <ListMovies
            data={movies.terror}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item: any) => `${item.backdrop_path}`}
            onEndReached={() => setOffsetTerror(offsetTerror + 1)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            // Performance settings
            removeClippedSubviews={true}
            initialNumToRender={5}
            maxToRenderPerBatch={10}
            windowSize={10}
          />
        </Section>
      </Scroll>
    </Background>
  );
};

export default Home;
