import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, ScrollView } from 'react-native';
import { COLORS } from './constants';
import Header from './src/components/Header';
import Categories from './src/components/Categories';
import Popular from './src/components/popular';
import ProductDetail from './src/components/ProductDetail';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 24,
        paddingTop: 55,
        paddingBottom: 75,
        backgroundColor: COLORS.black,
      }}
    >
      <Header />
      <Categories />
      <Popular navigation={navigation} />
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.black },
          headerTintColor: COLORS.white,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
