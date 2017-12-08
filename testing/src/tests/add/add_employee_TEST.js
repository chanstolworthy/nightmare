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
  console.log('///////////////////////A D D  E M P L O Y E E  T E S T///////////////////////')
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
.wait(500)
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
  .click('#ed_293610548')
})

.then(function(){
  return nightmare
  .wait(1000)
  .exists('#ed_293610548')
  .then(function(result){
    if(result){
      console.log(chalk.green('   + Add Employee Button Clicked: PASS'))
  }
  else{
      console.log(chalk.red('   - Add Employee Button Clicked: FAIL'))
  }
    })
  })

  .then(function(){
    return nightmare
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
    exists('#ed_293610549' && '#ed_293610550')
    .then(function(result){
      if(result){
        console.log(chalk.green('   + Add Employee First Name: PASS'))
        console.log(chalk.green('   + Add Employee Last Name: PASS'))
    }
    else{
        console.log(chalk.red('   - Add Employee First Name: FAIL'))
        console.log(chalk.red('   - Add Employee Last Name: FAIL'))
        }
      })
    })

    .then(function(){
      return nightmare
      .click('#ed_293610551')
      .wait(300)
      .insert('#ed_293610551', vars.potentialEmployeeEmail)
      .wait(300)
      .exists('#ed_293610551')
      .then(function(result){
        if(result){
          console.log(chalk.green('   + Employee Email Added: PASS'))
      }
      else{
          console.log(chalk.red('   - Employee Email Added: FAIL'))
      }
        })
      })

      .then(function(){
        return nightmare
        .insert('#ed_293610552', 'Singer / Songwriter')
        .wait(300)
        .exists('#ed_293610552')
        .then(function(result){
          if(result){
            console.log(chalk.green('   + Employee Job Title Added: PASS'))
        }
        else{
            console.log(chalk.red('   - Employee Job Title Added: FAIL'))
        }
          })
        })

        .then(function(){
          return nightmare
          .select('#ed_293610553', 'Marketing')
          .wait(300)
          .select('#ed_293610554', 'Idaho Office')
          .wait(300)
          .select('#ed_293610555', 'Full-Time')
          .wait(300)
          .exists('#ed_293610553')
          .then(function(result){
            if(result){
              console.log(chalk.green('   + Employee Department Added: PASS'))
              console.log(chalk.green('   + Employee Location Added: PASS'))
              console.log(chalk.green('   + Employee Enrollment Type Added: PASS'))
          }
          else{
              console.log(chalk.red('   - Employee Department Added: FAIL'))
              console.log(chalk.red('   - Employee Location Added: FAIL'))
              console.log(chalk.red('   - Employee Enrollment Type Added: FAIL'))
          }
            })
          })

          .then(function(){
            return nightmare
            .select('#ed_293610556', 'Professionals')
            .wait(300)
            .exists('#ed_293610556')
            .then(function(result){
              if(result){
                console.log(chalk.green('   + Employee Job Category Added: PASS'))
            }
            else{
                console.log(chalk.red('   - Employee Job Category Added: FAIL'))
            }
          })
        })

        .then(function(){
          return nightmare
          .insert('#ed_293610557', '60000')
          .wait(300)
          .exists('#ed_293610557')
          .then(function(result){
            if(result){
              console.log(chalk.green('   + Employee Pay Rate Added: PASS'))
          }
          else{
              console.log(chalk.red('   - Employee Pay Rate Added: FAIL'))
          }
        })
      })

      .then(function(){
        return nightmare
        .select('#ed_293610558', 'Year')
        .wait(200)
        .exists('#ed_293610558')
        .then(function(result){
          if(result){
            console.log(chalk.green('   + Employee Pay Rate Per Added: PASS'))
        }
        else{
            console.log(chalk.red('   - Employee Pay Rate Per Added: FAIL'))
        }
      })
    })

    .then(function(){
      return nightmare
      .click('#ed_293610559')
      .wait(1000)
      .exists('#ed_293610559')
      .then(function(result){
        if(result){
          console.log(chalk.green('   + Employee Added: PASS'))
      }
      else{
          console.log(chalk.red('   - Employee Added: FAIL'))
      }
    })
  })

  .then(function(){
    return nightmare
    .end()
    .then(function(){
        console.log(' ')
        console.log('A D D  E M P L O Y E E   C O M P L E T E')
        console.log(' ')
    })
    .catch(function (error) {
        console.log(error)
    })
  })