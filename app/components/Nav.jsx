var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return (
        <div className="top-bar">
        <div className="float-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">React Timer App</li>
            <li><IndexLink to='/timer' activeClassName='active-link'>Timer</IndexLink></li>
            <li><Link to='/countdown' activeClassName='active-link'>Countdown</Link></li>
          </ul>
        </div>
        <div className="float-right">
          <ul className="menu">
            <li><a href="https://gauravadhikari.com"> Developer</a></li>
          </ul>
        </div>
        </div>
    );
  }
});

module.exports = Nav;
