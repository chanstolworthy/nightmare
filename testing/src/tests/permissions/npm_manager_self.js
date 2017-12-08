var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });
const vars = require('../../../TestVariables')
const manSelf = require('./manager_self_permissions_TEST')
const elements = require('../../components/elements')

nightmare
.wait(100)
.then(elements.header)
.then(manSelf.perm)
.then(function(){
    return nightmare
    .end()
    .then(function(){
      console.log(' ')
      console.log(' ')
      console.log(' ')
      console.log('///////////////////////////T E S T  C O M P L E T E////////////////////////////////')
      console.log(' ')
      console.log(' ')
      console.log(' ')
    })
    .catch(function (error) {
        console.log(error)
    })

})