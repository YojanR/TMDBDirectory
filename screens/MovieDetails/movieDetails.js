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
import { getMovies } from '../src/api';
import Genres from '../src/GenresForDetails';
import { LinearGradient } from 'expo-linear-gradient';

const SPACING = 10;
const ITEM_SIZE = width;
const BACKDROP_HEIGHT = height ;

export default function MovieDetails() {
  return (
    <View style={{ width: ITEM_SIZE, backgroundColor:'white' }}>
      <ImageBackground
        source={{ uri: 'https://image.tmdb.org/t/p/w440_and_h660_face/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg' }}
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
      <Text style={{ fontSize: 24, justifyContent:'center'}} numberOfLines={3}>
        Titulo
      </Text>
      <Text style={{ fontSize: 12 }} numberOfLines={1}>
        Calificación:
      </Text>
      <Text>Géneros:</Text>
      <Text style={{ fontSize: 12 }} numberOfLines={2}>
        Fecha de estreno:
      </Text>
      <Text style={{ fontSize: 12 }} numberOfLines={1}>
        Calificación:
      </Text>
      <Text style={{ fontSize: 12 }} numberOfLines={1}>
        Calificación:
      </Text>
      <Text style={{ fontSize: 12 }} numberOfLines={1}>
        Calificación:
      </Text>
      <Text style={{ fontSize: 12 }} numberOfLines={20}>
        Descripción:
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