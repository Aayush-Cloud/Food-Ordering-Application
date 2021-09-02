import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from "./components/Text"
import Screen from './components/Screen'
function Home(props) {
 return (
 <Screen style={styles.container}>
     <Text>Check Your Mental Health</Text>
 </Screen>
)

}
const styles= StyleSheet.create({
container: {
    alignItems:'center',
    justifyContent: 'center'
    
}
});

export default Home