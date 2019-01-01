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
  it("should pass arguments to the throttled function", () => {
    const fn = sinon.spy(a => a);
    const throttledFn = throttle(fn, 100);
    throttledFn(1);
    throttledFn(2);
    throttledFn(3);
    expect(fn.calledWithExactly(1)).to.be.true;
    clock.tick(101);
    throttledFn("a");
    expect(fn.calledWithExactly("a")).to.be.true;
  });
  it.only("should use the bound context", () => {
    const fn = sinon.spy(function() {
      return this;
    });
    class Thing {
      constructor() {
        this.description = "shiny thing";
        this.getDescription = throttle(this.getDescription.bind(this), 100);
      }
      getDescription() {
        return this.description;
      }
    }
    const thing = new Thing();
    expect(throttle(fn, 100)()).to.equal(global);
    expect(thing.getDescription()).to.equal("shiny thing");
  });
});
