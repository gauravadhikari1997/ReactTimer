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
        return(<div>
          <button onClick={this.onStatusChange('paused')} className="button secondary">Pause</button>
          <button onClick={this.onStatusChange('stopped')} className="button alert">Clear</button>
        </div>);
      }else if(countdownStatus === 'stopped'){
        return <button onClick={this.onStatusChange('started')} className="button hollow primary">Start</button>
      }else if(countdownStatus === 'paused'){
        return(<div>
          <button onClick={this.onStatusChange('started')} className="button primary">Start</button>
          <button onClick={this.onStatusChange('stopped')} className="button alert">Clear</button>
        </div>);
      }
    };
    return (
        <div className="controls">
          {renderStartStopButton()}
        </div>
    );
  }
});

module.exports = Controls;
