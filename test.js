'use strict';

var assert = require('assert'),
    rmExt  = require('./lib/remove-ext');

it('should remove gif extension', function () {
  var path   = '/path/to/gif.gif',
      result = rmExt(path, 'gif');

  assert.equal('/path/to/gif', result);
});

it('should remove all gif extension', function () {
  var path   = '/path/to/gif-gif.gif.gif',
      result = rmExt(path, 'gif');

  assert.equal('/path/to/gif-gif', result);
});

it('should remove extension', function () {
  var path   = '/path/to/image.png',
      result = rmExt(path);

  assert.equal('/path/to/image', result);
})
