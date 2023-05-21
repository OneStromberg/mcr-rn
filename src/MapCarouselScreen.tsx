
import React, { useRef } from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Button } from 'react-native';

import { Carousel1 } from './Carousel';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const mapData = [
  {
    id: 1,
    title: 'Location 1',
    coordinates: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: 'Location 2',
    coordinates: {
      latitude: 37.75825,
      longitude: -122.4624,
    },
  },
  {
    id: 3,
    title: 'Location 3',
    coordinates: {
      latitude: 37.72825,
      longitude: -122.4924,
    },
  },
];

type Manicurist = {
  name: string;
  rating: number;
  numResponses: number;
  distance: number;
  description: string;
}

type MapCarouselStackParamList = {
  MapCarousel: undefined;
  ManicuristInfo: { manicurist: Manicurist };
};

type MapCarouselScreenNavigationProp = NativeStackNavigationProp<MapCarouselStackParamList, 'MapCarousel'>;

const MapCarousel = () => {
  const mapRef = useRef(null);
  const carouselRef = useRef(null);
  const navigation = useNavigation();

  const handleMarkerPress = (index: number) => {
    carouselRef?.current?.snapToItem(index);
  };

  const renderMapMarkers = () =>
    mapData.map((location) => (
      <Marker
        key={location.id}
        coordinate={location.coordinates}
        onPress={() => handleMarkerPress(location.id - 1)}
      />
    ));

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {renderMapMarkers()}
      </MapView>
      <View style={styles.carouselContainer}>
        <Carousel1 carouselRef={carouselRef} mapRef={mapRef} />
        <TouchableOpacity onPress={() => {
          navigation.navigate("Settings");
        }}>
          <Text>
            Click
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    zIndex: -1,
  },
  carouselItem: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  manicuristInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  manicuristName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  manicuristRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  manicuristRating: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
  },
  manicuristNumResponses: {
    fontSize: 12,
    color: '#777',
    marginBottom: 5,
  },
  manicuristDistance: {
    fontSize: 12,
    color: '#777',
  },
  carouselContainer: {
    position: 'absolute',
    bottom: 32,
    left: 0,
    right: 0
  }
});

const MapFilter = () => {
  return (
    <Text>MapFilter</Text>
  )
}

const ServiceScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen name="MapCarousel" component={MapCarousel} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Settings" component={MapFilter} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export { ServiceScreen }