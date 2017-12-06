const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
var testResults = 'Passed'
const url = 'http://localhost:3000'
const b = require('./b')
const c = require('./src/tests/permissions/c')


nightmare
  .viewport(1200, 1000)
  .goto(url + '/login')
  .wait(1000)
  .then(b.runB)
  .then(c.runC)
  .then(function(){
      return nightmare
      .end()
      .then(function(){
          console.log('FINISHED')
      })
      .catch(function(error){
          console.log(error)
      })
  })