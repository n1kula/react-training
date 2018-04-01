var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');
var LeadCapture = require('./components/LeadCapture.jsx');
var Weather = require('./components/Weather.jsx');
var Test = require('./components/Test.jsx');

ReactDOM.render(<ListManager title="To do - list." />, document.getElementById('to-do-list'));
ReactDOM.render(<ListManager title="Completed tasks." />, document.getElementById('completed-tasks'));

ReactDOM.render(<LeadCapture />, document.getElementById('lead-capture'));
ReactDOM.render(<Test />, document.getElementById('test'));