import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';

const getRandomTime = () => {
  const hour = Math.floor(Math.random() * 24);
  const minute = ["15", "30", "45", "00"][Math.floor(Math.random() * 3)];
  const nextHour = hour + 2 % 24;
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} -> ${nextHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
};

const RequestAppointmentScreen = () => {
  const [items, setItems] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const timeToString = (time: number) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  const fetchAppointmentsData = async (day) => {
    console.log('day', day)
    // simulate async data loading
    const items = {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: 100,
              day: strTime,
              time: getRandomTime()
            });
          }
        }
      }

      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderDay = (day) => {
    return (
      <View removeClippedSubviews={false} style={styles.dayContainer}>
        {day && <Text style={styles.dayText}>{day.toISOString().split('T')[0]}</Text>}
      </View>
    )
  }

  const handleItemPress = (item) => {
    console.log('item', item);
    if (!item) return;
    // const date = new Date(item);
    // const selectedTime = date.getUTCHours + ":" + date.getUTCMinutes();
    navigation.navigate('ConfirmRequest', { selectedDate: item.day, selectedTime: item.time });
  }

  const renderItem = (item) => {
    return (
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTextTime}>{item.time}</Text>
          {/* <Text style={styles.itemTextDay}>{item.day}</Text> */}
        </View>
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Agenda
      items={items}
      minDate={'2023-04-26'}
      selected={'2023-04-26'}
      renderDay={renderDay}
      renderItem={renderItem}
      loadItemsForMonth={fetchAppointmentsData}
    />
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  dayContainer: {
    width: 150,
    paddingLeft: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderStyle: 'solid'
  },
  dayText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center'
  },
  itemContainer: {
    position: 'relative',
    height: 100,
    margin: 10
  },
  itemTextDay: {
    position: 'absolute',
    width: '100%',
    top: 0,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '400',
    color: '#333'
  },
  itemTextTime: {
    position: 'absolute',
    width: '100%',
    top: 0,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '400',
    color: '#333'
  }
});

export { RequestAppointmentScreen };