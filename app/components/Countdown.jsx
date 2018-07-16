var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function(){
    return {count: 0};
  },
  hanleSetCountdown: function(seconds){
    this.setState({
      count: seconds
    });
  },
  render: function(){
    var {count} = this.state;
    return (
      <div>
      <h1>Countdown</h1>
      <Clock totalSeconds={count} />
      <CountdownForm onSetCountdown={this.hanleSetCountdown} />
      </div>
    );
  }
});

module.exports = Countdown;
