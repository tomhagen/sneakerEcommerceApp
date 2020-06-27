import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import SigninScreen from '../screens/Signin';
import ProductDetailScreen from '../screens/ProductDetail';
import SignupScreen from '../screens/Signup';
import PaymentScreen from '../screens/Payment';
import FavoritesScreen from '../screens/Favorites';
import StoresScreen from '../screens/Stores';
import CartScreen from '../screens/Cart';
import ProfileScreen from '../screens/Profile';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#F9446C',
        inactiveTintColor: '#999A9D',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => (
            <Icon name="home" size={25} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: (props) => (
            <Icon name="hearto" size={25} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Stores"
        component={StoresScreen}
        options={{
          tabBarIcon: (props) => (
            <Icon name="sharealt" size={25} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: (props) => (
            <Icon name="shoppingcart" size={25} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: (props) => (
            <Icon name="user" size={25} color={props.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" component={BottomTab} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
