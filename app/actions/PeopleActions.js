import alt from "../libs/alt";
import PeopleSource from "../sources/PeopleSource";

class PeopleActions {
  updatePeople(people) {
    this.dispatch(people);
  }

  fetchPeople() {
    this.dispatch();
    PeopleSource.fetchAll().then((people) => {
      this.actions.updatePeople(people.results);
    });
  }
}

export default alt.createActions(PeopleActions);
