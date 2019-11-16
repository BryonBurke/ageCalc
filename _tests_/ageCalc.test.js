import { Person } from '../src/person.js';

describe('Person', () => {

  // test('should construct a new person', () => {
  //   let subjectPerson = new Person ("Chuck", 35, "earth", 85);
  //   expect(subjectPerson.personName).toEqual("Chuck");
  //   expect(subjectPerson.personEarthAge).toEqual(35);
  //   expect(subjectPerson.personPlanet).toEqual("earth");
  //   expect(subjectPerson.earthLifeExpectancy).toEqual(85);
  //
  // });

  // test('should apply algorithm to compute persons age in mercury years', () => {
  //   let subjectPerson = new Person ("Chuck", 35, "mercury");
  //   let planetAge = subjectPerson.convertToPlanetAge();
  //   expect(planetAge).toEqual("145.83");
  //
  // });
  //
  // test('should apply algorithm to compute persons age in venus years', () => {
  //   let subjectPerson = new Person ("Chuck", 35, "venus");
  //   let planetAge = subjectPerson.convertToPlanetAge();
  //   expect(planetAge).toEqual("56.45");
  //
  // });
  //
  // test('should apply algorithm to compute persons age in mars years', () => {
  //   let subjectPerson = new Person ("Chuck", 35, "mars");
  //   let planetAge = subjectPerson.convertToPlanetAge();
  //   expect(planetAge).toEqual("18.62");
  //
  // });
  //
  // test('should apply algorithm to compute persons age in jupiter years', () => {
  //   let subjectPerson = new Person ("Chuck", 35, "jupiter");
  //   let planetAge = subjectPerson.convertToPlanetAge();
  //   expect(planetAge).toEqual("2.95");
  //
  // });

  test('should apply algorithm to compute persons life expectancy in mercury years', () => {
    let subjectPerson = new Person ("Chuck", 35, "jupiter", 85);
    let timeLeftPlanetYears = subjectPerson.LifeExpectancyOnPlanet();
    expect(timeLeftPlanetYears).toEqual("208.84");

  });

});
