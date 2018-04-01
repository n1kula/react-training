var Fetch = require('whatwg-fetch');
// var baseUrl = 'http://kulesza82.pl';
var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?APPID=2d861916620a73d765f0c8439d35e6a3&q=warsaw&units=metric';

var service = {
    get: function(url){
        return fetch(baseUrl + url).then(function(response){
            return response.json();
        });
    }
};

module.exports = service;
