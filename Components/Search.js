import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native'
import champions from '../data/championData'
import Champion from './Champion'
import { getInfoFromResearch } from '../api/api'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textInput: ''};
  }

  handleClick(e) {
    const{textInput}=this.state;
    console.log(textInput);
    getInfoFromResearch(textInput).then(data => console.log(data));
  }

  render() {
    return (
      <View>
        <TextInput  id='Summoners' style={styles.textinput} placeholder='Summoners name' onChangeText={textInput => this.setState({textInput})}/>
        <Button  title='Search' color='green' onPress={(e) => {this.handleClick(e)}}/>

        <FlatList style={styles.case}
          data={champions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Champion champ={item}/> } //<Text>{item.name}</Text>
        />

      </View>
    )
  }
}

const styles= StyleSheet.create({
  textinput:{
    borderColor:'black',
    borderWidth:1

  }
});
//const [title, setTitle] = useState('')


export default Search
