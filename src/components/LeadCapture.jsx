var React = require('react');
var NameField = require('./NameField.jsx');
var EmailField = require('./EmailField.jsx');

var LeadCapture = React.createClass({

    onSubmit: function (e) {
        // if (!this.refs.fieldEmail.state.valid) {
        //     alert("invalid emial");
        // } else {
        //     var httpRequestBody = {
        //       //  email: this.refs.fieldEmail.state.value,
        //         firstName: this.refs.NameField.state.value
        //     };
        //     console.log(this.refs.NameField);
        // }
    },
    render: function() {
        return (
            <div className="card">
                <div className="card-header">asd</div>
                <div className="card-body">
                    <NameField type="First"/>
                    <button className="btn-primary" onClick={this.onSubmit}>Submit</button>
                </div>
            </div>
        )
    }
});

module.exports = LeadCapture;
