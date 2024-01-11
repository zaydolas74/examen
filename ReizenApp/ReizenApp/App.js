import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, Image, ScrollView, StyleSheet, Platform, ImageBackground, TouchableOpacity, AntDesign } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; // Voeg createStackNavigator toe
import FlightScreen from './screens/FlightScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AccommodationsScreen from './screens/AccommodationsScreen';

const image = { uri: 'https://ak-d.tripcdn.com/images/05E3s12000cmarxu50A1C.webp' };

// Define your FlightsScreen and AccommodationsScreen components here if not already done
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Voeg createStackNavigator toe

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" options={{ headerShown: false }} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [flightEntries, setFlightEntries] = useState([]);
  const [accommodations, setAccommodations] = useState([]);

  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarIcon: ({ focused }) => (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <AntDesign name="D" size={24} color="RED" />
      </View>
    ),
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      backgroundColor: "red",
    }
  };

  return (
    <NavigationContainer>
      <ImageBackground source={image} resizeMode="cover" style={styles.backgroundImage}>
        <Image source={require('./assets/Logo-travel.png')} style={styles.logo} />
      </ImageBackground>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBarOptions={{
          activeTintColor: '#144ddd',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 12,
          },
          style: {
            backgroundColor: 'red',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack} // Use HomeStack here
          screenOptions={{
            headerShown: false,
          }}
          options={{
            tabBarIcon: ({ size }) => (
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2544/2544056.png' }}
                style={{ width: size, height: size }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Flights"
          component={FlightScreen}
          options={{
            tabBarLabel: 'Flights',
            tabBarIcon: ({ size }) => (
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3125/3125713.png' }}
                style={{ width: size, height: size }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Accommodations"
          component={AccommodationsScreen}
          options={{
            tabBarLabel: 'Accommodations',
            tabBarIcon: ({ size }) => (
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3009/3009489.png' }}
                style={{ width: size, height: size }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
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
  card: {
    marginRight: 16,
    borderRadius: 8,
    width: 300,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    paddingBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 16,
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

export default App;
