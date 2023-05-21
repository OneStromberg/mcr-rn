import React, { useRef } from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width } = Dimensions.get('window');

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



const Carousel1 = ({ mapRef, carouselRef }) => {
  const navigation = useNavigation<MapCarouselScreenNavigationProp>();

  const handleCarouselItemChange = (index: number) => {
    console.log('index', index);
    const location = mapData[index].coordinates;
    console.log('location', location, mapRef);
    mapRef?.current?.animateToRegion({
      ...location,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const handleCarouselItemClick = (index: number) => {
    navigation.navigate('ManicuristInfo', {
      manicurist: {
        name: 'Random text ' + index,
        rating: 1,
        numResponses: 1,
        distance: 1,
        description: "Bla bla"
      }
    });
  };

  const renderCarouselItem = ({ item, index }: { item; index: number }) => {
    const manicurist = {
      name: `Manicurist ${item.id}`,
      rating: Math.floor(Math.random() * 5) + 1,
      numResponses: Math.floor(Math.random() * 100),
      distance: `${Math.floor(Math.random() * 10)}km`,
    };

    return (
      <TouchableOpacity style={styles.carouselItem} onPress={() => handleCarouselItemClick(index)}>
        <View style={styles.manicuristInfo}>
          <Text style={styles.manicuristName}>{manicurist.name}</Text>
          <View style={styles.manicuristRatingContainer}>
            <Text style={styles.manicuristRating}>{manicurist.rating.toFixed(1)}</Text>
            {/* <Icon name="star" size={16} color="#FFC107" /> */}
          </View>
          <Text style={styles.manicuristNumResponses}>{manicurist.numResponses} responses</Text>
          <Text style={styles.manicuristDistance}>{manicurist.distance} from you</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        ref={carouselRef}
        data={mapData}
        renderItem={renderCarouselItem}
        sliderWidth={width}
        itemWidth={200}
        onSnapToItem={handleCarouselItemChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
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

export { Carousel1 }