const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
var testResults = 'Passed'
const vars = require('../../../TestVariables')
const chalk = require('chalk');

nightmare
.viewport(1200, 1000)
.goto(vars.mainUrl + '/login')
.wait('.forgot-link')
.wait(1100)
.exists('#ed_293610547')
.then(function(result){
  console.log('   ')
  console.log('   ')
  console.log('///////////////////////L O G I N  T E S T///////////////////////')
  console.log('   ')
  console.log('   ')
  console.log(chalk.bold('>>> LOGIN PAGE <<<'))
  console.log(' ')
  if(result){
      console.log(chalk.green('   + Email Field Visible: PASS'))
  }
  else{
      console.log(chalk.red('   - Email Field Visible: FAIL'))
  }
})

.then(function(){
      return nightmare
      .insert('#ed_293610547', vars.AdminEmail)
      .wait(100)
      .insert('#ed_293610546', vars.AdminPassword)
      .wait(100)
      .exists('#ed_293610546')
      .then(function(result){
        if(result){
            console.log(chalk.green('   + Insert Email: PASS'))
            console.log(chalk.green('   + Insert Password: PASS'))
        }
        else{
            console.log(chalk.red('   - Insert Email: FAIL'))
            console.log(chalk.red('   - Insert Password: FAIL'))
        }
      })
    })

.then(function(){
return nightmare
.click('.ed-btn-sign-in')
.wait('#ed_293610548')
.exists('#ed_293610548')
.then(function(result){
  if(result){
    console.log(chalk.green('   + User Logged In: PASS'))
}
else{
    console.log(chalk.red('   - User Logged In: FAIL'))
}
  })
})



  .then(function(){
    return nightmare
    .end()
    .then(function(){
        console.log(' ')
        console.log('L O G I N   C O M P L E T E')
        console.log(' ')
    })
    .catch(function (error) {
        console.log(error)
    })
  })
