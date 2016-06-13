const React = require('react');
const ReactDOM = require('react-dom');
const ListManager = require('./components/ListManager.jsx');

ReactDOM.render(
    <ListManager
        title="Ingredients"
    />, document.getElementById('ingredients')
);
