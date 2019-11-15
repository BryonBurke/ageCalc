import { Person } from '../src/person.js';

describe('Person', () => {

  test('should construct a new person', () => {
    var subjectPerson = new Person ("Chuck", 35);
    expect(subjectPerson.personName).toEqual("Chuck");
    expect(subjectPerson.personAge).toEqual(35);
  });

});
