import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ManicuristInfoScreen = ({ route }: { route: any }) => {
    const { manicurist } = route.params;
    const navigation = useNavigation();
    console.log('manicurist', manicurist);
    const handleRequestAppointment = () => {
        navigation.navigate('SelectServices', { manicurist });
    };

    return (
        <View style={styles.container}>
            <View style={styles.manicuristInfo}>
                <Text style={styles.manicuristName}>{manicurist.name}</Text>
                <View style={styles.manicuristRatingContainer}>
                    <Text style={styles.manicuristRating}>{manicurist.rating.toFixed(1)}</Text>
                    <Text style={styles.manicuristNumResponses}>{manicurist.numResponses} responses</Text>
                </View>
                <Text style={styles.manicuristDistance}>{manicurist.distance} from you</Text>
                <Text style={styles.manicuristDescription}>{manicurist.description}</Text>
            </View>
            <TouchableOpacity style={styles.requestButton} onPress={handleRequestAppointment}>
                <Text style={styles.requestButtonText}>Request Appointment</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    manicuristInfo: {
        marginBottom: 20,
    },
    manicuristName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    manicuristRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    manicuristRating: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 5,
    },
    manicuristNumResponses: {
        fontSize: 16,
        color: '#777',
    },
    manicuristDistance: {
        fontSize: 16,
        color: '#777',
        marginBottom: 20,
    },
    manicuristDescription: {
        fontSize: 16,
        lineHeight: 24,
    },
    requestButton: {
        backgroundColor: '#FFC107',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    requestButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export { ManicuristInfoScreen }; 