//DEV:
  //CHANDLER STOLWORTHY
  //12/2017

const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
var d = new Date();
const elements = require('./src/components/elements')
const empSelf = require('./src/tests/permissions/employee_self_permissions_TEST')
const manEmp = require('./src/tests/permissions/manager_employee_permissions_TEST')
const manSelf = require('./src/tests/permissions/manager_self_permissions_TEST')
const empEmp = require('./src/tests/permissions/employee_employee_permissions_TEST')
const admSelf = require('./src/tests/permissions/admin_self_permissions_TEST')
const admEmp = require('./src/tests/permissions/admin_employee_permissions_TEST')

nightmare
  .wait(100)
  .then(elements.header)
  // PERMISSIONS CHECKING EMPLOYEE-SELF ACCOUNT
  .then(empSelf.perm)
  .then(elements.divider)
  // PERMISSIONS CHECKING EMPLOYEE - EMPLOYEE ACCOUNT
  .then(empEmp.perm)
  .then(elements.divider)
  // PERMISSIONS CHECKING MANAGER SELF ACCOUNT
  .then(manSelf.perm)
  .then(elements.divider)
  // PERMISSIONS MANAGER CHECKING MANAGER EMPLOYEE ACCOUNT
  .then(manEmp.perm)
  .then(elements.divider)
  // PERMISSIONS CHECKING ADMIN SELF ACCOUNT
  .then(admSelf.perm)
  .then(elements.divider)
  // PERMISSIONS CHECKING ADMIN EMPLOYEE ACCOUNT
  .then(admEmp.perm)

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
  
// elements.header(); 
// empSelf.perm();
// empEmp.perm();