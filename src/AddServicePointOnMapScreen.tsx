import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const AddServicePointOnMap = () => {
  const navigation = useNavigation();

  const [markerCoordinates, setMarkerCoordinates] = useState(null);

  const mapRef = useRef(null);

  const handleMapPress = (event) => {
    setMarkerCoordinates(event.nativeEvent.coordinate);
  };

  const handleMarkerDrag = (event) => {
    setMarkerCoordinates(event.nativeEvent.coordinate);
  };

  const handleContinuePress = () => {
    navigation.navigate('AddServiceConfirmation', { selectedLocation: markerCoordinates });
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        onPress={handleMapPress}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markerCoordinates && (
          <Marker
            draggable
            coordinate={markerCoordinates}
            onDragEnd={handleMarkerDrag}
          />
        )}
      </MapView>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          mapRef.current.animateToRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          });
          setMarkerCoordinates({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
          });
        }}
        fetchDetails
        query={{
          key: 'AIzaSyCsZwilTu70rfB6tfzQKbTaGY96gcgjk4c',
          language: 'en',
        }}
      />
      {markerCoordinates && (
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinuePress}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    backgroundColor: '#fff',
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
  // buttonContainer: {
  //   position: 'absolute',
  //   bottom: 50,
  //   left: 10,
  //   right: 10,
  //   alignItems: 'center',
  // },
  continueButton: {
    backgroundColor: '#0275d8',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export { AddServicePointOnMap }