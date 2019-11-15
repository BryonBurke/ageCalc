import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Person } from './person.js';

$(document).ready(function(){

  $("form#personUserform").submit(function(event) {
    event.preventDefault();

    let personName = ($("#personName").val());
    let personEarthAge = pasrseFloat($("#personEarthAge").val());
    let personPlanet = ($("#personPlanet"));

    let subjectPerson = new Person (personName, personEarthAge, planet);

  });
});
