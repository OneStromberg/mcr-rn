import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface SelectServiceProps {
  navigation: any;
}

const services = [
  {
    id: 1,
    name: 'Manicure',
    price: 20,
  },
  {
    id: 2,
    name: 'Pedicure',
    price: 30,
  },
  {
    id: 3,
    name: 'Nail Art',
    price: 10,
  },
];

const SelectServicesScreen = ({ navigation }: SelectServiceProps) => {

  const route = useRoute();
  const { manicurist } = route.params;

  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  const handleServiceSelect = (serviceId: number) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter((id) => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const handleRequestAppointment = () => {
    navigation.navigate('RequestAppointment', { manicurist });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Services</Text>
      {services.map((service) => (
        <TouchableOpacity
          key={service.id}
          style={[
            styles.serviceItem,
            selectedServices.includes(service.id) && styles.selectedItem,
          ]}
          onPress={() => handleServiceSelect(service.id)}
        >
          <Text style={styles.serviceName}>{service.name}</Text>
          <Text style={styles.servicePrice}>${service.price}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.requestButton}
        onPress={handleRequestAppointment}
        disabled={!selectedServices.length}
      >
        <Text style={styles.requestButtonText}>Request an Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedItem: {
    backgroundColor: '#c1e4ff',
    borderColor: '#007aff',
  },
  serviceName: {
    flex: 1,
    fontWeight: 'bold',
    marginRight: 10,
  },
  servicePrice: {
    fontWeight: 'bold',
  },
  requestButton: {
    alignSelf: 'center',
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  requestButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export { SelectServicesScreen };