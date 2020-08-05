/**
 *Intial entry point to the app through App.js
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from  './app/src/screens/SplashScreen'
import IndexScreen from  './app/src/screens/IndexScreen'
import CreateBlogScreen from './app/src/screens/createBlogScreen'
import EditBlogScreen from './app/src/screens/EditBlogScreen'
import ShowScreen from './app/src/screens/ShowScreen'
import {Context,Provider} from './app/src/context/BlogContext'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />

        <Stack.Screen
          name="IndexScreen"
          component={IndexScreen}
          options={{
            title: 'Home Screen',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="CreateBlogScreen"
          component={CreateBlogScreen}
          options={{
            title: 'Create Screen',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="EditBlogScreen"
          component={EditBlogScreen}
          options={{
            title: 'Edit Screen',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ShowScreen"
          component={ShowScreen}
          options={{
            title: 'BlogList',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
 }
  

export default () => {
  return( 
    <Provider>
    <App />
    </Provider>
  );
}
