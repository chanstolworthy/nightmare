const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
var testResults = 'Passed'
const chalk = require('chalk');
const vars = require('../../../TestVariables')


nightmare
  .viewport(1200, 1000)
  .goto(vars.mainUrl + '/login')
  .wait('.forgot-link')
  .wait(1100)
  // .screenshot('../../../Testing Screenshots/forgot_password/correct-website.png')
  .exists('.forgot-link')
  .then(function(result){
    console.log('   ')
    console.log('   ')
    console.log('///////////////////////F O R G O T   P A S S W O R D  T E S T///////////////////////')
    console.log('   ')
    console.log('   ')
    console.log(chalk.bold('>>> LOGIN PAGE <<<'))
    console.log(' ')
    if(result){
        console.log(chalk.green('   + Forgot Password Link Visible: PASS'))
    }
    else{
        console.log(chalk.red('   - Forgot Password Link Visible: FAIL'))
    }
})
.then(function(){
  return nightmare
  .click('.forgot-link')
  .wait(1000)
  .click('#ed_293610560')
  .wait(100)
  .insert('#ed_293610560', vars.notValidEmail)
  .wait(500)
  .exists('#ed_293610560')
  .then(function(result){
    if(result){
        console.log(chalk.green('   + Insert Incorrect Email: PASS'))
    }
    else{
        console.log(chalk.red('   - Insert Incorrect Email: FAIL'))
    }
  })
})

.then(function(){
  return nightmare
  .click('#ed_293610561')
  .wait(100)
  .exists('.error-body-top')
  .then(function(result){
    if(result){
      console.log(chalk.green('   + Incorrect Email Error Flashes: PASS'))
  }
  else{
      console.log(chalk.red('   - Incorrect Email Error Flashes: FAIL'))
  }
    })
  })

  .then(function(){
    return nightmare
    .click('#ed_293610560')
    .wait(100)
    .insert('#ed_293610560', 'm')
    .wait(100)
    .click('#ed_293610562')
    })

    .then(function(){
      return nightmare
      .wait(500)
      .exists('.reset-sent-body')
      .then(function(result){
        if(result){
          console.log(chalk.green('   + Forgot Password Email Sent: PASS'))
      }
      else{
          console.log(chalk.red('   - Forgot Password Email Sent: FAIL'))
      }
        })
      })


    .then(function(){
      return nightmare
      .end()
      .then(function(){
          console.log(' ')
          console.log('F O R G O T   P A S S W O R D  C O M P L E T E')
          console.log(' ')
      })
      .catch(function (error) {
          console.log(error)
      })
  
  })
