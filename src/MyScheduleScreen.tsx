import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const MyScheduleScreen = () => {
  const [items, setItems] = useState({});
  const navigation = useNavigation();

  const loadItems = (day) => {
    // Call an API to get the available time slots and appointments for the selected day
    // and update the 'items' state object
    // The 'items' state object should be in the format required by the Agenda component
    setItems({
      [day.dateString]: [
        { name: 'Available Time Slot', time: '09:00 AM - 10:00 AM' },
        { name: 'Appointment', time: '11:00 AM - 12:00 PM' },
      ],
    });
  };

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemTime}>{item.time}</Text>
      </View>
    );
  };

  const addScheduleRecord = () => {
    console.log("Press");
    navigation.navigate('AddScheduleRecord');
  };

  return (
    <View style={styles.container}>
      <Agenda items={items} loadItemsForMonth={loadItems} renderItem={renderItem} />
      <View style={styles.addScheduleRecordButton}>
        <TouchableOpacity style={styles.addScheduleRecordButtonContainer} onPress={addScheduleRecord}>
          <Text style={styles.addScheduleRecordButtonLabel}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemTime: {
    fontSize: 14,
    color: '#888',
  },
  addScheduleRecordButtonContainer: {
    padding: 15,
    paddingTop: 18,
    borderRadius: 32,
    width: 64,
    height: 64,
    backgroundColor: 'blue',
  },
  addScheduleRecordButton: {
    bottom: 50,
    right: 32,
    position: 'absolute'
  },
  addScheduleRecordButtonLabel: {
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    color: 'white'
  }
});

export { MyScheduleScreen };