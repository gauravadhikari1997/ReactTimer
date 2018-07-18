var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe ('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toBeTruthy();
  });
  it('should update countdownStatus and countdown', (done) => {
    var countdown = TestUtils.renderIntoDocument(<Countdown />);
    countdown.hanleSetCountdown(12);

    expect(countdown.state.count).toBe(12);
    expect(countdown.state.countdownStatus).toBe('started');

    setTimeout(() => {
      expect(countdown.state.count).toBe(11);
      done();
    }, 1001)
  });
  it('should not countdown for negative value', (done) => {
    var countdown = TestUtils.renderIntoDocument(<Countdown />);
    countdown.hanleSetCountdown(1);

    setTimeout(() => {
      expect(countdown.state.count).toBe(0);
      done();
    }, 2001)
  });
});
