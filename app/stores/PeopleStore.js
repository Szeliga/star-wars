import alt from '../libs/alt';
import PeopleActions from '../actions/PeopleActions';

class PeopleStore {
  constructor() {
    this.people = [];
    this.loading = false;
    this.bindListeners({
      handleUpdatePeople: PeopleActions.UPDATE_PEOPLE,
      handleFetchPeople: PeopleActions.FETCH_PEOPLE,
    });
  }

  handleUpdatePeople(people) {
    this.loading = false;
    this.people = people;
  }

  handleFetchPeople(people) {
    this.loading = true;
    this.people = [];
  }
}

export default alt.createStore(PeopleStore, 'PeopleStore');
