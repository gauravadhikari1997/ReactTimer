var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function(newState){
    return() => {
      this.props.onStatusChange(newState)
    }
  },
  render: function(){
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if(countdownStatus === 'started'){
        return <button onClick={this.onStatusChange('paused')} className="button secondary">Pause</button>
      }else if(countdownStatus === 'paused'){
        return <button onClick={this.onStatusChange('started')} className="button primary">Start</button>
      }
    };
    return (
        <div className="controls">
          {renderStartStopButton()}
          <button onClick={this.onStatusChange('stopped')} className="button alert">Clear</button>
        </div>
    );
  }
});

module.exports = Controls;
