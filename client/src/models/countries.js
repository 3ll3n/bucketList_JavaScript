var Countries = function(){

};

Countries.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },
  all: function(callback){
    this.makeRequest("https://restcountries.eu/rest/v2", function(){
      if(this.status !== 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);

      var countries = Countries.prototype.createCountriesArray(results);
      // console.log(countries);
      callback(countries);
    });
  },
  createCountriesArray: function(results){
    var countries = [];

    for(var result of results){
      var name = result.name;
      countries.push(name);
      console.log(name);
    }
    return countries;
  }
}
module.exports = Countries;