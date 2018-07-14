var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return (
      <div className="top-bar" id="responsive-menu">
        <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React App</li>
          <li><IndexLink to='/' activeClassName='active-link'>Timer</IndexLink></li>
          <li><IndexLink to='/countdown' activeClassName='active-link'>Countdown</IndexLink></li>
        </ul>
        </div>
          <div className="top-bar-right">
            <a href="https://gauravadhikari.com"> Developer</a>
          </div>
      </div>
    );
  }
});

module.exports = Nav;
