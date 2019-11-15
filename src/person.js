export class Person {
  constructor(personName, personEarthAge , personPlanet){
    this.personName = personName;
    this.personEarthAge = personEarthAge;
    this.personPlanet = personPlanet;
  }

  convertToPlanetAge(){
    if (this.planet === "mercury")  {
      ageOnMercury = parseFloat(this.personEarthAge * .24);


    }



  }


}
