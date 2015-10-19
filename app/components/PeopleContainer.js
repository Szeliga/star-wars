import React from 'react-native';
import People from './People';
import AltContainer from 'alt/AltNativeContainer';
import PeopleStore from '../stores/PeopleStore';
import PeopleActions from '../actions/PeopleActions';

const {
  View,
  ListView,
  Text,
  Component,
  StyleSheet,
  TouchableHighlight,
  LayoutAnimation,
} = React;

export default class PeopleContainer extends Component {
  constructor(props) {
    super(props);
    this.addPerson.bind(this);
    this.prepareDataSource.bind(this);
  }

  componentDidMount() {
    PeopleActions.fetchPeople();
  }

  addPerson() {
    PeopleActions.updatePeople(PeopleStore.getState().people.concat({name: 'Stasiu 2'}));
  }

  prepareDataSource() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return ds.cloneWithRows(PeopleStore.getState().people);
  }

  render() {
    return (
      <AltContainer stores={[PeopleStore]}
        inject={ {
          dataSource: this.prepareDataSource,
          navigator: () => this.props.navigator,
          loading: () => PeopleStore.getState().loading
        } }>
        <People />
      </AltContainer>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
