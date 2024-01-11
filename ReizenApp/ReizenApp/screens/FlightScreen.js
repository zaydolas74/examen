// FlightScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const image = { uri: 'https://ak-d.tripcdn.com/images/05E3s12000cmarxu50A1C.webp' };

const FlightScreen = () => {
  const [flights, setFlights] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order

  const navigation = useNavigation();

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        let url = "http://10.0.2.2:32772/api/flight";
        if (Platform.OS == "android") {
          url = "http://10.0.2.2:32772/api/flight";
        } else {
          url = "https://reizen.ddev.site//api/flight";
        }

        const response = await axios.get(url);

        if (response.data && Array.isArray(response.data.data)) {
          setFlights(response.data.data);
        } else {
          console.error("Invalid data structure in API response:", response.data);
        }
      } catch (error) {
        console.error("Error fetching flights:", error);
      }
    };

    fetchFlights();
  }, [sortOrder]); // Include sortOrder in dependency array

  const handleFlightPress = (flight) => {
    navigation.navigate('DetailsScreen', { flight });
  };

  const sortFlights = () => {
    const sortedFlights = [...flights].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);

      if (sortOrder === 'asc') {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

    setFlights(sortedFlights);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <ScrollView style={styles.container}>
                <TouchableOpacity onPress={sortFlights} style={styles.sortButton}>
          <Text>Sort by Price {sortOrder === 'asc' ? '▲' : '▼'}</Text>
        </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.centerContent} horizontal={false}>
        {flights.map((flight) => (
          <TouchableOpacity
            key={flight.id}
            style={styles.card}
            onPress={() => handleFlightPress(flight)}
          >
            <Image source={{ uri: flight.countryimage?.replace('https://reizen.ddev.site', 'http://10.0.2.2:32772') }} style={styles.imageCard} />
            <Text style={styles.title}>{flight.title}</Text>
            <View style={styles.inlineContainer}>
              <Text style={styles.bold}>€{flight.price}</Text>
              <Text>{flight.cityName}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 16,
  },
  centerContent: {
    flexDirection: 'row', // Change to row for horizontal layout
    flexWrap: 'wrap', // Allow items to wrap to the next line
    justifyContent: 'center',
  },
  headTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 46,
    marginTop: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 16,
  },
  card: {
    marginRight: 16,
    borderRadius: 8,
    width: 300,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    paddingBottom: 8,
    marginBottom: 16,
  },
  imageCard: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 8,
  },
  inlineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
    marginRight: 16,
  },
  bold: {
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default FlightScreen;
