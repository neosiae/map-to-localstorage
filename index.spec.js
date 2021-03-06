/* eslint-disable no-undef */

require('localstorage-polyfill')
const mapTolocalStorage = require('./index')
const test = require('tape')

test('Maps an object to the localStorage', t => {
  const o = {
    name: 'John',
    surname: 'Doe',
    email: 'johndoe@example.com'
  }

  mapTolocalStorage(o)

  t.equal('John', localStorage.getItem('name'))
  t.equal('Doe', localStorage.getItem('surname'))
  t.equal('johndoe@example.com', localStorage.getItem('email'))

  t.end()
})

test('Throws an error when the argument is not an object', t => {
  const o = 'not an object'

  t.throws(() => {
    mapTolocalStorage(o)
  })

  t.end()
})
