// AccommodationsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const AccommodationsScreen = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order

  const navigation = useNavigation();

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        let url = "http://10.0.2.2:32772/api/accommodations";
        if (Platform.OS == "android") {
          url = "http://10.0.2.2:32772/api/accommodations";
        } else {
          url = "https://reizen.ddev.site//api/accommodations";
        }

        const response = await axios.get(url);

        if (response.data && Array.isArray(response.data.data)) {
          setAccommodations(response.data.data);
        } else {
          console.error("Invalid data structure in API response:", response.data);
        }
      } catch (error) {
        console.error("Error fetching accommodations:", error);
      }
    };

    fetchAccommodations();
  }, [sortOrder]); // Include sortOrder in dependency array

  const handleAccommodationPress = (accommodation) => {
    navigation.navigate('DetailsScreen', { accommodation });
  };

  const sortAccommodations = () => {
    const sortedAccommodations = [...accommodations].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);

      if (sortOrder === 'asc') {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

    setAccommodations(sortedAccommodations);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <ScrollView style={styles.container}>
              <TouchableOpacity onPress={sortAccommodations} style={styles.sortButton}>
          <Text>Sort by Price {sortOrder === 'asc' ? '▲' : '▼'}</Text>
        </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.centerContent} horizontal={false}>
        {accommodations.map((accommodation) => (
          <TouchableOpacity
            key={accommodation.id}
            style={styles.card}
            onPress={() => handleAccommodationPress(accommodation)}
          >
            <Image source={{ uri: accommodation.hotelimage?.replace('https://reizen.ddev.site', 'http://10.0.2.2:32772') }} style={styles.imageCard} />
            <Text style={styles.title}>{accommodation.title}</Text>
            <View style={styles.inlineContainer}>
              <Text style={styles.bold}>€{accommodation.price}</Text>
              <Text>{accommodation.cityName}</Text>
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

export default AccommodationsScreen;
