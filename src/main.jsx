var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="To do - list." />, document.getElementById('to-do-list'));
ReactDOM.render(<ListManager title="Completed tasks." />, document.getElementById('completed-tasks'));