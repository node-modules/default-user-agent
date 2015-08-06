/**!
 * default-user-agent - test/default-user-agent.test.js
 *
 * Copyright(c) node-modules and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var assert = require('assert');
var ua = require('../');

describe('default-user-agent.test.js', function () {
  it('should got default user agent string', function () {
    var s = ua();
    assert.equal(typeof s, 'string');
    assert(/\w+\/\w+/.test(s));
    console.log(s);
    // 'Node.js/0.11.15 (OS X Yosemite; x64)'
    assert(/^Node\.js\/\d+\.\d+\.\d+ \(\w+ .+; \w+\)$/);
  });

  it('should got custom user agent string', function () {
    var s = ua('urllib', '0.1.1');
    assert.equal(typeof s, 'string');
    assert(/\w+\/\w+/.test(s));
    console.log(s);
    // 'Node.js/0.11.15 (OS X Yosemite; x64)'
    assert(/^urllib\/0\.1\.1 Node\.js\/\d+\.\d+\.\d+ \(\w+ .+; \w+\)$/.test(s));
  });
});
