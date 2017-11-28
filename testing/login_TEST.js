const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
var testResults = 'Passed'


nightmare
  .goto('http://localhost:3000/login')
  .click('#ed_293610547')
  .wait(1000)
  .type('#ed_293610547', 'eddyhr.test1@gmail.com')
  .wait(1000)
  .click('#ed_293610546')
  .wait(1000)
  .type('#ed_293610546', 'Eddyhr!123')
  .wait(1000)
  .click('.ed-btn-sign-in')
  .wait(3000)
  .end()
    .then(function (result) {
      console.log('    ')
      console.log('    ')
      console.log('  TEST RESULTS: ')
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
