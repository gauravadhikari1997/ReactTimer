var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps, prevState){
    if (this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0})
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function(){
    console.log('componentWillUnmount');
    clearInterval(this.timer)
    this.timer = undefined;
  },
  startTimer: function(){
    this.timer = setInterval (() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if (newCount === 0){
        this.setState({ countdownStatus: 'stopped'});
      }
    }, 1000);
  },
  hanleSetCountdown: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleButtonClick: function(newState){
    this.setState({
      countdownStatus: newState
    });
  },
  render: function(){
    var {count, countdownStatus} = this.state;
    var renderControls = () => {
      if (countdownStatus !== 'stopped'){
        return <Controls onStatusChange={this.handleButtonClick} countdownStatus={countdownStatus}/>;
      }else{
        return <CountdownForm onSetCountdown={this.hanleSetCountdown} />;
      }
    };
    return (
      <div>
      <Clock totalSeconds={count} />
      {renderControls()}
      </div>
    );
  }
});

module.exports = Countdown;
