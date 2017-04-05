var Countries = require('../models/countries');

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
  }
}

module.exports = UI;