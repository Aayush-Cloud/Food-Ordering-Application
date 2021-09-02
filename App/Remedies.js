import React from 'react';
import {View, StyleSheet} from 'react-native';

function Credits({navigation}) {
 return (
 <View style={styles.container}>
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Touch Me" onPress={navigation.navigate('Home')}/>
    </View>
 </View>
)

}
const styles= StyleSheet.create({
container: {}
});

export default Credits