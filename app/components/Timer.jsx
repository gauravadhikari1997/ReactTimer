var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
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
    clearInterval(this.timer)
    this.timer = undefined;
  },
  startTimer: function(){
    this.timer = setInterval (() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },
  handleButtonClick: function(newState){
    this.setState({
      countdownStatus: newState
    });
  },
  render: function(){
    var {count, countdownStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
        <Controls onStatusChange={this.handleButtonClick} countdownStatus={countdownStatus}/>
      </div>
    );
  }
});

module.exports = Timer;
