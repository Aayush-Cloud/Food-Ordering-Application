import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './App/Home'
import Remedies from './App/Remedies'

const Tab = createBottomTabNavigator()
const TabNavigator =()=> (

   
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Remedies" component={Remedies} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
  )



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const StackNavigator=() => (
   <Stack.Navigator initialRouteName={Home}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  );


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <TabNavigator/>
    </NavigationContainer>
  )
}
