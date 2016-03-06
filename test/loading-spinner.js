var assert = require('assert');

function test(done, options, sequence) {
  process.stdout.write('It\'s gonna be LE-GEN... Wait for it... ');

  var loadingSpinner = require('../lib/loading-spinner');

  if (sequence) {
    loadingSpinner.setSequence(sequence);
  }

  if (options) {
    loadingSpinner.start(100, {
      clearChar: true
    });
  } else {
    loadingSpinner.start(100);
  }

  setTimeout(function() {
    loadingSpinner.stop();
    process.stdout.write('DA-RY !');

    done();
  }, 1000);
}

describe('LE-GEN-DA-RY', function() {
  describe('WITHOUT option', function () {
    it('SHOULD load without error', function(done) { test(done); });
  });
  describe('WITH option(s)', function () {
    it('clearChar: false', function(done) { test(done, { clearChar: false }); });
    it('clearChar: true', function(done) { test(done, { clearChar: true }); });
    it('clearLine: false', function(done) { test(done, { clearLine: false }); });
    it('clearLine: true', function(done) { test(done, { clearLine: true }); });
    it('doNotBlock: false', function(done) { test(done, { doNotBlock: false }); });
    it('doNotBlock: true', function(done) { test(done, { doNotBlock: true }); });
    it('hideCursor: false', function(done) { test(done, { hideCursor: false }); });
    it('hideCursor: true', function(done) { test(done, { hideCursor: true }); });
  });
  describe('WITH pattern', function () {
    it('012345678987654321', function(done) { test(done, null, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '8', '7', '6', '5', '4', '3', '2', '1']); });
  });
});
