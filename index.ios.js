import React from 'react-native';
import PeopleContainer from './app/components/PeopleContainer';
import ContainerStyle from './app/styles/container';

const {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS
} = React;

class StarWars extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        itemWrapperStyle={ContainerStyle.container}
        initialRoute={{
          component: PeopleContainer,
          title: 'People'
        }}
      />
    );
  }
}

AppRegistry.registerComponent('StarWars', () => StarWars);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF'
  },
  menuText: {
    color: 'white',
  },
});
