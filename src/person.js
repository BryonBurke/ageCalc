export class Person {
  constructor(personName, personEarthAge , personPlanet, earthLifeExpectancy){
    this.personName = personName;
    this.personEarthAge = personEarthAge;
    this.personPlanet = personPlanet;
    this.earthLifeExpectancy = earthLifeExpectancy;
  }

  convertToPlanetAge(){
    if (this.personPlanet === "mercury") {
      let planetAge = (this.personEarthAge / .24);
      return planetAge.toFixed(2);
    } else if (this.personPlanet === "venus") {
      let planetAge = this.personEarthAge / .62;
      return planetAge.toFixed(2);
    }else if (this.personPlanet === "mars") {
      let planetAge = this.personEarthAge / 1.88;
      return planetAge.toFixed(2);
    }else if (this.personPlanet === "jupiter") {
      let planetAge = this.personEarthAge / 11.86;
      return planetAge.toFixed(2);
    }
  }

  LifeExpectancyOnPlanet(){
    if (this.personPlanet === "mercury") {
      let planetAge = (this.personEarthAge / .24);
      let planetAgeFloat = parseFloat(planetAge);
      let planetLifeExpectancy = (this.earthLifeExpectancy /.24);
      let planetLifeExpectancyFloat = parseFloat(planetLifeExpectancy);
      let timeLeftPlanetYears = planetLifeExpectancyFloat - planetAgeFloat;
      return timeLeftPlanetYears.toFixed(2);
    }

    // elseif (this.personPlanet === "venus") {
    //   let planetAge = (this.personEarthAge / .62);
    //   let planetAgeFloat = parseFloat(planetAge);
    //   let planetLifeExpectancy = (this.earthLifeExpectancy / .62);
    //   let planetLifeExpectancyFloat = parseFloat(planetLifeExpectancy);
    //   let timeLeftPlanetYears = planetLifeExpectancyFloat - planetAgeFloat;
    //   return timeLeftPlanetYears.toFixed(2);
    // }


  }


}
