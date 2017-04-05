var Countries = require('../models/countries');
var Country = require('../models/country');

var UI = function() {
  var countries = new Countries();
  countries.all(function(result) {
    this.populateDropdown(result);
  }.bind(this)); 
}

UI.prototype = {
  populateDropdown: function(countries) {
    var container = document.querySelector('#select-country-name');

    for(var name of countries) {
      var option = document.createElement('option');
      option.innerText = name;
      container.appendChild(option);
    };
     container.addEventListener("change", function(){
      var value = document.getElementById("select-country-name").value;
      var country = new Country();
      country.selectedCountry(value, this.populateUl);
    }.bind(this));
  },

  populateUl: function(countryInfo){
    var ul = document.querySelector('#countries-list');
    var liName = document.createElement('li');
    liName.innerText = countryInfo.name;
    var liCap = document.createElement('li');
    liCap.innerText = countryInfo.capital;
    var liCurr = document.createElement('li');
    liCurr.innerText = countryInfo.currencies.name;
    ul.appendChild(liName);
    ul.appendChild(liCap);
    ul.appendChild(liCurr);
  }
}

module.exports = UI;