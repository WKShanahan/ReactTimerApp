var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function () {
  return (
    <div>
      <Nav/>
      <div className="columns medium-6 large-4 small-centered">
        <p>Main Component</p>
        {this.props.children}
      </div>
    </div>
    );
  }
});

module.exports = Main;
