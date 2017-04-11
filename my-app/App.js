import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='Alexa' surname='from Amazon'/>
        <Greeting name='Siri' surname='from Apple !'/>
        <Blink text='Blinking'/>
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
