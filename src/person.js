export class Person {
  constructor(personName, personEarthAge , personPlanet){
    this.personName = personName;
    this.personEarthAge = personEarthAge;
    this.personPlanet = personPlanet;
  }

  convertToPlanetAge(){
    // mercuryScaleFactor = .24;
    // venusScaleFactor = .62;
    // marsScaleFactor = 1.88;
    // jupiterScaleFactor = 11.86;

    if (this.personPlanet === "mercury") {
      let planetAge = this.personEarthAge * .24;
      return planetAge;
    } else if (this.personPlanet === "venus") {
      let planetAge = this.personEarthAge * .62;
      return planetAge;

    }




  }


}
