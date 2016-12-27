'use strict';

var path = require('path');
var expect = require('chai').expect;
var CLIEngine = require('eslint').CLIEngine;

describe('catch block with overrides', function() {
  var cli = new CLIEngine();
  var fixturePath = path.resolve(__dirname, '../tests/fixtures/try-catch.js');

  it('throws an error with no overrides', function() {
    var report = cli.executeOnFiles([fixturePath]);
    var errorCount = report.errorCount + report.warningCount;

    if (errorCount) {
      // Show the offending rule(s) and other details
      console.log(report.results[0]);
    }

    expect(errorCount).to.equal(0);
  });
});
