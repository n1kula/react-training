var React = require('react');

var NameField = React.createClass({
    getInitialState: function () {
        return {value: ""}
    },

    render: function() {
        return (
            <input className="form-control" placeholder={this.props.type + " Name"} value={this.value}/>
        )
    }
});

module.exports = NameField;
