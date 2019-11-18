export class Person {
  constructor(personName, personEarthAge , personPlanet, earthLifeExpectancy){
    this.personName = personName;
    this.personEarthAge = personEarthAge;
    this.personPlanet = personPlanet;
    this.earthLifeExpectancy = earthLifeExpectancy;
  }
  setPlanetScaleFactor(){
    if (this.personPlanet === "mercury") {
      const planetScaleFactor = .24
      return planetScaleFactor;
    } else if (this.personPlanet === "venus") {
      const planetScaleFactor = .62
      return planetScaleFactor;
    }else if (this.personPlanet === "mars") {
      const planetScaleFactor = 1.88
      return planetScaleFactor;
    }else if (this.personPlanet === "jupiter") {
      const planetScaleFactor = 11.86
      return planetScaleFactor;
    }
  }
  convertToPlanetAge(){
    let planetScaleFactor = this.setPlanetScaleFactor();
    let planetAge = this.personEarthAge / planetScaleFactor;
    return planetAge.toFixed(2);
  }
  LifeExpectancyOnPlanet(){
    let planetScaleFactor = this.setPlanetScaleFactor();
    let planetAge = this.convertToPlanetAge();
    let planetAgeFloat = parseFloat(planetAge);
    let planetAgeFixed = planetAgeFloat.toFixed(2);
    let planetLifeExpectancy = (this.earthLifeExpectancy / planetScaleFactor);
    let planetLifeExpectancyFloat = parseFloat(planetLifeExpectancy);
    let planetLifeExpectancyFixed = planetLifeExpectancyFloat.toFixed(2);
    let timeLeftPlanetYears = planetLifeExpectancyFixed - planetAgeFixed;
    if (planetLifeExpectancyFixed >= planetAgeFixed) {
      return timeLeftPlanetYears.toFixed(2);
    }
    else {
      let timeExceededPlanetYears = Math.abs(timeLeftPlanetYears.toFixed(2));
      return timeExceededPlanetYears.toFixed(2);
    }
  }
}
