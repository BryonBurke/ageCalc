import { Person } from '../src/person.js';

describe('Person', () => {

  // test('should construct a new person', () => {
  //   var subjectPerson = new Person ("Chuck", 35, "earth");
  //   expect(subjectPerson.personName).toEqual("Chuck");
  //   expect(subjectPerson.personAge).toEqual(35);
  //   expect(subjectPerson.planet).toEqual("earth")
  // });

  test('should apply algorithm to compute persons age in mercury years', () => {
    var subjectPerson = new Person ("Chuck", 35, "mercury");
    this.convertToPlanetAge(mercury)
    expect(mercuryAge).toEqual(8.4);

  });

});
