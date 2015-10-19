var PeopleSource = {
  fetchAll() {
    return fetch('https://swapi.co/api/people/').then((res) => res.json());
  }
};

export default PeopleSource;