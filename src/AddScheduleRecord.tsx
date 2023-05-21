import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const AddScheduleRecordScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [duration, setDuration] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const showPicker = () => {
    if (Platform.OS === 'android') {
      showDateTimePickerAndroid();
      // For Android devices, show the datetime picker as a modal dialog
    } else {
      // For iOS devices, push a new screen containing the datetime picker
      // navigation.push('DateTimePickerScreen', { date, onChange });
    }
  };

  const showDateTimePickerAndroid = () => {
    RNDateTimePicker.show({
      mode: 'datetime',
      value: date,
      is24Hour: true,
      display: 'default',
    }, onChange);
  };

  const onConfirm = () => {
    // Do something with the selected date and duration
    // Then navigate back to the MyScheduleReviewScreen
    navigation.navigate('MyScheduleReview');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.datePickerContainer} onPress={showPicker}>
        <Text style={styles.label}>Date:</Text>

        <RNDateTimePicker value={new Date()} mode="date" />
        <Text style={styles.value}>{date.toString()}</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Duration (in minutes):</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDuration}
          value={duration}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 16,
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export { AddScheduleRecordScreen };