/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var UI = __webpack_require__(2);
	
	var app = function() {
	  new UI();
	}
	
	window.onload = app;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Countries = __webpack_require__(3);
	
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Country = __webpack_require__(4);
	
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
	      callback(countries);
	    });
	  },
	  createCountriesArray: function(results){
	    var countries = [];
	
	    for(var result of results){
	      var name = results.name;
	      countries.push(name);
	    }
	    return countries;
	  }
	}
	module.exports = Countries;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var Country = function(options){
	  this.name = options.name;
	  this.capital = options.capital;
	  this.currency = options.currency;
	};
	
	module.exports = Country;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {config = {
	
	  entry:"./src/app.js",
	  output: {
	    filename: "bundle.js", 
	    path: __dirname + "/build"
	  }, 
	    devtool: 'source-map'
	}
	
	module.exports = config;
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map