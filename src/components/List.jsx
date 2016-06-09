const React     = require('react');
const ListItem  = require('./ListItem.jsx');

let ingredients = [{"id":1,"text":"ham"}, {"id":2,"text":"cheese"}, {"id":3,"text":"potatoes"}];

let List = React.createClass({
    render: function() {
        var listItems = ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (
            <ul>{listItems}</ul>
        );
    }
});

module.exports = List;
