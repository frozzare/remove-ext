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

Remove extension without knowing which extension it is:

```javascript
var rmExt  = require('remove-ext')
    path   = '/path/to/image.png',
    result = rmExt(path);

console.log(result); // 'path/to/image'
```


## License

MIT © [Fredrik Forsmo](https://github.com/frozzare)
