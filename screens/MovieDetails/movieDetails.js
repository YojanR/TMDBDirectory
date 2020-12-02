import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  ImageBackground,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import Genres from '../src/GenresForDetails';
import { LinearGradient } from 'expo-linear-gradient';

const ITEM_SIZE = width;
const BACKDROP_HEIGHT = height ;

export default function MovieDetails({ route, navigation }) {
  const { key, title, poster, releaseDate, rating, description, genres } = route.params;
  return (
    <View style={{ width: ITEM_SIZE, backgroundColor:'white' }}>
      <ImageBackground
        source={{ uri: poster}}
        style={{
          width,
          height: BACKDROP_HEIGHT,
          position: 'absolute',
        }}
      >
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'white']}
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: 'absolute',
          bottom: 0,
        }}
      />
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <Text style={{ fontSize: 24}} numberOfLines={1}>
        {title}
      </Text>
      <Text style={{ fontSize: 14 }} numberOfLines={1}>
        Calificación: {rating}
      </Text>
      <Genres genres={genres} />
      <Text style={{ fontSize: 14 }} numberOfLines={2}>
        Fecha de estreno: {releaseDate}
      </Text>
      <Text style={{ fontSize: 14 }} numberOfLines={20}>
        Descripción: {description}
       </Text>
      <Text style={{ fontSize: 24 }} numberOfLines={20}>
       </Text>
       </View>
       </ImageBackground>
    </View>
  );
}//El text en la linea 64 ayuda a subir el resto del texto

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
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
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});