import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Text, ListItem, CheckBox } from 'react-native-elements';

const services = [
  { id: 1, name: 'Manicure' },
  { id: 2, name: 'Pedicure' },
  { id: 3, name: 'Nail Art' },
  // Add more services as needed
];

const countries = [
  { id: 1, name: 'Country 1' },
  { id: 2, name: 'Country 2' },
  { id: 3, name: 'Country 3' },
  // Add more countries as needed
];

const SignUp = () => {
  const [serviceName, setServiceName] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [city, setCity] = useState('');

  const handleServiceSelection = (service) => {
    const isSelected = selectedServices.some((s) => s.id === service.id);
    if (isSelected) {
      const updatedServices = selectedServices.filter((s) => s.id !== service.id);
      setSelectedServices(updatedServices);
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
  };

  const handleCreate = () => {
    // Handle create button press
    console.log('Service Name:', serviceName);
    console.log('Selected Services:', selectedServices);
    console.log('Selected Country:', selectedCountry);
    console.log('City:', city);
  };

  return (
    <View style={styles.container}>
      <Text h4 style={styles.title}>Service Form</Text>
      <Input
        label="Service Name"
        value={serviceName}
        onChangeText={setServiceName}
      />
      <Text h6 style={styles.subtitle}>Select Services:</Text>
      {services.map((service) => (
        <ListItem
          key={service.id}
          title={service.name}
          onPress={() => handleServiceSelection(service)}
          checkBox={{
            checked: selectedServices.some((s) => s.id === service.id),
            onPress: () => handleServiceSelection(service),
          }}
        />
      ))}
      <Text h6 style={styles.subtitle}>Select Country:</Text>
      {countries.map((country) => (
        <ListItem
          key={country.id}
          title={country.name}
          onPress={() => handleCountrySelection(country)}
          checkBox={{
            checked: selectedCountry?.id === country.id,
            onPress: () => handleCountrySelection(country),
          }}
        />
      ))}
      <Input
        label="Type name of the city"
        value={city}
        onChangeText={setCity}
      />
      <Button
        title="Create"
        onPress={handleCreate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 5,
  },
});

export { SignUp };