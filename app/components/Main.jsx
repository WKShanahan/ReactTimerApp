var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="columns medium-6 large-4 small-centered">
        <p>Main Component</p>
        {props.children}
      </div>
    </div>
  );
};

module.exports = Main;
