// HomeScreen.js
import React from 'react';
import { ImageBackground, Image, ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FlightScreen from './FlightScreen';
import AccommodationsScreen from './AccommodationsScreen';


const image = { uri: 'https://ak-d.tripcdn.com/images/05E3s12000cmarxu50A1C.webp' };



const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Add your FlightScreen component */}
      <Text style={styles.headTitle}>Flights</Text>
      <ScrollView horizontal={true} style={styles.Flightcontainer}>
        <FlightScreen />
      </ScrollView>
      {/* Add your AccommodationsScreen component */}
      <Text style={styles.headTitle}>Accommodations</Text>
      <ScrollView horizontal={true} style={styles.Accommodationscontainer}>
        <AccommodationsScreen />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    marginTop: 0,
  },
  backgroundImage: {
    height: 120,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    marginLeft: 150,
    marginTop: 15,
  },
  Flightcontainer: {
    marginLeft: 16,
    marginRight: 8,
  },
  Accommodationscontainer: {
    marginLeft: 16,
    marginRight: 8,
  },
  headTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 16,
  },
});

export default HomeScreen;
