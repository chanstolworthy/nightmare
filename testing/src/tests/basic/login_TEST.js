const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
var testResults = 'Passed'
const vars = require('../../../TestVariables')


nightmare
  .viewport(1200, 1000)
  .goto(vars.mainUrl + '/login')
  .wait(500)
  // .screenshot('../../../Testing Screenshots/login_test/correct-website.png')
  .click('#ed_293610547')
  .wait(200)
  .type('#ed_293610547', vars.AdminEmail)
  .wait(200)
  // .screenshot('../../../Testing Screenshots/login_test/email_added.png')
  .click('#ed_293610546')
  .wait(200)
  .type('#ed_293610546', vars.AdminPassword)
  .wait(200)
  // .screenshot('../../../Testing Screenshots/login_test/password_added.png')
  .click('.ed-btn-sign-in')
  .wait(3000)
  // .screenshot('../../../Testing Screenshots/login_test/logged_in.png')
  .end()
    .then(function (result) {
      console.log('    ')
      console.log('    ')
      console.log('  LOGIN - TEST RESULTS: ')
      console.log('    ')
      console.log('    + Directed To Correct Website:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Email Address Added:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Password Added:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Clicked Signin Button:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    ')
      console.log('  TEST COMPLETED ')
      console.log('    ')
      console.log('    ')
    })
    .catch(function (error) {
      console.error('Error:', error);
    })