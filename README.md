# map-to-localstorage

![npm](https://img.shields.io/npm/v/map-to-localstorage?style=flat-square) ![Travis (.org)](https://img.shields.io/travis/neosiae/map-to-localstorage?style=flat-square) ![npm](https://img.shields.io/npm/dw/map-to-localstorage?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/map-to-localstorage?style=flat-square)

Map object to localStorage

## Install

> npm i map-to-localstorage

## Usage

```javascript
const mapTolocalStorage = require('map-to-localstorage')

const o = {
  name: 'John',
  surname: 'Doe',
  email: 'johndoe@example.com',
}

mapTolocalStorage(o)
```

## License

MIT
