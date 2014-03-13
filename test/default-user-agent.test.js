/**!
 * default-user-agent - test/default-user-agent.test.js
 *
 * Copyright(c) 2014 fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

"use strict";

/**
 * Module dependencies.
 */

var should = require('should');
var ua = require('../');

describe('default-user-agent.test.js', function () {
  it('should got default user agent string', function () {
    var s = ua();
    s.should.be.a.String;
    s.should.match(/\w+\/\w+/);
    // 'node/v0.11.11 (darwin 13.1.0; x64)'
    s.should.match(/^node\/v\d\.\d+\.\d+ \(\w+ .+; \w+\)$/);
  });

  it('should got custom user agent string', function () {
    var s = ua('urllib', '0.1.1');
    s.should.be.a.String;
    s.should.match(/\w+\/\w+/);
    // 'node/v0.11.11 (darwin 13.1.0; x64)'
    s.should.match(/^urllib\/0\.1\.1 node\/v\d\.\d+\.\d+ \(\w+ .+; \w+\)$/);
  });
});
