const React = require('react');
const List = require('./List.jsx');

const ListManager = React.createClass({
    // Called once in the Component life cycle - an intializer
    getInitialState() {
        return (
            {items: [], newItemText:''}
        );
    },
    onChange(e) {
        // Update the state property every time a keystroke is typed
        this.setState(
            {newItemText: e.target.value}
        );
    },
    handleSubmit(e) {
        // Stop button from getting clicks; we are using form onSubmit
        e.preventDefault();

        // Grab current list of items
        let currentItems = this.state.items;

        // Add new item to the list
        currentItems.push(this.state.newItemText);

        // Update main item list with new list and clear newItemText
        this.setState(
            {items:currentItems, newItemText:''}
        );
    },
    render() {
        // onChange is called with every keystroke so we can store the most
        // recent data entered. value is what the users sees in the input box
        // we point this to newItemText so it updates on every change
        return (
            <div>
                <h3>{this.props.title}</h3>
                <form
                    onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.onChange}
                        value={this.state.newItemText}
                    />
                <button>Add</button>
                </form>
                <List
                    items={this.state.items}
                />
            </div>
        );
    }
});

module.exports = ListManager;
