var React = require('react');
var NameField = require('./NameField.jsx');
var HTTP = require('../services/open-weather.jsx');


var Weather = React.createClass({
    getInitialState: function(){
        return(
            {weather: []}
        );
    },
    componentWillMount: function () {
        HTTP.get('').then(function (data) {
            this.setState({weather: [data]});
        }.bind(this));
    },
    render: function() {
        var todayWeatherBox = this.state.weather.map(function(item, key) {
            return item.list[0].weather[0].description + ' temp ' + item.list[0].main.temp;
        });
        return (
            <div className="card">
                <div className="card-header">asd</div>
                <div className="card-body">
                    <NameField type="First"/>
                </div>
                <p>{todayWeatherBox}</p>
            </div>
        )
    }
});

module.exports = Weather;
