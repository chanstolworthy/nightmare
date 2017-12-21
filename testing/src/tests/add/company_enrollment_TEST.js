
//FINISH THIS PAGE

const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
var testResults = 'Passed'
const vars = require('../../../TestVariables')
const chalk = require('chalk');

nightmare
.viewport(1200, 1000)
.goto(vars.mainUrl + '/login')
.wait(1000)
.wait('.sign-up')
.click('.sign-up')
.wait('#ed_293610563')
.exists('#ed_293610563')
.then(function(result){
  console.log('   ')
  console.log('   ')
  console.log('////////////////E N R O L L  C O M P A N Y  T E S T////////////////////')
  console.log('   ')
  console.log('   ')
  console.log(chalk.bold('>>> SIGNUP PAGE <<<'))
  console.log(' ')
  if(result){
      console.log(chalk.green('   + Signup Button Clicked: PASS'))
  }
  else{
      console.log(chalk.red('   - Signup Button Clicked: FAIL'))
  }
})

.then(function(){
      return nightmare
      .wait(500)
      .click('#ed_293610563')
      .exists('#ed_293610564')
      .then(function(result){
        if(result){
            console.log(chalk.green('   + Selected Enroll Company: PASS'))
        }
        else{
            console.log(chalk.red('   - Selected Enroll Company: FAIL'))
        }
      })
    })
.then(function(){
  return nightmare
  .wait(100)
  insert('#ed_293610564', 'Daniel')
  .wait(100)
  .exists('#ed_293610564')
  .then(function(result){
    if(result){
      console.log(chalk.green('   + Add Employee First Name: PASS'))
    }
    else{
      console.log(chalk.red('   - Add Employee First Name: FAIL'))
    }
  })
})
.then(function(){
  return nightmare
  .wait(100)
  insert('#ed_293610565', 'Dunfrey')
  .wait(100)
  .exists('#ed_293610565')
  .then(function(result){
    if(result){
      console.log(chalk.green('   + Add Employee Last Name: PASS'))
    }
    else{
      console.log(chalk.red('   - Add Employee Last Name: FAIL'))
    }
  })
})
.then(function(){
  return nightmare
  .wait(100)
  insert('#ed_293610566', vars.potentialEmployeePassword)
  .wait(100)
  .exists('#ed_293610566')
  .then(function(result){
    if(result){
      console.log(chalk.green('   + Add Employee Email: PASS'))
    }
    else{
      console.log(chalk.red('   - Add Employee Last Email: FAIL'))
    }
  })
})
.then(function(){
  return nightmare
  .wait(100)
  insert('#ed_293610567', vars.potentialEmployeeEmail)
  .wait(100)
  .exists('#ed_293610567')
  .then(function(result){
    if(result){
      console.log(chalk.green('   + Add Employee Password: PASS'))
    }
    else{
      console.log(chalk.red('   - Add Employee Last Password: FAIL'))
    }
  })
})
.then(function(){
  return nightmare
  .wait(100)
  insert('#ed_293610568', vars.potentialEmployeeEmail)
  .wait(100)
  .exists('#ed_293610568')
  .then(function(result){
    if(result){
      console.log(chalk.green('   + Add Employee Confirm Password: PASS'))
    }
    else{
      console.log(chalk.red('   - Add Employee Last Confirm Password: FAIL'))
    }
  })
})
.then(function(){
  return nightmare
  .wait(100)
  .exists('#ed_293610569')
  .then(function(result){
    if(result){
      console.log(chalk.green('   + Click Agree To Terms And Conditions: PASS'))
    }
    else{
      console.log(chalk.red('   - Click Agree To Terms And Conditions: FAIL'))
    }
  })
})

   .then(function(){
      return nightmare
        .click('#ed_293610569')
        .wait(500)
        .click('#ed_293610570')
        .wait(300)
        })
      .then(function(){
          return nightmare
          .wait('#ed_293610571')
          .insert('#ed_293610571', 'Daniels Construction Company')
          .wait(200)
          .then(function(result){
            if(result){
              console.log(chalk.green('   + Added Company Name: PASS'))
            }
            else{
              console.log(chalk.red('   - Added Company Name: FAIL'))
            }
          })
        })       
        .then(function(){
          return nightmare
            .click('#ed_293610572')
            .wait(300)
            })

            .then(function(){
              return nightmare
              .wait(500)
              .select('#ed_293610573', 'Consumer Goods')
              .wait(100)
              .select('#ed_293610574', '11-50 people')
              .wait(100)
              .select('#ed_293610575', 'HR Manager')
              .wait(100)
              .select('#ed_293610576', 'Yes, HR software is new to us!')
              .wait(100)
                })
                .then(function(){
                  return nightmare
                  .wait(200)
                  .exists('#ed_293610573' && '#ed_293610574' && '#ed_293610575' && '#ed_293610576')
                  .then(function(result){
                    if(result){
                      console.log(chalk.green('   + Added Company Details: PASS'))
                    }
                    else{
                      console.log(chalk.red('   - Added Company Details: FAIL'))
                    }
                  })
                })  
                .then(function(){
                  return nightmare
                  .click('#ed_293610577')
                })
                    .then(function(){
                      return nightmare
                      .wait(200)
                      .exists('.ed-inline-link')
                      .then(function(result){
                        if(result){
                          console.log(chalk.green('   + Enroll Company Email Sent: PASS'))
                        }
                        else{
                          console.log(chalk.red('   - Enroll Company Email Sent: FAIL'))
                        }
                      }) 

  .then(function(){
    return nightmare
    .end()
    .then(function(){
        console.log(' ')
        console.log('E N R O L L  C O M P A N Y  C O M P L E T E')
        console.log(' ')
    })
    .catch(function (error) {
        console.log(error)
    })
  })

nightmare
  .viewport(1200, 1000)
  .goto(vars.mainUrl + '/login')
  .wait(2000)
  // .screenshot('../../../Testing Screenshots/company_enrollment/correct-website.png')
  .wait('.sign-up')
  .click('.sign-up')
  .wait('#ed_293610563')
  .wait(300)
  // .screenshot('../../../Testing Screenshots/company_enrollment/enrollment_options.png')
  .click('#ed_293610563')
  .wait('#ed_293610564')
  .wait(500)
  // .screenshot('../../../Testing Screenshots/company_enrollment/selected_company_enrollment.png')
  .insert('#ed_293610564', 'Daniel')
  .wait('#ed_293610565')
  .insert('#ed_293610565', 'Dumphy')
  .wait(200)
  .insert('#ed_293610566', vars.potentialEmployeeEmail)
  .wait(200)
  .type('#ed_293610567', vars.potentialEmployeePassword)
  .wait(200)
  .type('#ed_293610568', vars.potentialEmployeePassword)
  .wait(200)
  // .screenshot('../../../Testing Screenshots/company_enrollment/personal_info_added.png')
  .click('#ed_293610569')
  .wait(500)
  .click('#ed_293610570')
  .wait('#ed_293610571')
  .insert('#ed_293610571', 'Daniels Construction Company')
  .wait(500)
  .click('#ed_293610572')
  .wait(1000)
  .select('#ed_293610573', 'Consumer Goods')
  .wait(200)
  .select('#ed_293610574', '11-50 people')
  .wait(200)
  .select('#ed_293610575', 'HR Manager')
  .wait(200)
  .select('#ed_293610576', 'Yes, HR software is new to us!')
  .wait(500)
  // .screenshot('../../../Testing Screenshots/company_enrollment/company_info_added.png')
  .click('#ed_293610577')
  .wait(3000)
  // .screenshot('../../../Testing Screenshots/company_enrollment/company_added.png')
  .end()
    .then(function (result) {
      console.log('    ')
      console.log('    ')
      console.log('  COMPANY ENROLLMENT - TEST RESULTS: ')
      console.log('    ')
      console.log('    + Directed To Correct Website:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Click Sign Up Now:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Click Company Admin:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Add Admin First Name:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Add Admin Last Name:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Add Admin Email:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Add Admin Password:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Confirm Admin Password:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Add Company Name:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Add Other Company Info:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    + Submit Company / Verify Email:', testResults)
      console.log('    --------------------------------------------------')
      console.log('    ')
      console.log('  TEST COMPLETED ')
      console.log('    ')
      console.log('    ')
    })
    .catch(function (error) {
      console.error('Error:', error);
    })
