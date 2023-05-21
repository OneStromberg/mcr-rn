import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConfirmRequestScreen = ({ route }) => {
  const { selectedDate, selectedTime } = route.params;
  const navigation = useNavigation();

  const handleConfirmation = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>You have requested an appointment on:</Text>
      <Text style={styles.date}>{selectedDate}</Text>
      <Text style={styles.text}>at</Text>
      <Text style={styles.time}>{selectedTime}</Text>
      <Text style={styles.text}>We will get back to you soon to confirm your appointment.</Text>
      <TouchableOpacity style={styles.button} onPress={handleConfirmation}>
        <Text style={styles.buttonText}>Confirmed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 10,
  },
  date: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  time: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#28A745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export { ConfirmRequestScreen };