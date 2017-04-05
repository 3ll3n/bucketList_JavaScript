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
    var url = "https://restcountries.eu/rest/v2/name/" + selected;
    this.makeRequest(url, function(){
      if (this.status !== 200) return;
      var jsonString = this.responseText;
      var countryResult = JSON.parse(jsonString);
      var countryInfo = countryResult[0];
      callback(countryInfo);
      console.log(countryInfo);
      
        });
  }
};

module.exports = Country;