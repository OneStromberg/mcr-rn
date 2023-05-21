import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const services = [
  { id: '1', name: 'Manicure', price: 10 },
  { id: '2', name: 'Pedicure', price: 15 },
  { id: '3', name: 'Acrylic Nails', price: 20 },
  { id: '4', name: 'Gel Nails', price: 25 },
];

const AddServiceScreen = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const navigation = useNavigation();
  
  const toggleService = (id) => {
    const selected = selectedServices.includes(id);
    if (selected) {
      setSelectedServices(selectedServices.filter((service) => service !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const canSubmit = selectedServices.length > 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Services:</Text>
      {services.map((service) => (
        <TouchableOpacity
          key={service.id}
          style={[
            styles.service,
            selectedServices.includes(service.id) && styles.selectedService,
          ]}
          onPress={() => toggleService(service.id)}
        >
          <Text style={styles.serviceName}>{service.name}</Text>
          <Text style={styles.servicePrice}>${service.price}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={[styles.button, !canSubmit && styles.disabledButton]}
        onPress={() => canSubmit && navigation.navigate('AddServicePointOnMap')}
        disabled={!canSubmit}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  service: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginVertical: 5,
  },
  selectedService: {
    backgroundColor: 'lightblue',
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  servicePrice: {
    fontSize: 18,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export { AddServiceScreen };