import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import data from '../data/championData'
import Images from '../assets/image'

class Champion extends React.Component {
    render(){
      const champ = this.props.champ
      //console.log(data[0].image);
      //console.log(Object.values(data));
      //let elem=Object.values(data);
      //let img = Object.values(elem[0]);
      //console.log(img[2]);

        return(
          <View style={styles.champion_container}>

            <View style={styles.image}>
              <Image style={{flex:1,height: undefined, width: undefined}} source={(champ.image)}/>
            </View>

            <View style={styles.contender}>

              <View style={styles.header}>

                <View style={styles.title_text}>
                  <Text>{champ.name}</Text>
                </View>

                <View style={styles.like}>
                  <Button title='Like' color='red' onPress={() => {}}/>
                </View>

              </View>

              <View style ={styles.desc}>
                <Text>{champ.story}</Text>
              </View>


            </View>

          </View>
        )
    }
}

const styles = StyleSheet.create({
  champion_container:{
    height:150,
    flexDirection:'row',
    marginTop:10,
    borderColor:'black',
    borderWidth:2,
    marginRight:5,
    marginLeft:5
  },
  image:{
    flex:1,
  },
  contender:{
    flex:2
  },
  header:{
    flexDirection:'row'
  },
  title_text:{
    flex:2,
    flexWrap: 'wrap',
    alignItems:'center',
    justifyContent: 'center',

  },
  like:{
    flex:1
  },
  desc:{
    flex:3,
    marginLeft:5,
    marginRight:5
  }
})

export default Champion
