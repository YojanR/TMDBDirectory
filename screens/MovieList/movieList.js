import * as React from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  Platform,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { getMovies } from '../src/api';
import Genres from '../src/Genres';
import Rating from '../src/Rating';

const SPACING = 4;
const COLUMN_NUMBER = 2;
const ITEM_SIZE =  width * 0.5;
const EMPTY_ITEM_SIZE = 0;

const Loading = () => (
  <View style={styles.loadingContainer}>
    <Text style={styles.paragraph}>Loading...</Text>
  </View>
);

export default function MovieList({navigation}) {
  const [movies, setMovies] = React.useState([]);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies();
      // Add empty items to create fake space
      // [empty_item, ...movies, empty_item]
      setMovies([ ...movies]);
    };

    if (movies.length === 0) {
      fetchData(movies);
    }
  }, [movies]);

  if (movies.length === 0) {
    return <Loading />;
  }

  return (
    <View >
      <StatusBar hidden />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.key} 
        numColumns= {COLUMN_NUMBER}
        renderItem={({ item, index }) => {
          if (!item.poster) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />;
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: 'clamp',
          });

          return (
            <View style={{ width: ITEM_SIZE, backgroundColor:'black' }}>
              <TouchableOpacity
                style={{
                  marginHorizontal: SPACING,
                  alignItems: 'center',
                  backgroundColor: 'black',
                  borderRadius: 5,
                }}
                onPress={() => navigation.navigate('MovieDetail', { 
                  key: item.key,
                  title: item.title,
                  poster: item.poster,
                  backdrop: item.backdrop,
                  rating: item.rating,
                  description: item.description,
                  releaseDate: item.releaseDate,
                  genres: item.genres,
                })}
              >
                <Image
                  source={{ uri: item.poster }}
                  style={styles.posterImage}
                />
                <Text style={{ fontSize: 24, color:'white' }} numberOfLines={1}>
                  {item.title}
                </Text>
                <Rating rating={item.rating} />
                <Genres genres={item.genres} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 10,
    margin: 0,
    marginBottom: 10,
  },
});