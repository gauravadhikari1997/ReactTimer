var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toBeTruthy();
  });

  it('should start Timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleButtonClick('started');
    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      expect(timer.state.count).toBe(1);
      expect(timer.state.countdownStatus).toBe('started');
      done();
    }, 1001);
  });

  it('should stop Timer on stopped status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleButtonClick('stopped');
    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      expect(timer.state.count).toBe(0);
      expect(timer.state.countdownStatus).toBe('stopped');
      done();
    }, 1001);
  });
});
