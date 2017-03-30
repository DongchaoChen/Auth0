const jwt = require('jsonwebtoken')

var userJwt, cert, token

userJwt = {
  id: user.id,
  username: user.username,
  email: user.email,
  firstName: user.firstName,
  lastName: user.lastName,
  type: user.type,
  roles: []
}

cert = 'publicKey'

token = jwt.sign(userJwt, cert)

console.log(token)
