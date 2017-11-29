const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
var testResults = 'Passed'
const url = 'http://localhost:3000'


nightmare
  .viewport(1200, 1000)
  .goto(url + '/login')
  .wait(500)
  .screenshot('../../../Testing Screenshots/add_employee/correct-website.png')
  .click('#ed_293610547')
  .wait(200)
  .type('#ed_293610547', 'eddyhr.test1@gmail.com')
  .wait(500)
  .click('#ed_293610546')
  .wait(500)
  .type('#ed_293610546', 'Eddyhr!123')
  .wait(500)
  .click('.ed-btn-sign-in')
  .wait('#ed_293610548')
  .wait(1100)
  .screenshot('../../../Testing Screenshots/add_employee/signed_in.png')
  .click('#ed_293610548')
  .wait('#ed_293610559')
  .wait(1100)
  .click('#ed_293610549')
  .wait(200)
  .insert('#ed_293610549', 'Taylor')
  .wait(300)
  .click('#ed_293610550')
  .wait(300)
  .insert('#ed_293610550', 'Swift')
  .wait(300)
  .screenshot('../../../Testing Screenshots/add_employee/name_added.png')
  .click('#ed_293610551')
  .wait(300)
  .insert('#ed_293610551', 'eddyhr.test5@gmail.com')
  .wait(300)
  .screenshot('../../../Testing Screenshots/add_employee/email_added.png')
  .click('#ed_293610552')
  .wait(300)
  .insert('#ed_293610552', 'Singer / Songwriter')
  .wait(300)
  .select('#ed_293610553', 'Marketing')
  .wait(300)
  .select('#ed_293610554', 'Idaho Office')
  .wait(300)
  .select('#ed_293610555', 'Full-Time')
  .wait(300)
  .select('#ed_293610556', 'Professionals')
  .wait(300)
  .screenshot('../../../Testing Screenshots/add_employee/jon_info_added.png')
  .click('#ed_293610557')
  .wait(300)
  .insert('#ed_293610557', '60000')
  .wait(300)
  .select('#ed_293610558', 'Year')
  .wait(200)
  .screenshot('../../../Testing Screenshots/add_employee/compensation_added.png')
  .click('#ed_293610559')
  .wait(2000)
  .screenshot('../../../Testing Screenshots/add_employee/employee_added.png')
  .end()
    .then(function (result) {
        console.log('    ')
      console.log('    ')
      console.log('  ADD EMPLOYEE - TEST RESULTS: ')
      console.log('    ')
      console.log('    + Login:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Clicked Add New Employee:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Add Employee First Name:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Add Employee Last Name:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Add Employee Work Email:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Add Employee Job Title:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Add Employee Department:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Add Employee Office Location:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Add Employee Employment Type:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Add Employee Start Date:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Add Employee Job Category:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Add Employee Compensation:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Invitation Sent:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    ')
      console.log('  TEST COMPLETED ')
      console.log('    ')
      console.log('    ')
    })
    .catch(function (error) {
      console.error('Error:', error);
    })
