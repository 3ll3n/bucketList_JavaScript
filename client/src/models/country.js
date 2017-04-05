// var Country = function(options){
//   this.name = options.name;
//   this.capital = options.capital;
//   this.currency = options.currency;
// };

// module.exports = Country;


var Country = function(){

};

Country.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  }, 
  selectedCountry: function(selected, callback){
    this.makeRequest(("https://restcountries.eu/rest/v2/name" + selected), function(){
      if (this.status !== 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);

      var selectedCountry = Country.prototype.allSelectedCountryInfo(results);
      callback(selectedCountry);
    };
  }, 
  allSelectedCountryInfo: function(){

  }
};

module.exports = Country;