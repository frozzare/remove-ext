/**
 * remove-ext
 * https://github.com/frozzare/remove-ext
 *
 * Copyright (c) 2014 Fredrik Forsmo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function rmExt (str, ext) {
  if (!str) {
    return '';
  }

  var reg = /\.[^/.]+$/;

  if (ext) {
    reg = new RegExp('\\.' + ext + '$');
  }

  var result = str.replace(reg, '');

  if (reg.test(result)) {
    return rmExt(result, ext);
  }

  return result;
}
