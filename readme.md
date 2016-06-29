## ava-react [![Build Status](https://travis-ci.org/joegesualdo/ava-react.svg?branch=master)](https://travis-ci.org/joegesualdo/ava-react)
> Test react components with ava, no setup required.

## Install
```
$ npm install --global @joegesualdo/ava-react
```

## Usage
```javascript
$ ava-react <test-file>
```

## Important
You must have this `.babelrc` at the root of you project:
```javascript
{
  "presets": [
    "react",
    "es2015",
    'stage-0',
   ],
	"env": {
    "AVA": {
      "plugins": [
        [
          "babel-plugin-webpack-loaders",
          {
            "config": "${CONFIG}",
            "verbose": true
          }
        ]
      ]
    }
  }
}
```

## Test
```
$ npm test

```
## Build
```
$ npm run build
```

## Related
- [example-package]() - Add description of the example package here.

## License
MIT © [undefined]()
