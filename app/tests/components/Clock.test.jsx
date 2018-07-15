var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toBeTruthy();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds="63" />);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      var expectedText = '01:03';

      expect(actualText).toBe(expectedText);
    });
  });

describe('formatSeconds', () => {
  it('should format seconds', () => {
    var clock = TestUtils.renderIntoDocument(< Clock / >);
    var totalSeconds = 611;
    var expected = '10:11';
    var actual = clock.formatSeconds(totalSeconds);

    expect(actual).toBe(expected);
  });

  it('should format seconds with less than 10 minutes', () => {
    var clock = TestUtils.renderIntoDocument(< Clock / >);
    var totalSeconds = 62;
    var expected = '01:02';
    var actual = clock.formatSeconds(totalSeconds);

    expect(actual).toBe(expected);
  });
});
});
