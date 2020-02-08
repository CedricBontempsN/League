import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Components/Search'
import Menu from './Components/Menu'

export default class App extends React.Component {
  render() {
    return (

      <View>
        <Menu style={styles.liste}/>
      </View>
    )
  }
}

//<View style={styles.container}>
//  <Text>oui !</Text>
//<Search style={styles.liste}/>

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  liste:{
    flex:1,
    alignItems:'flex-end',
    justifyContent:'center'
  }
});
