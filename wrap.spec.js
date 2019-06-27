const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  // it('Returns string if count > string length', () => {
  //   expect(wrap("hello testing me", 50)).to.equal("hello testing me");
  // });
  // it('Returns string spaced between words', () => {
  //   expect(wrap("the quick brown fox")).to.equal("the/nquick/nbrown/nfox");
  // });
  it('seperates string if count < string length', () => {
    expect(wrap("try me hello",3 )).to.equal("try\n me");
  });
  // it('Returns string without cutting words off', () => {
  //   expect(wrap("hello testing", 3).split(' ').join(' ')).to.equal("hello");
  // });
});
