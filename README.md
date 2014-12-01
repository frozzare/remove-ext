# remove-ext [![Build Status](https://secure.travis-ci.org/frozzare/remove-ext.png?branch=master)](http://travis-ci.org/frozzare/remove-ext)

Remove the extension from the string path to file. It's similar to [path.basename](http://nodejs.org/api/path.html#path_path_basename_p_ext).

Install the module with: `npm install remove-ext`

## Example

```javascript
var rmExt  = require('remove-ext')
    path   = '/path/to/gif.gif',
    result = rmExt(path, 'gif');

console.log(result); // 'path/to/gif'
```

## License
Copyright (c) 2014 Fredrik Forsmo  
Licensed under the MIT license.
