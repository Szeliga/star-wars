import React from 'react-native';
import ContainerStyle from '../styles/container';

const {
  Component,
  View,
  Text
} = React;

export default class Person extends Component {
  render() {
    return <View>{this.renderPersonInfo()}</View>;
  }

  renderPersonInfo() {
    const person = this.props.person;
    return Object.keys(person).map(key => {
      return <Text key={key}>{key}: {person[key]}</Text>;
    });
  }
}
