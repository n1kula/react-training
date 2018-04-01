var React = require('react');
var NameField = require('./NameField.jsx');
var HTTP = require('../services/open-weather.jsx');


var Test = React.createClass({
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
                <div className="card-header">Weather in Warsaw</div>
                <div className="card-body">
                    <p>{todayWeatherBox}</p>
                </div>

            </div>
        )
    }
});

module.exports = Test;
