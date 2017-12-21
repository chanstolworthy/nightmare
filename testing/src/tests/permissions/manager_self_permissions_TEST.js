var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });
const vars = require('../../../TestVariables')
const chalk = require('chalk');


module.exports = {
    perm: function(){
    return nightmare
.viewport(1200, 1000)
.goto(vars.mainUrl + '/login')
.wait(500)
.click('#ed_293610547')
.wait(25)
.type('#ed_293610547', vars.managerEmail)
.wait(25)
.click('#ed_293610546')
.wait(25)
.type('#ed_293610546', vars.managerPassword)
.wait(25)
.click('.ed-btn-sign-in')
.wait(2000)
.exists('#ed_293610548')
.then(function(result){
    console.log('   ')
    console.log('  MANAGER - SELF PERMISSIONS TEST:')
    console.log(' ')
    console.log(chalk.bold('>>> EMPLOYEE DIRECTORY <<<'))
    console.log('       MANAGER SELF VIEW ')
    console.log(' ')
    if(result){
        console.log(chalk.red('   - Invite New Employee Disabled: FAIL - PERMISSIONS ERROR!'))
    }
    else{
        console.log(chalk.green('   + Invite New Employee Disabled: PASS'))
    }
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('.email-link')
        .then(function(result){
            if (result) {
                return console.log(chalk.red('   - Send/View Reminder Enrollment Email: FAIL - PERMISSIONS ERROR!'))
            } else {
                console.log(chalk.green('   + Send/View Reminder Enrollment Email: PASS'))
            }
        })
})

    .then(function(){ 
        return nightmare
            .wait(25)
            .goto(vars.mainUrl + '/employee/personal/' + vars.managerID)
            .wait('#ed_f_name293610599')
            .exists('#ed_f_name293610599')
            .then(function (result) {
                console.log(' ')
                console.log(chalk.bold('>>> PERSONAL TAB <<<'))
                console.log(' ')
                console.log('   --- PERSONAL INFORMATION CARD ---')
                console.log('       MANAGER -> SELF  ')
                console.log(' ')
                if (result) {
                    return console.log(chalk.green('   + View First Name: PASS'))
                } else {
                    console.log(chalk.red('   - View First Name: FAIL - PERMISSIONS ERROR!'))
        }
    })
})
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_mid_initial293610603')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Middle Name: PASS'))
                } else {
                    console.log(chalk.red('   - View Middle Name: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_l_name293610606')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Last Name: PASS'))
                } else {
                    console.log(chalk.red('   - View Last Name: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_pref_name293610600')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Preferred Name: PASS'))
                } else {
                    console.log(chalk.red('   - View Preferred Name: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_gender293610604')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Legal Gender: PASS'))
                } else {
                    console.log(chalk.red('   - View Legal Gender: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_gender_iden293610607')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Gender Identity: PASS'))
                } else {
                    console.log(chalk.red('   - View Gender Identity: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_b_day293610601')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Birthday: PASS'))
                } else {
                    console.log(chalk.red('   - View Birthday: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_shirt293610602')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Gender Identity: PASS'))
                } else {
                    console.log(chalk.red('   - View Gender Identity: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_marital_stat293610605')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Marital Status: PASS'))
                } else {
                    console.log(chalk.red('   - View Marital Status: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_ssn293610608')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Social Security Number: PASS'))
                } else {
                    console.log(chalk.red('   - View Social Security Number: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_shirt293610602')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Shirt Size: PASS'))
                } else {
                    console.log(chalk.red('   - View Shirt Size: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610579')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Edit Personal Info Button: PASS'))
                } else {
                    console.log(chalk.red('   - View Edit Personal Info Button: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('.ed-crop-edit-icon')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Edit User Image Button: PASS'))
                } else {
                    console.log(chalk.red('   - View Edit User Image Button: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function(){
        return nightmare
            .click('#ed_293610579')
            .wait('#ed_293610590')
            .exists('#ed_293610580')
            .then(function(result){
                if(result) {
                    return console.log(chalk.red('   - Edit First Name: FAIL - PERMISSIONS ERROR!'))
                } else {
                    console.log(chalk.green('   + Edit First Name: PASS'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610581')
            .then(function(result){
                if (result) {
                    return console.log(chalk.red('   - Edit Middle Initial: FAIL - PERMISSIONS ERROR!'))
                } else {
                    console.log(chalk.green('   + Edit Middle Initial: PASS'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610582')
            .then(function(result){
                if (result) {
                    return console.log(chalk.red('   - Edit Last Name: FAIL - PERMISSIONS ERROR!'))
                } else {
                    console.log(chalk.green('   + Edit Last Name: PASS'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610583')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + Edit Preferred Name: PASS'))
                } else {
                    console.log(chalk.red('   - Edit Preferred Name: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610584')
            .then(function(result){
                if (result) {
                    return console.log(chalk.red('   - Edit Gender: FAIL - PERMISSIONS ERROR!'))
                } else {
                    console.log(chalk.green('   + Edit Gender: PASS'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610585')
            .then(function(result){
                if (result) {
                    return console.log(chalk.red('   - Edit Birthday: FAIL - PERMISSIONS ERROR!'))
                } else {
                    console.log(chalk.green('   + Edit Birthday: PASS'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610586')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + Edit Marital Status: PASS'))
                } else {
                    console.log(chalk.red('   - Edit Marital Status: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610587')
            .then(function(result){
                if (result) {
                    return console.log(chalk.red('   - Edit Social Security Number: FAIL - PERMISSIONS ERROR!'))
                } else {
                    console.log(chalk.green('   + Edit Social Security Number: PASS'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610588')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + Edit Shirt Size: PASS'))
                } else {
                    console.log(chalk.red('   - Edit Shirt Size: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610589')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + Edit Gender Identity: PASS'))
                } else {
                    console.log(chalk.red('   - Edit Gender Identity: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610590')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Save Personal Info Button: PASS'))
                } else {
                    console.log(chalk.red('   - View Save Personal Info Button: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function(){
        return nightmare
        .click('#ed_293610590')
    })

    .then(function() {
        console.log(' ')
        console.log('   --- CONTACT INFORMATION CARD ---')
        console.log('       MANAGER -> SELF ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('#ed_293610626')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Primary Email Address: PASS'))
                } else {
                    console.log(chalk.red('   - View Primary Email Address: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610627')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Secondary Email Address: PASS'))
                } else {
                    console.log(chalk.red('   - View Secondary Email Address: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610628')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Work Phone Number: PASS'))
                } else {
                    console.log(chalk.red('   - View Work Phone Number: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610629')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Primary Phone Number: PASS'))
                } else {
                    console.log(chalk.red('   - View Primary Phone Number: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610630')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Address: PASS'))
                } else {
                    console.log(chalk.red('   - View Address: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610631')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View City: PASS'))
                } else {
                    console.log(chalk.red('   - View City: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610632')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View State: PASS'))
                } else {
                    console.log(chalk.red('   - View State: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610633')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Zip Code: PASS'))
                } else {
                    console.log(chalk.red('   - View Zip Code: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610592')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Edit Contact Info Button: PASS'))
                } else {
                    console.log(chalk.red('   - View Edit Contact Info Button: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .click('#ed_293610592')
            .wait(100)
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610650')
            .then(function(result){
                if(result) {
                    return console.log(chalk.red('   - Edit Primary Email: FAIL - PERMISSIONS ERROR!'))
                } else {
                    console.log(chalk.green('   + Edit Primary Email: PASS'))
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610651')
            .then(function(result){
                if(result) {
                    return console.log(chalk.green('   + Edit Secondary Email: PASS'))
                } else {
                    console.log(chalk.red('   - Edit Secondary Email: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610652')
            .then(function(result){
                if(result) {
                    return console.log(chalk.green('   + Edit Primary Phone Number: PASS'))
                } else {
                    console.log(chalk.red('   - Edit Primary Phone Number: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610653')
            .then(function(result){
                if(result) {
                    return console.log(chalk.green('   + Edit Work Phone Number: PASS'))
                } else {
                    console.log(chalk.red('   - Edit Work Phone Number: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610654')
            .then(function(result){
                if(result) {
                    return console.log(chalk.green('   + Edit Work Phone Number EXT: PASS'))
                } else {
                    console.log(chalk.red('   - Edit Work Phone Number EXT: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610655')
            .then(function(result){
                if(result) {
                    return console.log(chalk.red('   - Edit Address: FAIL - PERMISSIONS ERROR!'))
                } else {
                    console.log(chalk.green('   + Edit Address: PASS'))
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610656')
            .then(function(result){
                if(result) {
                    return console.log(chalk.red('   - Edit City: FAIL - PERMISSIONS ERROR!'))
                } else {
                    console.log(chalk.green('   + Edit City: PASS'))
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610657')
            .then(function(result){
                if(result) {
                    return console.log(chalk.red('   - Edit State: FAIL - PERMISSIONS ERROR!'))
                } else {
                    console.log(chalk.green('   + Edit State: PASS'))
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610658')
            .then(function(result){
                if(result) {
                    return console.log(chalk.red('   - Edit Zip Code: FAIL - PERMISSIONS ERROR!'))
                } else {
                    console.log(chalk.green('   + Edit Zip Code: PASS'))
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
        .click('#ed_293610659')
    })
    .then(function() {
        console.log(' ')
        console.log('   --- EMERGENCY CONTACT CARD ---')
        console.log('       MANAGER -> SELF ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('#ed_293610634')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Full Name: PASS'))
                } else {
                    console.log(chalk.red('   - View Full Name: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610635')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Relationship: PASS'))
                } else {
                    console.log(chalk.red('   - View Relationship: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610636')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Phone Number: PASS'))
                } else {
                    console.log(chalk.red('   - View Phone Number: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610637')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Email: PASS'))
                } else {
                    console.log(chalk.red('   - View Email: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610593')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Edit Emergency Contact Button: PASS'))
                } else {
                    console.log(chalk.red('   - View Edit Emergency Contact Button: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .click('#ed_293610593')
    })
        .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610660')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + Edit Full Name: PASS'))
                } else {
                    console.log(chalk.red('   - Edit Full Name: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610661')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + Edit Relationship: PASS'))
                } else {
                    console.log(chalk.red('   - Edit Relationship: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610662')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + Edit Phone: PASS'))
                } else {
                    console.log(chalk.red('   - Edit Phone: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610663')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + Edit Email: PASS'))
                } else {
                    console.log(chalk.red('   - Edit Email: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610664')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Save Button: PASS'))
                } else {
                    console.log(chalk.red('   - View Save Button: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(100)
        .click('#ed_293610664')
        .wait(100)
    })
    .then(function() {
        console.log(' ')
        console.log('   --- SOCIAL MEDIA CARD ---')
        console.log('       MANAGER -> SELF ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('#ed_293610638')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Linkedin Link: PASS'))
                } else {
                    console.log(chalk.green('   + No Linkedin Link Added: PASS'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610639')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Facebook Link: PASS'))
                } else {
                    console.log(chalk.green('   + No Facebook Link Added: PASS'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610640')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Instagram Link: PASS'))
                } else {
                    console.log(chalk.green('   + No Instagram Link Added: PASS'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610641')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Twitter Link: PASS'))
                } else {
                    console.log(chalk.green('   + No Twitter Link: PASS'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610594')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + View Edit Social Media Button: PASS'))
                } else {
                    console.log(chalk.red('   - View Edit Social Media Button: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(100)
            .click('#ed_293610594')
            .wait(25)
            .exists('#ed_293610665')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + Edit LinkedIn: PASS'))
                } else {
                    console.log(chalk.red('   - Edit LinkedIn: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610666')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + Edit Facebook: PASS'))
                } else {
                    console.log(chalk.red('   - Edit Facebook: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610667')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + Edit Instagram: PASS'))
                } else {
                    console.log(chalk.red('   - Edit Instagram: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610668')
            .then(function(result){
                if (result) {
                    return console.log(chalk.green('   + Edit Twitter: PASS'))
                } else {
                    console.log(chalk.red('   - Edit Twitter: FAIL - PERMISSIONS ERROR!'))
                }
            })
    })
    .then(function(){
        return nightmare
        .click('#ed_293610669')
        .wait(200)
    })

    .then(function(){ 
        return nightmare
            .wait(25)
            .click('#ed_293610596')
            .wait('#ed_293610643')
            .exists('#ed_293610642')
            .then(function (result) {
                console.log(' ')
                console.log(chalk.bold('>>> JOB TAB <<<'))
                console.log(' ')
                console.log('   --- JOB INFORMATION CARD ---')
                console.log('       MANAGER -> SELF  ')
                console.log(' ')
                if (result) {
                    return console.log(chalk.green('   + View Employment Status: PASS'))
                } else {
                    console.log(chalk.red('   - View Employment Status: FAIL - PERMISSIONS ERROR!'))
        }
    })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610643')
        .then(function(result){
            if (result) {
                return console.log(chalk.green('   + View Location: PASS'))
            } else {
                console.log(chalk.red('   - View Location: FAIL - PERMISSIONS ERROR!'))
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610644')
        .then(function(result){
            if (result) {
                return console.log(chalk.green('   + View Job Title: PASS'))
            } else {
                console.log(chalk.red('   - View Job Title: FAIL - PERMISSIONS ERROR!'))
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610645')
        .then(function(result){
            if (result) {
                return console.log(chalk.green('   + View Department: PASS'))
            } else {
                console.log(chalk.red('   - View Department: FAIL - PERMISSIONS ERROR!'))
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610646')
        .then(function(result){
            if (result) {
                return console.log(chalk.green('   + View Start Date: PASS'))
            } else {
                console.log(chalk.red('   - View Start Date: FAIL - PERMISSIONS ERROR!'))
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610647')
        .then(function(result){
            if (result) {
                return console.log(chalk.green('   + View Reports To: PASS'))
            } else {
                console.log(chalk.red('   - View Reports To: FAIL - PERMISSIONS ERROR!'))
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610609')
        .then(function(result){
            if (result) {
                return console.log(chalk.red('   - View Edit Job Info Button: FAIL - PERMISSIONS ERROR!'))
            } else {
                console.log(chalk.green('   + View Edit Job Info Button: PASS'))
            }
        })
})
.then(function() {
    console.log(' ')
    console.log('   --- BONUS CARD ---')
    console.log('       MANAGER -> SELF ')
    console.log(' ')
    return nightmare
        .wait(25)
        .exists('.ed-bonus-info')
        .then(function(result){
            if (result) {
                return console.log(chalk.green('   + View Bonus Information: PASS'))
            } else {
                console.log(chalk.red('   - View Bonus Information: FAIL - PERMISSIONS ERROR!'))
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610610')
        .then(function(result){
            if (result) {
                return console.log(chalk.red('   - View Edit Bonus Button: FAIL - PERMISSIONS ERROR!'))
            } else {
                console.log(chalk.green('   + View Edit Bonus Button: PASS'))
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610619')
        .then(function(result){
            if (result) {
                return console.log(chalk.red('   - View Add Bonus Button: FAIL - PERMISSIONS ERROR!'))
            } else {
                console.log(chalk.green('   + View Add Bonus Button: PASS'))
            }
        })
})
.then(function() {
    console.log(' ')
    console.log('   --- COMPENSATION CARD ---')
    console.log('       MANAGER -> SELF ')
    console.log(' ')
    return nightmare
        .wait(25)
        .exists('.ed-compensation-info')
        .then(function(result){
            if (result) {
                return console.log(chalk.green('   + View Employee Compensation: PASS'))
            } else {
                console.log(chalk.red('   - View Compensation:  FAIL - PERMISSIONS ERROR!'))
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610611')
        .then(function(result){
            if (result) {
                return console.log(chalk.red('   - View Edit Compensation Button: FAIL - PERMISSIONS ERROR!'))
            } else {
                console.log(chalk.green('   + View Edit Compensation Button: PASS'))
            }
        })
})
.then(function() {
    console.log(' ')
    console.log('   --- ASSETS CARD ---')
    console.log('       MANAGER -> SELF ')
    console.log(' ')
    return nightmare
        .wait(25)
        .exists('.ed-asset-info')
        .then(function(result){
            if (result) {
                return console.log(chalk.green('   + View Assets: PASS'))
            } else {
                console.log(chalk.red('   - View Assets: FAIL - PERMISSIONS ERROR!'))
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610612')
        .then(function(result){
            if (result) {
                return console.log(chalk.red('   - View Edit Assets Button: FAIL - PERMISSIONS ERROR!'))
            } else {
                console.log(chalk.green('   + View Edit Assets Button: PASS'))
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610648')
        .then(function(result){
            if (result) {
                return console.log(chalk.red('   - View Add Assets Button: FAIL - PERMISSIONS ERROR!'))
            } else {
                console.log(chalk.green('   + View Add Assets Button: PASS'))
            }
        })
})
.then(function() {
    console.log(' ')
    console.log('   --- DIRECT REPORTS CARD ---')
    console.log('       MANAGER -> SELF ')
    console.log(' ')
    return nightmare
        .wait(25)
        .exists('.ed-direct-report-info')
        .then(function(result){
            if (result) {
                return console.log(chalk.green('   + View Direct Reports: PASS'))
            } else {
                console.log(chalk.red('   - View Bonus Information: FAIL - PERMISSIONS ERROR!'))
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610613')
        .then(function(result){
            if (result) {
                return console.log(chalk.red('   - View Edit Direct Reports Button: FAIL - PERMISSIONS ERROR!'))
            } else {
                console.log(chalk.green('   + View Edit Direct Reports Button: PASS'))
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610649')
        .then(function(result){
            if (result) {
                return console.log(chalk.red('   - View Add Direct Reports Button: FAIL - PERMISSIONS ERROR!'))
            } else {
                console.log(chalk.green('   + View Add Direct Reports Button: PASS'))
            }
        })
})
.then(function() {
    console.log(' ')
    console.log('   --- EEO FSLA CARD ---')
    console.log('       MANAGER -> SELF ')
    console.log(' ')
    return nightmare
        .wait(25)
        .exists('.ed-eeo-fsla-info')
        .then(function(result){
            if (result) {
                return console.log(chalk.green('   + View EEO And FSLA: PASS'))
            } else {
                console.log(chalk.red('   - View EEO And FSLA: FAIL - PERMISSIONS ERROR!'))
            }
        })
})
.then(function(){ 
    return nightmare
        .wait(500)
        .exists('#ed_293610597')
        .then(function (result) {
            console.log(' ')
            console.log(chalk.bold('>>> NOTES TAB <<<'))
            console.log(' ')
            console.log('   --- NOTES CARD ---')
            console.log('       MANAGER -> SELF  ')
            console.log(' ')
            if (result) {
                return console.log(chalk.red('   - View Notes Tab: FAIL - PERMISSIONS ERROR!'))
            } else {
                console.log(chalk.green('   + View Notes Tab: PASS'))
    }
})
})
.then(function() {
    return nightmare
        .wait(25)
        .goto(vars.mainUrl + '/employee/notes/' + vars.managerID)
        .wait(1500)
        .exists('.ed-notes-section')
        .then(function(result){
            if (result) {
                return console.log(chalk.red('   - View Employee Notes: FAIL - PERMISSIONS ERROR!'))
            } else {
                console.log(chalk.green('   + View Employee Notes: PASS'))
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610625')
        .then(function(result){
            if (result) {
                return console.log(chalk.red('   - View Add Notes Button: FAIL - PERMISSIONS ERROR!'))
            } else {
                console.log(chalk.green('   + View Add Notes Button: PASS'))
            }
        })
})
.then(function(){ 
    return nightmare
        .wait(500)
        .exists('#ed_293610598')
        .then(function (result) {
            console.log(' ')
            console.log(chalk.bold('>>> DOCUMENTS TAB <<<'))
            console.log(' ')
            console.log('   --- DOCUMENTS CARD ---')
            console.log('       MANAGER -> SELF  ')
            console.log(' ')
            if (result) {
                return console.log(chalk.green('   + View Documents Tab: PASS'))
            } else {
                console.log(chalk.red('   - View Documents Tab: FAIL - PERMISSIONS ERROR!'))
    }
})
})
.then(function() {
    return nightmare
        .wait(25)
        .goto(vars.mainUrl + '/employee/documents/' + vars.managerID)
        .wait(1500)
        .exists('.ed-document-tab-content')
        .then(function(result){
            if (result) {
                return console.log(chalk.green('   + View Employee Documents: PASS'))
            } else {
                console.log(chalk.red('   - View Employee Documents: FAIL - PERMISSIONS ERROR!'))
            }
        })
})
.then(function(){
    return nightmare
    .end()
    .then(function(){
        console.log(' ')
        console.log(' ')
        console.log('M A N A G E R - S E L F   C O M P L E T E')
        console.log(' ')
        console.log(' ')
    })
    .catch(function (error) {
        console.log(error)
    })

})
}
}