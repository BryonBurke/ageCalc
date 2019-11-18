export class Person {
  constructor(personName, personEarthAge , personPlanet, earthLifeExpectancy){
    this.personName = personName;
    this.personEarthAge = personEarthAge;
    this.personPlanet = personPlanet;
    this.earthLifeExpectancy = earthLifeExpectancy;
  }
  convertToPlanetAge(){
    if (this.personPlanet === "mercury") {
      var planetScaleFactor = .24
    } else if (this.personPlanet === "venus") {
      var planetScaleFactor = .62
    }else if (this.personPlanet === "mars") {
      var planetScaleFactor = 1.88
    }else if (this.personPlanet === "jupiter") {
      var planetScaleFactor = 11.86
    }
    let planetAge = this.personEarthAge / planetScaleFactor;
    return planetAge.toFixed(2);
  }
  LifeExpectancyOnPlanet(){
    if (this.personPlanet === "mercury") {
      var planetScaleFactor = .24
    } else if (this.personPlanet === "venus") {
      var planetScaleFactor = .62
    }else if (this.personPlanet === "mars") {
      var planetScaleFactor = 1.88
    }else if (this.personPlanet === "jupiter") {
      var planetScaleFactor = 11.86
    }
    let planetAge = (this.personEarthAge / planetScaleFactor);
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
