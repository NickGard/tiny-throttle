const { throttle } = require("./index");
const { expect } = require("chai");
const sinon = require("sinon");

describe("tiny-throttle", () => {
  var clock;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
  });

  afterEach(function() {
    clock.restore();
  });
  it("should fire immediately", () => {
    const fn = sinon.spy(() => {});
    const throttledFn = throttle(fn, 5000);
    throttledFn();
    expect(fn.callCount).to.equal(1);
  });
  it("should not fire again until the interval has passed", () => {
    const fn = sinon.spy(() => {});
    const throttledFn = throttle(fn, 100);
    throttledFn();
    throttledFn();
    throttledFn();
    throttledFn();
    expect(fn.callCount).to.equal(1);
    clock.tick(101);
    throttledFn();
    expect(fn.callCount).to.equal(2);
  });
});
