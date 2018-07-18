var React = require('react');

var CountdownForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var strSeconds = this.refs.inputSeconds.value;

    if (strSeconds.match(/^[0-9]*$/) && strSeconds != ""){
      this.refs.inputSeconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="coundown-form" ref="form">
          <div><input type="text" ref="inputSeconds" placeholder="Enter time in seconds"/></div>
          <div><button className="button expanded hollow">Start</button></div>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
