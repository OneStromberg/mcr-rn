import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const AddServiceConfirmationScreen = ({ navigation, route }) => {
  const { selectedServices, selectedLocation } = route.params;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: selectedLocation.latitude,
          longitude: selectedLocation.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        pointerEvents="none"
      >
        <Marker
          coordinate={{
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude,
          }}
        />
      </MapView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Selected Services:</Text>
      </View>
      <View style={styles.serviceList}>
        {[{ id: '1', name: 'Manicure', price: 10 },
        { id: '2', name: 'Pedicure', price: 15 }].map((service, index) => (
          <Text key={index} style={styles.service}>
            {service.name}
          </Text>
        ))}
      </View>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  serviceList: {
    position: 'absolute',
    top: 70,
    left: 20,
    right: 20,
    padding: 10,
    borderRadius: 10,
    width: '90%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  service: {
    fontSize: 16,
    marginBottom: 5,
  },
  confirmButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export { AddServiceConfirmationScreen };