const React = require('react');
const ListItem = require('./ListItem.jsx');

const List = React.createClass({
    render() {

        let createItem = (text, index) => {
            return (
                <ListItem
                    key={index + text}
                    text={text}
                />
            );
        }

        return (
            <ul>{this.props.items.map(createItem)}</ul>
        );
    }
});

module.exports = List;
