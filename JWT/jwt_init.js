// Note: Original code from Auth0 University - JWT 101
'use strict'

// include colors, crypto
const colors = require('colors')
const crypto = require('crypto')

// create the Header
console.log('Welcome to our JWT generator!'.blue.underline)
console.log('Step 1: Create the Header'.yellow)

let header = {
  typ: 'jwt',
  alg: 'HS256'
}

header = JSON.stringify(header)
console.log('Our header looks like: ' + header.green)

header = new Buffer(header).toString('base64')
console.log('Base64 encoded, that looks like: ' + header.red)
console.log('Header is complete!'.green.underline)

// create the payload
console.log('Step 2: Create the Payload'.yellow)

let payload = {
  iat: Date.now(),
  name: 'Dongchao',
  myClaim: true
}

payload = JSON.stringify(payload)
console.log('The payload looks like: ' + payload.green)

payload = new Buffer(payload).toString('base64')
console.log('Base64 encoded, that looks like: ' + payload.red)
console.log('Payload is complete!'.green.underline)

// assemble the key
let key = header + '.' + payload

console.log('Step 3a: Assembling the key'.yellow)
console.log('Our key looks like: ' + key.green)

// sign the key
// hmac = crypto.createHmac('sha256', secret)
// hmac.update(key)
// hmac.digest('base64')
console.log('Step 3b: Signing the key'.yellow)
let secret = 'hisecret'

console.log('The secret is ' + secret.rainbow + ' Do not tell anyone!')
const hmac = crypto.createHmac('sha256', secret)
hmac.update(key)
key = hmac.digest('base64')

console.log('After signing, our key looks like this: ' + key.red)
console.log('The key is complete!'.green.underline)

// put it together
let jwt = header + '.' + payload + '.' + key
console.log('Our finished JWT is: ' + jwt.rainbow)

// You can now use the JWT debugger to verify
// https://jwt.io/  DEBUGGER
