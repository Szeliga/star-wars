import React from 'react-native';
import Person from './Person';

const {
  View,
  ListView,
  Text,
  Component,
  StyleSheet,
  ActivityIndicatorIOS,
  TouchableWithoutFeedback,
} = React;

export default class People extends Component {
  constructor(props) {
    super(props);
    this.navigateToPerson.bind(this);
  }

  navigateToPerson(person) {
    this.props.navigator.push({
      title: person.name,
      component: Person,
      passProps: {
        person: person
      }
    });
  }

  render() {
    if (this.props.loading) {
      return this.renderSpinner();
    } else {
      return this.renderPeople();
    }
  }

  renderSpinner() {
    return <View style={styles.centering}>
      <ActivityIndicatorIOS size="large"/>
    </View>;
  }

  renderPeople() {
    return <ListView style={styles.list}
      dataSource={this.props.dataSource}
      renderRow={this.renderPerson.bind(this)}
    />;
  }

  renderPerson(person, sectionId, rowId) {
    return (
      <TouchableWithoutFeedback onPress={() => this.navigateToPerson(person)}>
        <View style={styles.row}>
          <Text style={styles.text}>{person.name}</Text>
          <View style={styles.separator} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

var styles = StyleSheet.create({
  list: {
    flex: 1
  },
  centering: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FDFDFD',
  },
  separator: {
    height: 1,
    alignSelf: 'stretch',
    backgroundColor: '#CCCCCC',
  },
  text: {
    flex: 1,
    padding: 16,
  },
});


