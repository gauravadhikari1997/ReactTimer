var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
const jest = require('jest-mock');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toBeTruthy();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    var spy = jest.fn();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    countdownForm.refs.inputSeconds.value = '110';
    TestUtils.Simulate.submit($el.find('form')[0]);
    spy();

    expect(spy).toHaveBeenCalledWith(110);
  });

  it('should not call onSetCountdown if invalid seconds entered', () => {
    var spy = jest.fn();
    spy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    countdownForm.refs.inputSeconds.value = 'abc';
    TestUtils.Simulate.submit($el.find('form')[0]);


    expect(spy).not.toHaveBeenCalledWith('abc');
  });

})
