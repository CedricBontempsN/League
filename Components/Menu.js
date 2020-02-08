import React from 'react'
import {StyleSheet, Text, Image, View, TextInput, Button, TouchableOpacity } from 'react-native'

class Menu extends React.Component {
  handleClick(e) {
    console.log(e)

    if(e.target=3515){
      console.log(e.target)
      console.log("1")
    }
    else if(e.target=3529){
      console.log(e.target)
      console.log("2")
    }
    else if(e.target=3545){
      console.log(e.target)
      console.log("3")
    }
    else{
      console.log("erre")
    }
  }

  champ(e) {
    lay="champ"
      console.log(lay)
  }

  search(e) {
    lay="search"
      console.log(lay)
  }



    render() {

        return (
        <View style={styles.main_container}>
          <View style={styles.navTop}>
          <Text> Mon app LoL </Text>
          </View>
          <View style={styles.mid}>
          <Text> Le menu </Text>
          </View>
          <View style={styles.navBot}>

            <View style={styles.nav} id="ouioui">
            <TouchableOpacity onPress={(e) => {this.search(e)}} >
              <View >
                <Text>Oui</Text>
              </View>
              <Image style={styles.img} source={require('../assets/blitz.jpg')} />
            </TouchableOpacity>
            </View>

            <View style={styles.nav} name="oui">
            <TouchableOpacity onPress={(e) => {this.champ(e)}} >
              <View >
                <Text>Non</Text>
              </View>
              <Image style={styles.img} source={require('../assets/blitz.jpg')} />
            </TouchableOpacity>
            </View>

            <View style={styles.nav} name="non">
            <TouchableOpacity onPress={(e) => {this.handleClick(e)}} >
              <View >
                <Text>Peut être</Text>
              </View>
              <Image style={styles.img} source={require('../assets/blitz.jpg')} />
            </TouchableOpacity>
            </View>

          </View>
        </View>
        )
    }
}


const styles= StyleSheet.create({
  main_container:{
    marginTop:'10%',
    minWidth: '100%',
   maxWidth: 500,
   minHeight: '90%',
   maxHeight: 150,
  },
  mid:{
    flex:3,
    borderColor:'black',
    borderWidth:2
  },
  img:{
    width:50,
    height:50
  },
  navBot:{
    flex:1,
    flexDirection:'row',
    borderColor:'black',
    borderWidth:2
  },
  navTop:{
    borderColor:'black',
    borderWidth:2,
    flex:1
  },
  nav:{
    flex:1,
    flexWrap: 'wrap',
    alignItems:'center',
    justifyContent: 'center',
  }
});


export default Menu
