var index = require('../index.js');
var expect = require('chai').expect;

console.log(index.lockedKeys('[[](]'))

describe('Exercise 5', function() {

    context('with arguments [[](]', function() {
      it('should return false', function() {
        expect(index.lockedKeys('[[](]')).to.equal(false)
      })
    })

})