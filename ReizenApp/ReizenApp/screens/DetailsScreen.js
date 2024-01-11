import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const DetailsScreen = ({ route }) => {
  const { flight, accommodation } = route.params;

  return (
    <ScrollView style={styles.container}>
 {flight && (
    <>
      <Image source={{ uri: flight.countryimage?.replace('https://reizen.ddev.site', 'http://10.0.2.2:32772') }} style={styles.image} />
      <View style={styles.ContainerAllInfo}>
      <View style={styles.detailsContainer}>
      <Text style={styles.title}>{flight.countryName}</Text>
      <Text style={styles.subtitle}>{flight.cityName}</Text>
      </View>
      <Text style={styles.description}>{flight.description}</Text>

      <View style={styles.detailsContainer}>
          <Text style={styles.price}>€ {flight.price}</Text>
          <Text style={styles.detailText}>{flight.travelTime} Hours</Text>
      </View>

      <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>{flight.company}</Text>
          <Text style={styles.detailText}>{flight.flightName}</Text>
      </View>
      </View>
    </>
  )}

{accommodation && (
  <>
    <Image
      source={{
        uri: accommodation.hotelimage?.replace(
          'https://reizen.ddev.site',
          'http://10.0.2.2:32772'
        ),
      }}
      style={styles.image}
    />
    <View style={styles.ContainerAllInfo}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{accommodation.hotelName}</Text>
        <Text style={styles.subtitle}>{accommodation.countryName}</Text>
      </View>
      <Text style={styles.description}>{accommodation.description}</Text>

      <View style={styles.detailsContainer}>
        <Text style={styles.price}>€ {accommodation.price}</Text>
        <Text style={styles.detailTextRight}>{accommodation.cityName} </Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>{accommodation.address}</Text>
        <Text style={styles.detailTextRight}>{accommodation.contactDetails}</Text>
      </View>
    </View>
  </>
)}
      <View style={styles.ButtonContainer}>
        <Text style={styles.Button}>Book now</Text>
      </View>
    </ScrollView>
  );

  
  
};

const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
    image: {
      width: '100%',
      height: 200,
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    subtitle: {
      fontSize: 16,
      fontWeight: 'normal',
      marginVertical: 5,
    },
    description: {
      fontSize: 16,
      fontWeight: 'normal',
      marginVertical: 5,
    },
    price: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 5,
    },
    travelTime: {
      fontSize: 16,
      fontWeight: 'normal',
      marginVertical: 5,
    },
    company: {
      fontSize: 16,
      fontWeight: 'normal',
      marginVertical: 5,
    },
    flightName: {
      fontSize: 16,
      fontWeight: 'normal',
      marginVertical: 5,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems     : 'center',
        width: '100%',
        marginVertical: 5,
      },
      detailItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5,
      },
      detailText: {
        fontSize: 16,
        fontWeight: 'normal',
        width: '50%',
      },
      detailTextRight: {
        fontSize: 16,
        fontWeight: 'normal',
        width: '50%',
        textAlign: 'right',
      },
      ContainerAllInfo: {
        padding: 16,
      },
        ButtonContainer: {
            backgroundColor: '#144ddd',
            paddingTop: 12,
            paddingBottom: 12,
            borderRadius: 32,
            margin: 16,
            marginTop: 0,
        },
        Button: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
        },
  });

export default DetailsScreen;
