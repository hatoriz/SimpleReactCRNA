import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }
});

export default class MyApp extends Component {
  constructor(props) {
      super(props);
      this.state = {text: ''};
    }

  render() {
    return (
      <View style={{padding: 10}}>

        <TextInput
          style={{paddingTop: 20, height: 40}}
          placeholder="Type here!"
          onChangeText={(text) => this.setState({text})}
        />

        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name} {this.props.surname} </Text>
    );
  }
}
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every 2 second
    setInterval(() => { this.setState({ showText: !this.state.showText });}, 1000);
  }
  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={styles.bigBlue}>{display}</Text>
    );
  }
}
