import { Person } from '../src/person.js';

describe('Person', () => {

  // test('should construct a new person', () => {
  //   let subjectPerson = new Person ("Chuck", 35, "earth");
  //   expect(subjectPerson.personName).toEqual("Chuck");
  //   expect(subjectPerson.personEarthAge).toEqual(35);
  //   expect(subjectPerson.personPlanet).toEqual("earth");
  // });

  test('should apply algorithm to compute persons age in mercury years', () => {
    var subjectPerson = new Person ("Chuck", 35, "mercury");
    var ageOnMercury = subjectPerson.convertToPlanetAge();
    expect(ageOnMercury).toEqual(8.4);

  });

});
