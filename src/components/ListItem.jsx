const React = require('react');

let ListItem = React.createClass({
    render() {
        return (
            <li>
                <h4>{this.props.text}</h4>
            </li>
        );
    }
});

module.exports = ListItem;
