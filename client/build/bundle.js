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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var UI = __webpack_require__(4);

var app = function() {
  new UI();
}

window.onload = app;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Countries = __webpack_require__(2);

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map