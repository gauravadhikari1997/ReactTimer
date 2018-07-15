var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function(){
    return (
      <div>
      <h1>Countdown</h1>
      <Clock totalSeconds={69} />
      </div>
    );
  }
});

module.exports = Countdown;
