//DEV: Chandler Stolworthy 12/2017

var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });
var d = new Date();
const url = 'http://localhost:3000'
const userID_1 = '1510873883586' //MANAGER
const userID_2 = '1510874056660' //EMPLOYEE
const userID_3 = '1510865716190' //ADMIN

nightmare
.viewport(1200, 1000)
.goto(url + '/login')
.wait(500)
.click('#ed_293610547')
.wait(25)
.type('#ed_293610547', 'eddyhr.test4@gmail.com')
.wait(25)
.click('#ed_293610546')
.wait(25)
.type('#ed_293610546', 'Eddyhr!123')
.wait(25)
.click('.ed-btn-sign-in')
.wait(2000)
.exists('#ed_293610548')
.then(function(result){
    console.log('   ')
    console.log('   ')
    console.log('   ')
    console.log('   ')
    console.log('////////////////////////////P E R M I S S I O N S  T E S T////////////////////////////////////')
    console.log('   ')
    console.log('   ')
    console.log('   ')
    console.log('   ')
    console.log('ALL PERMISSIONS TEST:')
    console.log('   ')
    console.log('START - DATE/TIME: ' + d.getMonth() + '/' + d.getDay() + '/' +  d.getFullYear() + ' - ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds())
    console.log(' ')
    console.log('>>> EMPLOYEE DIRECTORY <<<')
    console.log('       EMPLOYEE VIEW ')
    console.log(' ')
    if(result){
        console.log('   - Invite New Employee Disabled: FAIL - PERMISSIONS ERROR!')
    }
    else{
        console.log('   + Invite New Employee Disabled: PASS')
    }
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('.email-link')
        .then(function(result){
            if (result) {
                return console.log('   - Send/View Reminder Enrollment Email: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log('   + Send/View Reminder Enrollment Email: PASS')
            }
        })
})

    .then(function(){ 
        return nightmare
            .wait(25)
            .goto(url + '/employee/personal/' + userID_1)
            .wait('#ed_f_name293610599')
            .exists("#ed_f_name293610599")
            .then(function (result) {
                console.log(' ')
                console.log('>>> PERSONAL TAB <<<')
                console.log(' ')
                console.log('   --- PERSONAL INFORMATION CARD ---')
                console.log('       EMPLOYEE -> EMPLOYEE  ')
                console.log(' ')
                if (result) {
                    return console.log('   + View First Name: PASS')
                } else {
                    console.log("   - View First Name: FAIL - PERMISSIONS ERROR!")
        }
    })
})
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_mid_initial293610603')
            .then(function(result){
                if (result) {
                    return console.log('   + View Middle Name: PASS')
                } else {
                    console.log("   - View Middle Name: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_l_name293610606')
            .then(function(result){
                if (result) {
                    return console.log('   + View Last Name: PASS')
                } else {
                    console.log("   - View Last Name: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_pref_name293610600')
            .then(function(result){
                if (result) {
                    return console.log('   + View Preferred Name: PASS')
                } else {
                    console.log("   - View Preferred Name: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists("#ed_gender293610604")
            .then(function(result){
                if (result) {
                    return console.log('   + View Legal Gender: PASS')
                } else {
                    console.log("   - View Legal Gender: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_gender_iden293610607')
            .then(function(result){
                if (result) {
                    return console.log('   + View Gender Identity: PASS')
                } else {
                    console.log("   - View Gender Identity: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_b_day293610601')
            .then(function(result){
                if (result) {
                    return console.log('   + View Birthday: PASS')
                } else {
                    console.log("   - View Birthday: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_marital_stat293610605')
            .then(function(result){
                if (result) {
                    return console.log('   + View Marital Status: PASS')
                } else {
                    console.log("   - View Marital Status: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_ssn293610608')
            .then(function(result){
                if (result) {
                    return console.log('   - View Social Security Number: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Social Security Number: PASS")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_shirt293610602')
            .then(function(result){
                if (result) {
                    return console.log('   - View Shirt Size: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Shirt Size: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610579')
            .then(function(result){
                if (result) {
                    return console.log('   - View Edit Personal Info Button: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Edit Personal Info Button: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('.ed-crop-edit-icon')
            .then(function(result){
                if (result) {
                    return console.log('   - View Edit User Image Button: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Edit User Image Button: PASS")
                }
            })
    })

    .then(function() {
        console.log(' ')
        console.log('   --- CONTACT INFORMATION CARD ---')
        console.log('       EMPLOYEE -> EMPLOYEE ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('#ed_293610626')
            .then(function(result){
                if (result) {
                    return console.log('   + View Primary Email Address: PASS')
                } else {
                    console.log("   - View Primary Email Address: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610627')
            .then(function(result){
                if (result) {
                    return console.log('   + View Secondary Email Address: PASS')
                } else {
                    console.log("   - View Secondary Email Address: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610628')
            .then(function(result){
                if (result) {
                    return console.log('   + View Work Phone Number: PASS')
                } else {
                    console.log("   - View Work Phone Number: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610629')
            .then(function(result){
                if (result) {
                    return console.log('   + View Primary Phone Number: PASS')
                } else {
                    console.log("   - View Primary Phone Number: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610630')
            .then(function(result){
                if (result) {
                    return console.log('   - View Address: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Address: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610631')
            .then(function(result){
                if (result) {
                    return console.log('   - View City: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View City: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610632')
            .then(function(result){
                if (result) {
                    return console.log('   - View State: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View State: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610633')
            .then(function(result){
                if (result) {
                    return console.log('   - View Zip Code: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Zip Code: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610592')
            .then(function(result){
                if (result) {
                    return console.log('   - View Edit Contact Info Button: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Edit Contact Info Button: PASS")
                }
            })
    })
    .then(function() {
        console.log(' ')
        console.log('   --- EMERGENCY CONTACT CARD ---')
        console.log('       EMPLOYEE -> EMPLOYEE ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('#ed_293610634')
            .then(function(result){
                if (result) {
                    return console.log('   + View Full Name: PASS')
                } else {
                    console.log("   - View Full Name: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610635')
            .then(function(result){
                if (result) {
                    return console.log('   + View Relationship: PASS')
                } else {
                    console.log("   - View Relationship: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610636')
            .then(function(result){
                if (result) {
                    return console.log('   + View Phone Number: PASS')
                } else {
                    console.log("   - View Phone Number: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610637')
            .then(function(result){
                if (result) {
                    return console.log('   + View Email: PASS')
                } else {
                    console.log("   - View Email: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610593')
            .then(function(result){
                if (result) {
                    return console.log('   - View Edit Emergency Contact Button: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Edit Emergency Contact Button: PASS")
                }
            })
    })
    .then(function() {
        console.log(' ')
        console.log('   --- SOCIAL MEDIA CARD ---')
        console.log('       EMPLOYEE -> EMPLOYEE ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('#ed_293610638')
            .then(function(result){
                if (result) {
                    return console.log('   + View Linkedin Link: PASS')
                } else {
                    console.log("   + No Linkedin Link Added: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610639')
            .then(function(result){
                if (result) {
                    return console.log('   + View Facebook Link: PASS')
                } else {
                    console.log("   + No Facebook Link Added: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610640')
            .then(function(result){
                if (result) {
                    return console.log('   + View Instagram Link: PASS')
                } else {
                    console.log("   + No Instagram Link Added: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610641')
            .then(function(result){
                if (result) {
                    return console.log('   + View Twitter Link: PASS')
                } else {
                    console.log("   + No Twitter Link: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610594')
            .then(function(result){
                if (result) {
                    return console.log('   - View Edit Social Media Button: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Edit Social Media Button: PASS")
                }
            })
    })
    .then(function(){ 
        return nightmare
            .wait(25)
            .click('#ed_293610596')
            .wait('#ed_293610643')
            .exists("#ed_293610642")
            .then(function (result) {
                console.log(' ')
                console.log('>>> JOB TAB <<<')
                console.log(' ')
                console.log('   --- JOB INFORMATION CARD ---')
                console.log('       EMPLOYEE -> EMPLOYEE  ')
                console.log(' ')
                if (result) {
                    return console.log('   + View Employment Status: PASS')
                } else {
                    console.log("   - View Employment Status: FAIL - PERMISSIONS ERROR!")
        }
    })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610643')
        .then(function(result){
            if (result) {
                return console.log('   + View Location: PASS')
            } else {
                console.log("   - View Location: FAIL - PERMISSIONS ERROR!")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610644')
        .then(function(result){
            if (result) {
                return console.log('   + View Job Title: PASS')
            } else {
                console.log("   - View Job Title: FAIL - PERMISSIONS ERROR!")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610645')
        .then(function(result){
            if (result) {
                return console.log('   + View Department: PASS')
            } else {
                console.log("   - View Department: FAIL - PERMISSIONS ERROR!")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610646')
        .then(function(result){
            if (result) {
                return console.log('   + View Start Date: PASS')
            } else {
                console.log("   - View Start Date: FAIL - PERMISSIONS ERROR!")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610647')
        .then(function(result){
            if (result) {
                return console.log('   + View Reports To: PASS')
            } else {
                console.log("   - View Reports To: FAIL - PERMISSIONS ERROR!")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610609')
        .then(function(result){
            if (result) {
                return console.log('   - View Edit Job Info Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Edit Job Info Button: PASS")
            }
        })
})
.then(function() {
    console.log(' ')
    console.log('   --- BONUS CARD ---')
    console.log('       EMPLOYEE -> EMPLOYEE ')
    console.log(' ')
    return nightmare
        .wait(25)
        .exists('.ed-bonus-info')
        .then(function(result){
            if (result) {
                return console.log("   - View Bonus Information: FAIL - PERMISSIONS ERROR!")
            } else {
                console.log('   + View Bonus Information: PASS')
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610610')
        .then(function(result){
            if (result) {
                return console.log('   - View Edit Bonus Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Edit Bonus Button: PASS")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610619')
        .then(function(result){
            if (result) {
                return console.log('   - View Add Bonus Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Add Bonus Button: PASS")
            }
        })
})
.then(function() {
    console.log(' ')
    console.log('   --- COMPENSATION CARD ---')
    console.log('       EMPLOYEE -> EMPLOYEE ')
    console.log(' ')
    return nightmare
        .wait(25)
        .exists('.ed-compensation-info')
        .then(function(result){
            if (result) {
                return console.log("   - View Employee Compensation: FAIL - PERMISSIONS ERROR!")
            } else {
                console.log('   + View Compensation: PASS')
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610611')
        .then(function(result){
            if (result) {
                return console.log('   - View Edit Compensation Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Edit Compensation Button: PASS")
            }
        })
})
.then(function() {
    console.log(' ')
    console.log('   --- ASSETS CARD ---')
    console.log('       EMPLOYEE -> EMPLOYEE ')
    console.log(' ')
    return nightmare
        .wait(25)
        .exists('.ed-asset-info')
        .then(function(result){
            if (result) {
                return console.log("   - View Assets: FAIL - PERMISSIONS ERROR!")
            } else {
                console.log('   + View Assets: PASS')
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610612')
        .then(function(result){
            if (result) {
                return console.log('   - View Edit Assets Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Edit Assets Button: PASS")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610648')
        .then(function(result){
            if (result) {
                return console.log('   - View Add Assets Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Add Assets Button: PASS")
            }
        })
})
.then(function() {
    console.log(' ')
    console.log('   --- DIRECT REPORTS CARD ---')
    console.log('       EMPLOYEE -> EMPLOYEE ')
    console.log(' ')
    return nightmare
        .wait(25)
        .exists('.ed-direct-report-info')
        .then(function(result){
            if (result) {
                return console.log("   + View Direct Reports: PASS")
            } else {
                console.log('   - View Bonus Information: FAIL - PERMISSIONS ERROR!')
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610613')
        .then(function(result){
            if (result) {
                return console.log('   - View Edit Direct Reports Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Edit Direct Reports Button: PASS")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610649')
        .then(function(result){
            if (result) {
                return console.log('   - View Add Direct Reports Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Add Direct Reports Button: PASS")
            }
        })
})
.then(function() {
    console.log(' ')
    console.log('   --- EEO FSLA CARD ---')
    console.log('       EMPLOYEE -> EMPLOYEE ')
    console.log(' ')
    return nightmare
        .wait(25)
        .exists('.ed-eeo-fsla-info')
        .then(function(result){
            if (result) {
                return console.log("   - View EEO And FSLA: FAIL - PERMISSIONS ERROR!")
            } else {
                console.log('   + View EEO And FSLA: PASS')
            }
        })
})
.then(function(){ 
    return nightmare
        .wait(500)
        .exists("#ed_293610597")
        .then(function (result) {
            console.log(' ')
            console.log('>>> NOTES TAB <<<')
            console.log(' ')
            console.log('   --- NOTES CARD ---')
            console.log('       EMPLOYEE -> EMPLOYEE  ')
            console.log(' ')
            if (result) {
                return console.log("   - View Notes Tab: FAIL - PERMISSIONS ERROR!")
            } else {
                console.log("   + View Notes Tab: PASS")
    }
})
})
.then(function() {
    return nightmare
        .wait(25)
        .goto(url + '/employee/notes/' + userID_1)
        .wait(1500)
        .exists('.ed-notes-section')
        .then(function(result){
            if (result) {
                return console.log("   - View Employee Notes: FAIL - PERMISSIONS ERROR!")
            } else {
                console.log('   + View Employee Notes: PASS')
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610625')
        .then(function(result){
            if (result) {
                return console.log('   - View Add Notes Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Add Notes Button: PASS")
            }
        })
})
.then(function(){ 
    return nightmare
        .wait(500)
        .exists("#ed_293610598")
        .then(function (result) {
            console.log(' ')
            console.log('>>> DOCUMENTS TAB <<<')
            console.log(' ')
            console.log('   --- DOCUMENTS CARD ---')
            console.log('       EMPLOYEE -> EMPLOYEE  ')
            console.log(' ')
            if (result) {
                return console.log("   - View Documents Tab: FAIL - PERMISSIONS ERROR!")
            } else {
                console.log("   + View Documents Tab: PASS")
    }
})
})
.then(function() {
    return nightmare
    .goto(url + '/login')
    .wait(500)
    .click('#ed_293610547')
    .wait(25)
    .type('#ed_293610547', 'eddyhr.test4@gmail.com')
    .wait(25)
    .click('#ed_293610546')
    .wait(25)
    .type('#ed_293610546', 'Eddyhr!123')
    .wait(25)
    .click('.ed-btn-sign-in')
    .wait(2000)
    .exists('#ed_293610548')
    .then(function(result){
        console.log(' ')
        console.log('---------------------------------------------------------------------------------------------')
        console.log('/////////////////////////////////////////////////////////////////////////////////////////////')
        console.log('---------------------------------------------------------------------------------------------')
        console.log('   ')
        console.log('  EMPLOYEE SELF PERMISSIONS TEST:')
        console.log(' ')
        console.log('>>> EMPLOYEE DIRECTORY <<<')
        console.log('       EMPLOYEE SELF VIEW ')
        console.log(' ')
        if(result){
            console.log('   - Invite New Employee Disabled: FAIL - PERMISSIONS ERROR!')
        }
        else{
            console.log('   + Invite New Employee Disabled: PASS')
        }
    })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('.email-link')
        .then(function(result){
            if (result) {
                return console.log('   - Send/View Reminder Enrollment Email: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log('   + Send/View Reminder Enrollment Email: PASS')
            }
        })
})

    .then(function(){ 
        return nightmare
            .wait(25)
            .goto(url + '/employee/personal/' + userID_2)
            .wait('#ed_f_name293610599')
            .exists("#ed_f_name293610599")
            .then(function (result) {
                console.log(' ')
                console.log('>>> PERSONAL TAB <<<')
                console.log(' ')
                console.log('   --- PERSONAL INFORMATION CARD ---')
                console.log('       MANAGER -> SELF  ')
                console.log(' ')
                if (result) {
                    return console.log('   + View First Name: PASS')
                } else {
                    console.log("   - View First Name: FAIL - PERMISSIONS ERROR!")
        }
    })
})
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_mid_initial293610603')
            .then(function(result){
                if (result) {
                    return console.log('   + View Middle Name: PASS')
                } else {
                    console.log("   - View Middle Name: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_l_name293610606')
            .then(function(result){
                if (result) {
                    return console.log('   + View Last Name: PASS')
                } else {
                    console.log("   - View Last Name: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_pref_name293610600')
            .then(function(result){
                if (result) {
                    return console.log('   + View Preferred Name: PASS')
                } else {
                    console.log("   - View Preferred Name: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists("#ed_gender293610604")
            .then(function(result){
                if (result) {
                    return console.log('   + View Legal Gender: PASS')
                } else {
                    console.log("   - View Legal Gender: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_gender_iden293610607')
            .then(function(result){
                if (result) {
                    return console.log('   + View Gender Identity: PASS')
                } else {
                    console.log("   - View Gender Identity: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_b_day293610601')
            .then(function(result){
                if (result) {
                    return console.log('   + View Birthday: PASS')
                } else {
                    console.log("   - View Birthday: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_shirt293610602')
            .then(function(result){
                if (result) {
                    return console.log('   + View Gender Identity: PASS')
                } else {
                    console.log("   - View Gender Identity: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_marital_stat293610605')
            .then(function(result){
                if (result) {
                    return console.log('   + View Marital Status: PASS')
                } else {
                    console.log("   - View Marital Status: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_ssn293610608')
            .then(function(result){
                if (result) {
                    return console.log('   + View Social Security Number: PASS')
                } else {
                    console.log("   - View Social Security Number: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_shirt293610602')
            .then(function(result){
                if (result) {
                    return console.log('   + View Shirt Size: PASS')
                } else {
                    console.log("   - View Shirt Size: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610579')
            .then(function(result){
                if (result) {
                    return console.log('   + View Edit Personal Info Button: PASS')
                } else {
                    console.log("   - View Edit Personal Info Button: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('.ed-crop-edit-icon')
            .then(function(result){
                if (result) {
                    return console.log('   + View Edit User Image Button: PASS')
                } else {
                    console.log("   - View Edit User Image Button: FAIL - PERMISSIONS ERROR!")
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
                    return console.log('   - Edit First Name: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Edit First Name: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610581')
            .then(function(result){
                if (result) {
                    return console.log('   - Edit Middle Initial: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit Middle Initial: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610582')
            .then(function(result){
                if (result) {
                    return console.log('   - Edit Last Name: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit Last Name: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610583')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Preferred Name: PASS')
                } else {
                    console.log("   - Edit Preferred Name: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610584')
            .then(function(result){
                if (result) {
                    return console.log('   - Edit Gender: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit Gender: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610585')
            .then(function(result){
                if (result) {
                    return console.log('   - Edit Birthday: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit Birthday: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610586')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Marital Status: PASS')
                } else {
                    console.log("   - Edit Marital Status: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610587')
            .then(function(result){
                if (result) {
                    return console.log('   - Edit Social Security Number: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit Social Security Number: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610588')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Shirt Size: PASS')
                } else {
                    console.log("   - Edit Shirt Size: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610589')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Gender Identity: PASS')
                } else {
                    console.log("   - Edit Gender Identity: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610590')
            .then(function(result){
                if (result) {
                    return console.log('   + View Save Personal Info Button: PASS')
                } else {
                    console.log("   - View Save Personal Info Button: FAIL - PERMISSIONS ERROR!")
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
        console.log('       EMPLOYEE -> SELF ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('#ed_293610626')
            .then(function(result){
                if (result) {
                    return console.log('   + View Primary Email Address: PASS')
                } else {
                    console.log("   - View Primary Email Address: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610627')
            .then(function(result){
                if (result) {
                    return console.log('   + View Secondary Email Address: PASS')
                } else {
                    console.log("   - View Secondary Email Address: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610628')
            .then(function(result){
                if (result) {
                    return console.log('   + View Work Phone Number: PASS')
                } else {
                    console.log("   - View Work Phone Number: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610629')
            .then(function(result){
                if (result) {
                    return console.log('   + View Primary Phone Number: PASS')
                } else {
                    console.log("   - View Primary Phone Number: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610630')
            .then(function(result){
                if (result) {
                    return console.log('   + View Address: PASS')
                } else {
                    console.log("   - View Address: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610631')
            .then(function(result){
                if (result) {
                    return console.log('   + View City: PASS')
                } else {
                    console.log("   - View City: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610632')
            .then(function(result){
                if (result) {
                    return console.log('   + View State: PASS')
                } else {
                    console.log("   - View State: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610633')
            .then(function(result){
                if (result) {
                    return console.log('   + View Zip Code: PASS')
                } else {
                    console.log("   - View Zip Code: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610592')
            .then(function(result){
                if (result) {
                    return console.log('   + View Edit Contact Info Button: PASS')
                } else {
                    console.log("   - View Edit Contact Info Button: FAIL - PERMISSIONS ERROR!")
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
                    return console.log('   - Edit Primary Email: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit Primary Email: PASS")
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610651')
            .then(function(result){
                if(result) {
                    return console.log('   + Edit Secondary Email: PASS')
                } else {
                    console.log("   - Edit Secondary Email: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610652')
            .then(function(result){
                if(result) {
                    return console.log('   + Edit Primary Phone Number: PASS')
                } else {
                    console.log("   - Edit Primary Phone Number: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610653')
            .then(function(result){
                if(result) {
                    return console.log('   + Edit Work Phone Number: PASS')
                } else {
                    console.log("   - Edit Work Phone Number: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610654')
            .then(function(result){
                if(result) {
                    return console.log('   + Edit Work Phone Number EXT: PASS')
                } else {
                    console.log("   - Edit Work Phone Number EXT: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610655')
            .then(function(result){
                if(result) {
                    return console.log('   - Edit Address: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit Address: PASS")
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610656')
            .then(function(result){
                if(result) {
                    return console.log('   - Edit City: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit City: PASS")
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610657')
            .then(function(result){
                if(result) {
                    return console.log('   - Edit State: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit State: PASS")
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610658')
            .then(function(result){
                if(result) {
                    return console.log('   - Edit Zip Code: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit Zip Code: PASS")
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
        console.log('       EMPLOYEE -> SELF ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('#ed_293610634')
            .then(function(result){
                if (result) {
                    return console.log('   + View Full Name: PASS')
                } else {
                    console.log("   - View Full Name: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610635')
            .then(function(result){
                if (result) {
                    return console.log('   + View Relationship: PASS')
                } else {
                    console.log("   - View Relationship: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610636')
            .then(function(result){
                if (result) {
                    return console.log('   + View Phone Number: PASS')
                } else {
                    console.log("   - View Phone Number: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610637')
            .then(function(result){
                if (result) {
                    return console.log('   + View Email: PASS')
                } else {
                    console.log("   - View Email: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610593')
            .then(function(result){
                if (result) {
                    return console.log('   + View Edit Emergency Contact Button: PASS')
                } else {
                    console.log("   - View Edit Emergency Contact Button: FAIL - PERMISSIONS ERROR!")
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
                    return console.log('   + Edit Full Name: PASS')
                } else {
                    console.log("   - Edit Full Name: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610661')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Relationship: PASS')
                } else {
                    console.log("   - Edit Relationship: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610662')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Phone: PASS')
                } else {
                    console.log("   - Edit Phone: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610663')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Email: PASS')
                } else {
                    console.log("   - Edit Email: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610664')
            .then(function(result){
                if (result) {
                    return console.log('   + View Save Button: PASS')
                } else {
                    console.log("   - View Save Button: FAIL - PERMISSIONS ERROR!")
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
        console.log('       EMPLOYEE -> SELF ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('#ed_293610638')
            .then(function(result){
                if (result) {
                    return console.log('   + View Linkedin Link: PASS')
                } else {
                    console.log("   + No Linkedin Link Added: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610639')
            .then(function(result){
                if (result) {
                    return console.log('   + View Facebook Link: PASS')
                } else {
                    console.log("   + No Facebook Link Added: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610640')
            .then(function(result){
                if (result) {
                    return console.log('   + View Instagram Link: PASS')
                } else {
                    console.log("   + No Instagram Link Added: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610641')
            .then(function(result){
                if (result) {
                    return console.log('   + View Twitter Link: PASS')
                } else {
                    console.log("   + No Twitter Link: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610594')
            .then(function(result){
                if (result) {
                    return console.log('   + View Edit Social Media Button: PASS')
                } else {
                    console.log("   - View Edit Social Media Button: FAIL - PERMISSIONS ERROR!")
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
                    return console.log('   + Edit LinkedIn: PASS')
                } else {
                    console.log("   - Edit LinkedIn: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610666')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Facebook: PASS')
                } else {
                    console.log("   - Edit Facebook: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610667')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Instagram: PASS')
                } else {
                    console.log("   - Edit Instagram: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610668')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Twitter: PASS')
                } else {
                    console.log("   - Edit Twitter: FAIL - PERMISSIONS ERROR!")
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
            .exists("#ed_293610642")
            .then(function (result) {
                console.log(' ')
                console.log('>>> JOB TAB <<<')
                console.log(' ')
                console.log('   --- JOB INFORMATION CARD ---')
                console.log('       EMPLOYEE -> SELF  ')
                console.log(' ')
                if (result) {
                    return console.log('   + View Employment Status: PASS')
                } else {
                    console.log("   - View Employment Status: FAIL - PERMISSIONS ERROR!")
        }
    })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610643')
        .then(function(result){
            if (result) {
                return console.log('   + View Location: PASS')
            } else {
                console.log("   - View Location: FAIL - PERMISSIONS ERROR!")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610644')
        .then(function(result){
            if (result) {
                return console.log('   + View Job Title: PASS')
            } else {
                console.log("   - View Job Title: FAIL - PERMISSIONS ERROR!")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610645')
        .then(function(result){
            if (result) {
                return console.log('   + View Department: PASS')
            } else {
                console.log("   - View Department: FAIL - PERMISSIONS ERROR!")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610646')
        .then(function(result){
            if (result) {
                return console.log('   + View Start Date: PASS')
            } else {
                console.log("   - View Start Date: FAIL - PERMISSIONS ERROR!")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610647')
        .then(function(result){
            if (result) {
                return console.log('   + View Reports To: PASS')
            } else {
                console.log("   - View Reports To: FAIL - PERMISSIONS ERROR!")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610609')
        .then(function(result){
            if (result) {
                return console.log('   - View Edit Job Info Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Edit Job Info Button: PASS")
            }
        })
})
.then(function() {
    console.log(' ')
    console.log('   --- BONUS CARD ---')
    console.log('       EMPLOYEE -> SELF ')
    console.log(' ')
    return nightmare
        .wait(25)
        .exists('.ed-bonus-info')
        .then(function(result){
            if (result) {
                return console.log("   + View Bonus Information: PASS")
            } else {
                console.log('   - View Bonus Information: FAIL - PERMISSIONS ERROR!')
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610610')
        .then(function(result){
            if (result) {
                return console.log('   - View Edit Bonus Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Edit Bonus Button: PASS")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610619')
        .then(function(result){
            if (result) {
                return console.log('   - View Add Bonus Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Add Bonus Button: PASS")
            }
        })
})
.then(function() {
    console.log(' ')
    console.log('   --- COMPENSATION CARD ---')
    console.log('       EMPLOYEE -> SELF ')
    console.log(' ')
    return nightmare
        .wait(25)
        .exists('.ed-compensation-info')
        .then(function(result){
            if (result) {
                return console.log("   + View Employee Compensation: PASS")
            } else {
                console.log('   - View Compensation:  FAIL - PERMISSIONS ERROR!')
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610611')
        .then(function(result){
            if (result) {
                return console.log('   - View Edit Compensation Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Edit Compensation Button: PASS")
            }
        })
})
.then(function() {
    console.log(' ')
    console.log('   --- ASSETS CARD ---')
    console.log('       EMPLOYEE -> SELF ')
    console.log(' ')
    return nightmare
        .wait(25)
        .exists('.ed-asset-info')
        .then(function(result){
            if (result) {
                return console.log("   + View Assets: PASS")
            } else {
                console.log('   - View Assets: FAIL - PERMISSIONS ERROR!')
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610612')
        .then(function(result){
            if (result) {
                return console.log('   - View Edit Assets Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Edit Assets Button: PASS")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610648')
        .then(function(result){
            if (result) {
                return console.log('   - View Add Assets Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Add Assets Button: PASS")
            }
        })
})
.then(function() {
    console.log(' ')
    console.log('   --- DIRECT REPORTS CARD ---')
    console.log('       EMPLOYEE -> SELF ')
    console.log(' ')
    return nightmare
        .wait(25)
        .exists('.ed-direct-report-info')
        .then(function(result){
            if (result) {
                return console.log("   + View Direct Reports: PASS")
            } else {
                console.log('   - View Bonus Information: FAIL - PERMISSIONS ERROR!')
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610613')
        .then(function(result){
            if (result) {
                return console.log('   - View Edit Direct Reports Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Edit Direct Reports Button: PASS")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610649')
        .then(function(result){
            if (result) {
                return console.log('   - View Add Direct Reports Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Add Direct Reports Button: PASS")
            }
        })
})
.then(function() {
    console.log(' ')
    console.log('   --- EEO FSLA CARD ---')
    console.log('       EMPLOYEE -> SELF ')
    console.log(' ')
    return nightmare
        .wait(25)
        .exists('.ed-eeo-fsla-info')
        .then(function(result){
            if (result) {
                return console.log("   + View EEO And FSLA: PASS")
            } else {
                console.log('   - View EEO And FSLA: FAIL - PERMISSIONS ERROR!')
            }
        })
})
.then(function(){ 
    return nightmare
        .wait(500)
        .exists("#ed_293610597")
        .then(function (result) {
            console.log(' ')
            console.log('>>> NOTES TAB <<<')
            console.log(' ')
            console.log('   --- NOTES CARD ---')
            console.log('       EMPLOYEE -> SELF  ')
            console.log(' ')
            if (result) {
                return console.log("   - View Notes Tab: FAIL - PERMISSIONS ERROR!")
            } else {
                console.log("   + View Notes Tab: PASS")
    }
})
})
.then(function() {
    return nightmare
        .wait(25)
        .goto(url + '/employee/notes/' + userID_2)
        .wait(1500)
        .exists('.ed-notes-section')
        .then(function(result){
            if (result) {
                return console.log("   - View Employee Notes: FAIL - PERMISSIONS ERROR!")
            } else {
                console.log('   + View Employee Notes: PASS')
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610625')
        .then(function(result){
            if (result) {
                return console.log('   - View Add Notes Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Add Notes Button: PASS")
            }
        })
})
.then(function(){ 
    return nightmare
        .wait(500)
        .exists("#ed_293610598")
        .then(function (result) {
            console.log(' ')
            console.log('>>> DOCUMENTS TAB <<<')
            console.log(' ')
            console.log('   --- DOCUMENTS CARD ---')
            console.log('       EMPLOYEE -> SELF  ')
            console.log(' ')
            if (result) {
                return console.log("   + View Documents Tab: PASS")
            } else {
                console.log("   - View Documents Tab: FAIL - PERMISSIONS ERROR!")
    }
})
})
.then(function() {
    return nightmare
        .wait(25)
        .goto(url + '/employee/documents/' + userID_2)
        .wait(1500)
        .exists('.ed-document-tab-content')
        .then(function(result){
            if (result) {
                return console.log("   - View Employee Documents: FAIL - PERMISSIONS ERROR!")
            } else {
                console.log('   + View Employee Documents: PASS')
            }
        })
})

.then(function() {
    return nightmare
    .goto(url + '/login')
    .wait(500)
    .click('#ed_293610547')
    .wait(25)
    .type('#ed_293610547', 'eddyhr.test2@gmail.com')
    .wait(25)
    .click('#ed_293610546')
    .wait(25)
    .type('#ed_293610546', 'Eddyhr!123')
    .wait(25)
    .click('.ed-btn-sign-in')
    .wait(2000)
    .exists('#ed_293610548')
    .then(function(result){
        console.log(' ')
        console.log('---------------------------------------------------------------------------------------------')
        console.log('/////////////////////////////////////////////////////////////////////////////////////////////')
        console.log('---------------------------------------------------------------------------------------------')
        console.log('   ')
        console.log('  MANAGER - EMPLOYEE PERMISSIONS TEST:')
        console.log(' ')
        console.log('>>> EMPLOYEE DIRECTORY <<<')
        console.log('       MANAGER VIEW ')
        console.log(' ')
        if(result){
            console.log('   - Invite New Employee Disabled: FAIL - PERMISSIONS ERROR!')
        }
        else{
            console.log('   + Invite New Employee Disabled: PASS')
        }
    })
})
    .then(function() {
        return nightmare
            .wait(25)
            .exists('.email-link')
            .then(function(result){
                if (result) {
                    return console.log('   - Send/View Reminder Enrollment Email: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log('   + Send/View Reminder Enrollment Email: PASS')
                }
            })
    })
    
        .then(function(){ 
            return nightmare
                .wait(25)
                .goto(url + '/employee/personal/' + userID_2)
                .wait('#ed_f_name293610599')
                .exists("#ed_f_name293610599")
                .then(function (result) {
                    console.log(' ')
                    console.log('>>> PERSONAL TAB <<<')
                    console.log(' ')
                    console.log('   --- PERSONAL INFORMATION CARD ---')
                    console.log('       MANAGER -> EMPLOYEE  ')
                    console.log(' ')
                    if (result) {
                        return console.log('   + View First Name: PASS')
                    } else {
                        console.log("   - View First Name: FAIL - PERMISSIONS ERROR!")
            }
        })
    })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_mid_initial293610603')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Middle Name: PASS')
                    } else {
                        console.log("   - View Middle Name: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_l_name293610606')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Last Name: PASS')
                    } else {
                        console.log("   - View Last Name: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_pref_name293610600')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Preferred Name: PASS')
                    } else {
                        console.log("   - View Preferred Name: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists("#ed_gender293610604")
                .then(function(result){
                    if (result) {
                        return console.log('   + View Legal Gender: PASS')
                    } else {
                        console.log("   - View Legal Gender: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_gender_iden293610607')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Gender Identity: PASS')
                    } else {
                        console.log("   - View Gender Identity: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_b_day293610601')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Birthday: PASS')
                    } else {
                        console.log("   - View Birthday: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_shirt293610602')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Gender Identity: PASS')
                    } else {
                        console.log("   - View Gender Identity: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_marital_stat293610605')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Marital Status: PASS')
                    } else {
                        console.log("   - View Marital Status: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_ssn293610608')
                .then(function(result){
                    if (result) {
                        return console.log('   - View Social Security Number: FAIL - PERMISSIONS ERROR!')
                    } else {
                        console.log("   + View Social Security Number: PASS")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_shirt293610602')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Shirt Size: PASS')
                    } else {
                        console.log("   - View Shirt Size: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610579')
                .then(function(result){
                    if (result) {
                        return console.log('   - View Edit Personal Info Button: FAIL - PERMISSIONS ERROR!')
                    } else {
                        console.log("   + View Edit Personal Info Button: PASS")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('.ed-crop-edit-icon')
                .then(function(result){
                    if (result) {
                        return console.log('   - View Edit User Image Button: FAIL - PERMISSIONS ERROR!')
                    } else {
                        console.log("   + View Edit User Image Button: PASS")
                    }
                })
        })
    
        .then(function() {
            console.log(' ')
            console.log('   --- CONTACT INFORMATION CARD ---')
            console.log('       MANAGER -> EMPLOYEE ')
            console.log(' ')
            return nightmare
                .wait(25)
                .exists('#ed_293610626')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Primary Email Address: PASS')
                    } else {
                        console.log("   - View Primary Email Address: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610627')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Secondary Email Address: PASS')
                    } else {
                        console.log("   - View Secondary Email Address: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610628')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Work Phone Number: PASS')
                    } else {
                        console.log("   - View Work Phone Number: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610629')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Primary Phone Number: PASS')
                    } else {
                        console.log("   - View Primary Phone Number: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610630')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Address: PASS')
                    } else {
                        console.log("   - View Address: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610631')
                .then(function(result){
                    if (result) {
                        return console.log('   + View City: PASS')
                    } else {
                        console.log("   - View City: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610632')
                .then(function(result){
                    if (result) {
                        return console.log('   + View State: PASS')
                    } else {
                        console.log("   - View State: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610633')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Zip Code: PASS')
                    } else {
                        console.log("   - View Zip Code: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610592')
                .then(function(result){
                    if (result) {
                        return console.log('   - View Edit Contact Info Button: FAIL - PERMISSIONS ERROR!')
                    } else {
                        console.log("   + View Edit Contact Info Button: PASS")
                    }
                })
        })
        .then(function() {
            console.log(' ')
            console.log('   --- EMERGENCY CONTACT CARD ---')
            console.log('       MANAGER -> EMPLOYEE ')
            console.log(' ')
            return nightmare
                .wait(25)
                .exists('#ed_293610634')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Full Name: PASS')
                    } else {
                        console.log("   - View Full Name: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610635')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Relationship: PASS')
                    } else {
                        console.log("   - View Relationship: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610636')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Phone Number: PASS')
                    } else {
                        console.log("   - View Phone Number: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610637')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Email: PASS')
                    } else {
                        console.log("   - View Email: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610593')
                .then(function(result){
                    if (result) {
                        return console.log('   - View Edit Emergency Contact Button: FAIL - PERMISSIONS ERROR!')
                    } else {
                        console.log("   + View Edit Emergency Contact Button: PASS")
                    }
                })
        })
        .then(function() {
            console.log(' ')
            console.log('   --- SOCIAL MEDIA CARD ---')
            console.log('       MANAGER -> EMPLOYEE ')
            console.log(' ')
            return nightmare
                .wait(25)
                .exists('#ed_293610638')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Linkedin Link: PASS')
                    } else {
                        console.log("   + No Linkedin Link Added: PASS")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610639')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Facebook Link: PASS')
                    } else {
                        console.log("   + No Facebook Link Added: PASS")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610640')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Instagram Link: PASS')
                    } else {
                        console.log("   + No Instagram Link Added: PASS")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610641')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Twitter Link: PASS')
                    } else {
                        console.log("   + No Twitter Link: PASS")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610594')
                .then(function(result){
                    if (result) {
                        return console.log('   - View Edit Social Media Button: FAIL - PERMISSIONS ERROR!')
                    } else {
                        console.log("   + View Edit Social Media Button: PASS")
                    }
                })
        })
        .then(function(){ 
            return nightmare
                .wait(25)
                .click('#ed_293610596')
                .wait('#ed_293610643')
                .exists("#ed_293610642")
                .then(function (result) {
                    console.log(' ')
                    console.log('>>> JOB TAB <<<')
                    console.log(' ')
                    console.log('   --- JOB INFORMATION CARD ---')
                    console.log('       MANAGER -> EMPLOYEE  ')
                    console.log(' ')
                    if (result) {
                        return console.log('   + View Employment Status: PASS')
                    } else {
                        console.log("   - View Employment Status: FAIL - PERMISSIONS ERROR!")
            }
        })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610643')
            .then(function(result){
                if (result) {
                    return console.log('   + View Location: PASS')
                } else {
                    console.log("   - View Location: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610644')
            .then(function(result){
                if (result) {
                    return console.log('   + View Job Title: PASS')
                } else {
                    console.log("   - View Job Title: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610645')
            .then(function(result){
                if (result) {
                    return console.log('   + View Department: PASS')
                } else {
                    console.log("   - View Department: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610646')
            .then(function(result){
                if (result) {
                    return console.log('   + View Start Date: PASS')
                } else {
                    console.log("   - View Start Date: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610647')
            .then(function(result){
                if (result) {
                    return console.log('   + View Reports To: PASS')
                } else {
                    console.log("   - View Reports To: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610609')
            .then(function(result){
                if (result) {
                    return console.log('   - View Edit Job Info Button: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Edit Job Info Button: PASS")
                }
            })
    })
    .then(function() {
        console.log(' ')
        console.log('   --- BONUS CARD ---')
        console.log('       MANAGER -> EMPLOYEE ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('.ed-bonus-info')
            .then(function(result){
                if (result) {
                    return console.log("   + View Bonus Information: PASS")
                } else {
                    console.log('   - View Bonus Information:  FAIL - PERMISSIONS ERROR!')
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610610')
            .then(function(result){
                if (result) {
                    return console.log('   - View Edit Bonus Button: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Edit Bonus Button: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610619')
            .then(function(result){
                if (result) {
                    return console.log('   - View Add Bonus Button: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Add Bonus Button: PASS")
                }
            })
    })
    .then(function() {
        console.log(' ')
        console.log('   --- COMPENSATION CARD ---')
        console.log('       MANAGER -> EMPLOYEE ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('.ed-compensation-info')
            .then(function(result){
                if (result) {
                    return console.log("   + View Employee Compensation: PASS")
                } else {
                    console.log('   - View Compensation: FAIL - PERMISSIONS ERROR!')
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610611')
            .then(function(result){
                if (result) {
                    return console.log('   - View Edit Compensation Button: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Edit Compensation Button: PASS")
                }
            })
    })
    .then(function() {
        console.log(' ')
        console.log('   --- ASSETS CARD ---')
        console.log('       MANAGER -> EMPLOYEE ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('.ed-asset-info')
            .then(function(result){
                if (result) {
                    return console.log("   + View Assets: PASS")
                } else {
                    console.log('   - View Assets: FAIL - PERMISSIONS ERROR!')
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610612')
            .then(function(result){
                if (result) {
                    return console.log('   - View Edit Assets Button:  FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Edit Assets Button: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610648')
            .then(function(result){
                if (result) {
                    return console.log('   - View Add Assets Button: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Add Assets Button: PASS")
                }
            })
    })
    .then(function() {
        console.log(' ')
        console.log('   --- DIRECT REPORTS CARD ---')
        console.log('       MANAGER -> EMPLOYEE ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('.ed-direct-report-info')
            .then(function(result){
                if (result) {
                    return console.log("   + View Direct Reports: PASS")
                } else {
                    console.log('   - View Bonus Information: FAIL - PERMISSIONS ERROR!')
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610613')
            .then(function(result){
                if (result) {
                    return console.log('   - View Edit Direct Reports Button: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Edit Direct Reports Button: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610649')
            .then(function(result){
                if (result) {
                    return console.log('   - View Add Direct Reports Button: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Add Direct Reports Button: PASS")
                }
            })
    })
    .then(function() {
        console.log(' ')
        console.log('   --- EEO FSLA CARD ---')
        console.log('       MANAGER -> EMPLOYEE ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('.ed-eeo-fsla-info')
            .then(function(result){
                if (result) {
                    return console.log("   - View EEO And FSLA: FAIL - PERMISSIONS ERROR!")
                } else {
                    console.log('   + View EEO And FSLA: PASS')
                }
            })
    })
    .then(function(){ 
        return nightmare
            .wait(500)
            .exists("#ed_293610597")
            .then(function (result) {
                console.log(' ')
                console.log('>>> NOTES TAB <<<')
                console.log(' ')
                console.log('   --- NOTES CARD ---')
                console.log('       MANAGER -> EMPLOYEE  ')
                console.log(' ')
                if (result) {
                    return console.log("   - View Notes Tab Disabled: FAIL - PERMISSIONS ERROR!")
                } else {
                    console.log("   + View Notes Tab Disabled: PASS")
        }
    })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .goto(url + '/employee/notes/' + userID_2)
            .wait(1500)
            .exists('.ed-notes-section')
            .then(function(result){
                if (result) {
                    return console.log("   - View Employee Notes: FAIL - PERMISSIONS ERROR!")
                } else {
                    console.log('   + View Employee Notes: PASS')
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610625')
            .then(function(result){
                if (result) {
                    return console.log('   - View Add Notes Button: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + View Add Notes Button: PASS")
                }
            })
    })
    .then(function(){ 
        return nightmare
            .wait(500)
            .exists("#ed_293610598")
            .then(function (result) {
                console.log(' ')
                console.log('>>> DOCUMENTS TAB <<<')
                console.log(' ')
                console.log('   --- DOCUMENTS CARD ---')
                console.log('       MANAGER -> EMPLOYEE  ')
                console.log(' ')
                if (result) {
                    return console.log("   + View Documents Tab: PASS")
                } else {
                    console.log("   - View Documents Tab: FAIL - PERMISSIONS ERROR!")
        }
    })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .goto(url + '/employee/documents/' + userID_2)
            .wait(1500)
            .exists('.ed-document-tab-content')
            .then(function(result){
                if (result) {
                    return console.log("   + View Employee Documents: PASS")
                } else {
                    console.log('   - View Employee Documents: FAIL - PERMISSIONS ERROR!')
                }
            })
    })

    .then(function() {
        return nightmare
            .goto(url + '/login')
.wait(500)
.click('#ed_293610547')
.wait(25)
.type('#ed_293610547', 'eddyhr.test2@gmail.com')
.wait(25)
.click('#ed_293610546')
.wait(25)
.type('#ed_293610546', 'Eddyhr!123')
.wait(25)
.click('.ed-btn-sign-in')
.wait(2000)
.exists('#ed_293610548')
.then(function(result){
    console.log(' ')
    console.log('---------------------------------------------------------------------------------------------')
    console.log('/////////////////////////////////////////////////////////////////////////////////////////////')
    console.log('---------------------------------------------------------------------------------------------')
    console.log('   ')
    console.log('  MANAGER - SELF PERMISSIONS TEST:')
    console.log(' ')
    console.log('>>> EMPLOYEE DIRECTORY <<<')
    console.log('       MANAGER - SELF VIEW ')
    console.log(' ')
    if(result){
        console.log('   - Invite New Employee Disabled: FAIL - PERMISSIONS ERROR!')
    }
    else{
        console.log('   + Invite New Employee Disabled: PASS')
    }
})
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('.email-link')
        .then(function(result){
            if (result) {
                return console.log('   - Send/View Reminder Enrollment Email: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log('   + Send/View Reminder Enrollment Email: PASS')
            }
        })
})

    .then(function(){ 
        return nightmare
            .wait(25)
            .goto(url + '/employee/personal/' + userID_1)
            .wait('#ed_f_name293610599')
            .exists("#ed_f_name293610599")
            .then(function (result) {
                console.log(' ')
                console.log('>>> PERSONAL TAB <<<')
                console.log(' ')
                console.log('   --- PERSONAL INFORMATION CARD ---')
                console.log('       MANAGER -> SELF  ')
                console.log(' ')
                if (result) {
                    return console.log('   + View First Name: PASS')
                } else {
                    console.log("   - View First Name: FAIL - PERMISSIONS ERROR!")
        }
    })
})
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_mid_initial293610603')
            .then(function(result){
                if (result) {
                    return console.log('   + View Middle Name: PASS')
                } else {
                    console.log("   - View Middle Name: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_l_name293610606')
            .then(function(result){
                if (result) {
                    return console.log('   + View Last Name: PASS')
                } else {
                    console.log("   - View Last Name: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_pref_name293610600')
            .then(function(result){
                if (result) {
                    return console.log('   + View Preferred Name: PASS')
                } else {
                    console.log("   - View Preferred Name: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists("#ed_gender293610604")
            .then(function(result){
                if (result) {
                    return console.log('   + View Legal Gender: PASS')
                } else {
                    console.log("   - View Legal Gender: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_gender_iden293610607')
            .then(function(result){
                if (result) {
                    return console.log('   + View Gender Identity: PASS')
                } else {
                    console.log("   - View Gender Identity: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_b_day293610601')
            .then(function(result){
                if (result) {
                    return console.log('   + View Birthday: PASS')
                } else {
                    console.log("   - View Birthday: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_shirt293610602')
            .then(function(result){
                if (result) {
                    return console.log('   + View Gender Identity: PASS')
                } else {
                    console.log("   - View Gender Identity: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_marital_stat293610605')
            .then(function(result){
                if (result) {
                    return console.log('   + View Marital Status: PASS')
                } else {
                    console.log("   - View Marital Status: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_ssn293610608')
            .then(function(result){
                if (result) {
                    return console.log('   + View Social Security Number: PASS')
                } else {
                    console.log("   - View Social Security Number: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_shirt293610602')
            .then(function(result){
                if (result) {
                    return console.log('   + View Shirt Size: PASS')
                } else {
                    console.log("   - View Shirt Size: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610579')
            .then(function(result){
                if (result) {
                    return console.log('   + View Edit Personal Info Button: PASS')
                } else {
                    console.log("   - View Edit Personal Info Button: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('.ed-crop-edit-icon')
            .then(function(result){
                if (result) {
                    return console.log('   + View Edit User Image Button: PASS')
                } else {
                    console.log("   - View Edit User Image Button: FAIL - PERMISSIONS ERROR!")
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
                    return console.log('   - Edit First Name: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit First Name: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610581')
            .then(function(result){
                if (result) {
                    return console.log('   - Edit Middle Initial: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit Middle Initial: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610582')
            .then(function(result){
                if (result) {
                    return console.log('   - Edit Last Name: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit Last Name: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610583')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Preferred Name: PASS')
                } else {
                    console.log("   - Edit Preferred Name: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610584')
            .then(function(result){
                if (result) {
                    return console.log('   - Edit Gender: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit Gender: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610585')
            .then(function(result){
                if (result) {
                    return console.log('   - Edit Birthday: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit Birthday: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610586')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Marital Status: PASS')
                } else {
                    console.log("   - Edit Marital Status: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610587')
            .then(function(result){
                if (result) {
                    return console.log('   - Edit Social Security Number: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit Social Security Number: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610588')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Shirt Size: PASS')
                } else {
                    console.log("   - Edit Shirt Size: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610589')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Gender Identity: PASS')
                } else {
                    console.log("   - Edit Gender Identity: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610590')
            .then(function(result){
                if (result) {
                    return console.log('   + View Save Personal Info Button: PASS')
                } else {
                    console.log("   - View Save Personal Info Button: FAIL - PERMISSIONS ERROR!")
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
        console.log('       MANAGER  -> SELF ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('#ed_293610626')
            .then(function(result){
                if (result) {
                    return console.log('   + View Primary Email Address: PASS')
                } else {
                    console.log("   - View Primary Email Address: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610627')
            .then(function(result){
                if (result) {
                    return console.log('   + View Secondary Email Address: PASS')
                } else {
                    console.log("   - View Secondary Email Address: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610628')
            .then(function(result){
                if (result) {
                    return console.log('   + View Work Phone Number: PASS')
                } else {
                    console.log("   - View Work Phone Number: FAIL - PERMISSIONS ERROR!")
                }
            })
    })

    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610629')
            .then(function(result){
                if (result) {
                    return console.log('   + View Primary Phone Number: PASS')
                } else {
                    console.log("   - View Primary Phone Number: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610630')
            .then(function(result){
                if (result) {
                    return console.log('   + View Address: PASS')
                } else {
                    console.log("   - View Address: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610631')
            .then(function(result){
                if (result) {
                    return console.log('   + View City: PASS')
                } else {
                    console.log("   - View City: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610632')
            .then(function(result){
                if (result) {
                    return console.log('   + View State: PASS')
                } else {
                    console.log("   - View State: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610633')
            .then(function(result){
                if (result) {
                    return console.log('   + View Zip Code: PASS')
                } else {
                    console.log("   - View Zip Code: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610592')
            .then(function(result){
                if (result) {
                    return console.log('   + View Edit Contact Info Button: PASS')
                } else {
                    console.log("   - View Edit Contact Info Button: FAIL - PERMISSIONS ERROR!")
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
                    return console.log('   - Edit Primary Email: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit Primary Email: PASS")
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610651')
            .then(function(result){
                if(result) {
                    return console.log('   + Edit Secondary Email: PASS')
                } else {
                    console.log("   - Edit Secondary Email: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610652')
            .then(function(result){
                if(result) {
                    return console.log('   + Edit Primary Phone Number: PASS')
                } else {
                    console.log("   - Edit Primary Phone Number: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610653')
            .then(function(result){
                if(result) {
                    return console.log('   + Edit Work Phone Number: PASS')
                } else {
                    console.log("   - Edit Work Phone Number: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610654')
            .then(function(result){
                if(result) {
                    return console.log('   + Edit Work Phone Number EXT: PASS')
                } else {
                    console.log("   - Edit Work Phone Number EXT: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610655')
            .then(function(result){
                if(result) {
                    return console.log('   - Edit Address: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit Address: PASS")
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610656')
            .then(function(result){
                if(result) {
                    return console.log('   - Edit City: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit City: PASS")
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610657')
            .then(function(result){
                if(result) {
                    return console.log('   - Edit State: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit State: PASS")
                }
            })
    })
    .then(function(){
        return nightmare
        .wait(25)
            .exists('#ed_293610658')
            .then(function(result){
                if(result) {
                    return console.log('   - Edit Zip Code: FAIL - PERMISSIONS ERROR!')
                } else {
                    console.log("   + Edit Zip Code: PASS")
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
                    return console.log('   + View Full Name: PASS')
                } else {
                    console.log("   - View Full Name: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610635')
            .then(function(result){
                if (result) {
                    return console.log('   + View Relationship: PASS')
                } else {
                    console.log("   - View Relationship: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610636')
            .then(function(result){
                if (result) {
                    return console.log('   + View Phone Number: PASS')
                } else {
                    console.log("   - View Phone Number: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610637')
            .then(function(result){
                if (result) {
                    return console.log('   + View Email: PASS')
                } else {
                    console.log("   - View Email: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610593')
            .then(function(result){
                if (result) {
                    return console.log('   + View Edit Emergency Contact Button: PASS')
                } else {
                    console.log("   - View Edit Emergency Contact Button: FAIL - PERMISSIONS ERROR!")
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
                    return console.log('   + Edit Full Name: PASS')
                } else {
                    console.log("   - Edit Full Name: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610661')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Relationship: PASS')
                } else {
                    console.log("   - Edit Relationship: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610662')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Phone: PASS')
                } else {
                    console.log("   - Edit Phone: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610663')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Email: PASS')
                } else {
                    console.log("   - Edit Email: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610664')
            .then(function(result){
                if (result) {
                    return console.log('   + View Save Button: PASS')
                } else {
                    console.log("   - View Save Button: FAIL - PERMISSIONS ERROR!")
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
                    return console.log('   + View Linkedin Link: PASS')
                } else {
                    console.log("   + No Linkedin Link Added: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610639')
            .then(function(result){
                if (result) {
                    return console.log('   + View Facebook Link: PASS')
                } else {
                    console.log("   + No Facebook Link Added: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610640')
            .then(function(result){
                if (result) {
                    return console.log('   + View Instagram Link: PASS')
                } else {
                    console.log("   + No Instagram Link Added: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610641')
            .then(function(result){
                if (result) {
                    return console.log('   + View Twitter Link: PASS')
                } else {
                    console.log("   + No Twitter Link: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610594')
            .then(function(result){
                if (result) {
                    return console.log('   + View Edit Social Media Button: PASS')
                } else {
                    console.log("   - View Edit Social Media Button: FAIL - PERMISSIONS ERROR!")
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
                    return console.log('   + Edit LinkedIn: PASS')
                } else {
                    console.log("   - Edit LinkedIn: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610666')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Facebook: PASS')
                } else {
                    console.log("   - Edit Facebook: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610667')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Instagram: PASS')
                } else {
                    console.log("   - Edit Instagram: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610668')
            .then(function(result){
                if (result) {
                    return console.log('   + Edit Twitter: PASS')
                } else {
                    console.log("   - Edit Twitter: FAIL - PERMISSIONS ERROR!")
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
            .exists("#ed_293610642")
            .then(function (result) {
                console.log(' ')
                console.log('>>> JOB TAB <<<')
                console.log(' ')
                console.log('   --- JOB INFORMATION CARD ---')
                console.log('       MANAGER -> SELF  ')
                console.log(' ')
                if (result) {
                    return console.log('   + View Employment Status: PASS')
                } else {
                    console.log("   - View Employment Status: FAIL - PERMISSIONS ERROR!")
        }
    })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610643')
        .then(function(result){
            if (result) {
                return console.log('   + View Location: PASS')
            } else {
                console.log("   - View Location: FAIL - PERMISSIONS ERROR!")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610644')
        .then(function(result){
            if (result) {
                return console.log('   + View Job Title: PASS')
            } else {
                console.log("   - View Job Title: FAIL - PERMISSIONS ERROR!")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610645')
        .then(function(result){
            if (result) {
                return console.log('   + View Department: PASS')
            } else {
                console.log("   - View Department: FAIL - PERMISSIONS ERROR!")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610646')
        .then(function(result){
            if (result) {
                return console.log('   + View Start Date: PASS')
            } else {
                console.log("   - View Start Date: FAIL - PERMISSIONS ERROR!")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610647')
        .then(function(result){
            if (result) {
                return console.log('   + View Reports To: PASS')
            } else {
                console.log("   - View Reports To: FAIL - PERMISSIONS ERROR!")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610609')
        .then(function(result){
            if (result) {
                return console.log('   - View Edit Job Info Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Edit Job Info Button: PASS")
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
                return console.log("   + View Bonus Information: PASS")
            } else {
                console.log('   - View Bonus Information: FAIL - PERMISSIONS ERROR!')
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610610')
        .then(function(result){
            if (result) {
                return console.log('   - View Edit Bonus Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Edit Bonus Button: PASS")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610619')
        .then(function(result){
            if (result) {
                return console.log('   - View Add Bonus Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Add Bonus Button: PASS")
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
                return console.log("   + View Employee Compensation: PASS")
            } else {
                console.log('   - View Compensation:  FAIL - PERMISSIONS ERROR!')
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610611')
        .then(function(result){
            if (result) {
                return console.log('   - View Edit Compensation Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Edit Compensation Button: PASS")
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
                return console.log("   + View Assets: PASS")
            } else {
                console.log('   - View Assets: FAIL - PERMISSIONS ERROR!')
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610612')
        .then(function(result){
            if (result) {
                return console.log('   - View Edit Assets Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Edit Assets Button: PASS")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610648')
        .then(function(result){
            if (result) {
                return console.log('   - View Add Assets Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Add Assets Button: PASS")
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
                return console.log("   + View Direct Reports: PASS")
            } else {
                console.log('   - View Bonus Information: FAIL - PERMISSIONS ERROR!')
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610613')
        .then(function(result){
            if (result) {
                return console.log('   - View Edit Direct Reports Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Edit Direct Reports Button: PASS")
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610649')
        .then(function(result){
            if (result) {
                return console.log('   - View Add Direct Reports Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Add Direct Reports Button: PASS")
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
                return console.log("   + View EEO And FSLA: PASS")
            } else {
                console.log('   - View EEO And FSLA: FAIL - PERMISSIONS ERROR!')
            }
        })
})
.then(function(){ 
    return nightmare
        .wait(500)
        .exists("#ed_293610597")
        .then(function (result) {
            console.log(' ')
            console.log('>>> NOTES TAB <<<')
            console.log(' ')
            console.log('   --- NOTES CARD ---')
            console.log('       MANAGER -> SELF  ')
            console.log(' ')
            if (result) {
                return console.log("   - View Notes Tab: FAIL - PERMISSIONS ERROR!")
            } else {
                console.log("   + View Notes Tab: PASS")
    }
})
})
.then(function() {
    return nightmare
        .wait(25)
        .goto(url + '/employee/notes/' + userID_1)
        .wait(1500)
        .exists('.ed-notes-section')
        .then(function(result){
            if (result) {
                return console.log("   - View Employee Notes: FAIL - PERMISSIONS ERROR!")
            } else {
                console.log('   + View Employee Notes: PASS')
            }
        })
})
.then(function() {
    return nightmare
        .wait(25)
        .exists('#ed_293610625')
        .then(function(result){
            if (result) {
                return console.log('   - View Add Notes Button: FAIL - PERMISSIONS ERROR!')
            } else {
                console.log("   + View Add Notes Button: PASS")
            }
        })
})
.then(function(){ 
    return nightmare
        .wait(500)
        .exists("#ed_293610598")
        .then(function (result) {
            console.log(' ')
            console.log('>>> DOCUMENTS TAB <<<')
            console.log(' ')
            console.log('   --- DOCUMENTS CARD ---')
            console.log('       MANAGER -> SELF  ')
            console.log(' ')
            if (result) {
                return console.log("   + View Documents Tab: PASS")
            } else {
                console.log("   - View Documents Tab: FAIL - PERMISSIONS ERROR!")
    }
})
})
.then(function() {
    return nightmare
        .wait(25)
        .goto(url + '/employee/documents/' + userID_1)
        .wait(1500)
        .exists('.ed-document-tab-content')
        .then(function(result){
            if (result) {
                return console.log("   + View Employee Documents: PASS")
            } else {
                console.log('   - View Employee Documents: FAIL - PERMISSIONS ERROR!')
            }
        })
})
.then(function() {
    return nightmare
    .goto(url + '/login')
    .wait(500)
    .click('#ed_293610547')
    .wait(25)
    .type('#ed_293610547', 'eddyhr.test1@gmail.com')
    .wait(25)
    .click('#ed_293610546')
    .wait(25)
    .type('#ed_293610546', 'Eddyhr!123')
    .wait(25)
    .click('.ed-btn-sign-in')
    .wait(2000)
    .exists('#ed_293610548')
    .then(function(result){
        console.log(' ')
        console.log('---------------------------------------------------------------------------------------------')
        console.log('/////////////////////////////////////////////////////////////////////////////////////////////')
        console.log('---------------------------------------------------------------------------------------------')
        console.log('   ')
        console.log('  ADMIN - EMPLOYEE PERMISSIONS TEST:')
        console.log(' ')
        console.log('>>> EMPLOYEE DIRECTORY <<<')
        console.log('       ADMIN VIEW ')
        console.log(' ')
        if(result){
            console.log('   + Invite New Employee: PASS')
        }
        else{
            console.log('   - Invite New Employee: FAIL - PERMISSIONS ERROR!')
        }
    })
})
    .then(function() {
        return nightmare
            .wait(25)
            .exists('.email-link')
            .then(function(result){
                if (result) {
                    return console.log('   + Send/View Reminder Enrollment Email: PASS')
                } else {
                    console.log('   - Send/View Reminder Enrollment Email: FAIL - PERMISSIONS ERROR!')
                }
            })
    })
    
        .then(function(){ 
            return nightmare
                .wait(25)
                .goto(url + '/employee/personal/' + userID_1)
                .wait('#ed_f_name293610599')
                .exists("#ed_f_name293610599")
                .then(function (result) {
                    console.log(' ')
                    console.log('>>> PERSONAL TAB <<<')
                    console.log(' ')
                    console.log('   --- PERSONAL INFORMATION CARD ---')
                    console.log('       ADMIN -> EMPLOYEE  ')
                    console.log(' ')
                    if (result) {
                        return console.log('   + View First Name: PASS')
                    } else {
                        console.log("   - View First Name: FAIL - PERMISSIONS ERROR!")
            }
        })
    })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_mid_initial293610603')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Middle Name: PASS')
                    } else {
                        console.log("   - View Middle Name: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_l_name293610606')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Last Name: PASS')
                    } else {
                        console.log("   - View Last Name: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_pref_name293610600')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Preferred Name: PASS')
                    } else {
                        console.log("   - View Preferred Name: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists("#ed_gender293610604")
                .then(function(result){
                    if (result) {
                        return console.log('   + View Legal Gender: PASS')
                    } else {
                        console.log("   - View Legal Gender: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_gender_iden293610607')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Gender Identity: PASS')
                    } else {
                        console.log("   - View Gender Identity: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_b_day293610601')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Birthday: PASS')
                    } else {
                        console.log("   - View Birthday: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_shirt293610602')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Gender Identity: PASS')
                    } else {
                        console.log("   - View Gender Identity: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_marital_stat293610605')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Marital Status: PASS')
                    } else {
                        console.log("   - View Marital Status: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_ssn293610608')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Social Security Number: PASS')
                    } else {
                        console.log("   - View Social Security Number: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_shirt293610602')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Shirt Size: PASS')
                    } else {
                        console.log("   - View Shirt Size: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610579')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Edit Personal Info Button: PASS')
                    } else {
                        console.log("   - View Edit Personal Info Button: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('.ed-crop-edit-icon')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Edit User Image Button: PASS')
                    } else {
                        console.log("   - View Edit User Image Button: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            console.log(' ')
            console.log('   --- CONTACT INFORMATION CARD ---')
            console.log('       ADMIN -> EMPLOYEE ')
            console.log(' ')
            return nightmare
                .wait(25)
                .exists('#ed_293610626')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Primary Email Address: PASS')
                    } else {
                        console.log("   - View Primary Email Address: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610627')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Secondary Email Address: PASS')
                    } else {
                        console.log("   - View Secondary Email Address: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610628')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Work Phone Number: PASS')
                    } else {
                        console.log("   - View Work Phone Number: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
    
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610629')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Primary Phone Number: PASS')
                    } else {
                        console.log("   - View Primary Phone Number: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610630')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Address: PASS')
                    } else {
                        console.log("   - View Address: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610631')
                .then(function(result){
                    if (result) {
                        return console.log('   + View City: PASS')
                    } else {
                        console.log("   - View City: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610632')
                .then(function(result){
                    if (result) {
                        return console.log('   + View State: PASS')
                    } else {
                        console.log("   - View State: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610633')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Zip Code: PASS')
                    } else {
                        console.log("   - View Zip Code: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610592')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Edit Contact Info Button: PASS')
                    } else {
                        console.log("   - View Edit Contact Info Button: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            console.log(' ')
            console.log('   --- EMERGENCY CONTACT CARD ---')
            console.log('       ADMIN -> EMPLOYEE ')
            console.log(' ')
            return nightmare
                .wait(25)
                .exists('#ed_293610634')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Full Name: PASS')
                    } else {
                        console.log("   - View Full Name: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610635')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Relationship: PASS')
                    } else {
                        console.log("   - View Relationship: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610636')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Phone Number: PASS')
                    } else {
                        console.log("   - View Phone Number: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610637')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Email: PASS')
                    } else {
                        console.log("   - View Email: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610593')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Edit Emergency Contact Button: PASS`')
                    } else {
                        console.log("   - View Edit Emergency Contact Button: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            console.log(' ')
            console.log('   --- SOCIAL MEDIA CARD ---')
            console.log('       ADMIN -> EMPLOYEE ')
            console.log(' ')
            return nightmare
                .wait(25)
                .exists('#ed_293610638')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Linkedin Link: PASS')
                    } else {
                        console.log("   + No Linkedin Link Added: PASS")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610639')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Facebook Link: PASS')
                    } else {
                        console.log("   + No Facebook Link Added: PASS")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610640')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Instagram Link: PASS')
                    } else {
                        console.log("   + No Instagram Link Added: PASS")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610641')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Twitter Link: PASS')
                    } else {
                        console.log("   + No Twitter Link: PASS")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610594')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Edit Social Media Button: PASS')
                    } else {
                        console.log("   - View Edit Social Media Button: PASS")
                    }
                })
        })
        .then(function(){ 
            return nightmare
                .wait(25)
                .click('#ed_293610596')
                .wait('#ed_293610643')
                .exists("#ed_293610642")
                .then(function (result) {
                    console.log(' ')
                    console.log('>>> JOB TAB <<<')
                    console.log(' ')
                    console.log('   --- JOB INFORMATION CARD ---')
                    console.log('       ADMIN -> EMPLOYEE  ')
                    console.log(' ')
                    if (result) {
                        return console.log('   + View Employment Status: PASS')
                    } else {
                        console.log("   - View Employment Status: FAIL - PERMISSIONS ERROR!")
            }
        })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610643')
            .then(function(result){
                if (result) {
                    return console.log('   + View Location: PASS')
                } else {
                    console.log("   - View Location: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610644')
            .then(function(result){
                if (result) {
                    return console.log('   + View Job Title: PASS')
                } else {
                    console.log("   - View Job Title: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610645')
            .then(function(result){
                if (result) {
                    return console.log('   + View Department: PASS')
                } else {
                    console.log("   - View Department: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610646')
            .then(function(result){
                if (result) {
                    return console.log('   + View Start Date: PASS')
                } else {
                    console.log("   - View Start Date: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610647')
            .then(function(result){
                if (result) {
                    return console.log('   + View Reports To: PASS')
                } else {
                    console.log("   - View Reports To: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610609')
            .then(function(result){
                if (result) {
                    return console.log('   + View Edit Job Info Button: PASS')
                } else {
                    console.log("   - View Edit Job Info Button: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        console.log(' ')
        console.log('   --- BONUS CARD ---')
        console.log('       ADMIN -> EMPLOYEE ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('.ed-bonus-info')
            .then(function(result){
                if (result) {
                    return console.log("   + View Bonus Information: PASS")
                } else {
                    console.log('   - View Bonus Information:  FAIL - PERMISSIONS ERROR!')
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610610')
            .then(function(result){
                if (result) {
                    return console.log('   + View Edit Bonus Button: PASS')
                } else {
                    console.log("   - View Edit Bonus Button: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610619')
            .then(function(result){
                if (result) {
                    return console.log('   + View Add Bonus Button: PASS')
                } else {
                    console.log("   - View Add Bonus Button: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        console.log(' ')
        console.log('   --- COMPENSATION CARD ---')
        console.log('       ADMIN -> EMPLOYEE ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('.ed-compensation-info')
            .then(function(result){
                if (result) {
                    return console.log("   + View Employee Compensation: PASS")
                } else {
                    console.log('   - View Compensation: FAIL - PERMISSIONS ERROR!')
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610611')
            .then(function(result){
                if (result) {
                    return console.log('   + View Edit Compensation Button: PASS')
                } else {
                    console.log("   - View Edit Compensation Button: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        console.log(' ')
        console.log('   --- ASSETS CARD ---')
        console.log('       ADMIN -> EMPLOYEE ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('.ed-asset-info')
            .then(function(result){
                if (result) {
                    return console.log("   + View Assets: PASS")
                } else {
                    console.log('   - View Assets: FAIL - PERMISSIONS ERROR!')
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610612')
            .then(function(result){
                if (result) {
                    return console.log('   + View Edit Assets Button: PASS')
                } else {
                    console.log("   + No Current Assets: PASS")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610648')
            .then(function(result){
                if (result) {
                    return console.log('   + View Add Assets Button: PASS')
                } else {
                    console.log("   - View Add Assets Button: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        console.log(' ')
        console.log('   --- DIRECT REPORTS CARD ---')
        console.log('       ADMIN -> EMPLOYEE ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('.ed-direct-report-info')
            .then(function(result){
                if (result) {
                    return console.log("   + View Direct Reports: PASS")
                } else {
                    console.log('   - View Bonus Information: FAIL - PERMISSIONS ERROR!')
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610613')
            .then(function(result){
                if (result) {
                    return console.log('   + View Edit Direct Reports Button: PASS')
                } else {
                    console.log("   - View Edit Direct Reports Button: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610649')
            .then(function(result){
                if (result) {
                    return console.log('   + View Add Direct Reports Button: PASS')
                } else {
                    console.log("   - View Add Direct Reports Button: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function() {
        console.log(' ')
        console.log('   --- EEO FSLA CARD ---')
        console.log('       ADMIN -> EMPLOYEE ')
        console.log(' ')
        return nightmare
            .wait(25)
            .exists('.ed-eeo-fsla-info')
            .then(function(result){
                if (result) {
                    return console.log("   + View EEO And FSLA: PASS")
                } else {
                    console.log('   - View EEO And FSLA: FAIL - PERMISSIONS ERROR!')
                }
            })
    })
    .then(function(){ 
        return nightmare
            .wait(500)
            .exists("#ed_293610597")
            .then(function (result) {
                console.log(' ')
                console.log('>>> NOTES TAB <<<')
                console.log(' ')
                console.log('   --- NOTES CARD ---')
                console.log('       ADMIN -> EMPLOYEE  ')
                console.log(' ')
                if (result) {
                    return console.log("   + View Notes Tab: PASS")
                } else {
                    console.log("   - View Notes Tab: FAIL - PERMISSIONS ERROR!")
        }
    })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .goto(url + '/employee/notes/' + userID_1)
            .wait(1500)
            .exists('.ed-notes-section')
            .then(function(result){
                if (result) {
                    return console.log("   + View Employee Notes: PASS")
                } else {
                    console.log('   - View Employee Notes FAIL - PERMISSIONS ERROR!')
                }
            })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .exists('#ed_293610625')
            .then(function(result){
                if (result) {
                    return console.log('   + View Add Notes Button: PASS')
                } else {
                    console.log("   - View Add Notes Button: FAIL - PERMISSIONS ERROR!")
                }
            })
    })
    .then(function(){ 
        return nightmare
            .wait(500)
            .exists("#ed_293610598")
            .then(function (result) {
                console.log(' ')
                console.log('>>> DOCUMENTS TAB <<<')
                console.log(' ')
                console.log('   --- DOCUMENTS CARD ---')
                console.log('       ADMIN -> EMPLOYEE  ')
                console.log(' ')
                if (result) {
                    return console.log("   + View Documents Tab: PASS")
                } else {
                    console.log("   - View Documents Tab: FAIL - PERMISSIONS ERROR!")
        }
    })
    })
    .then(function() {
        return nightmare
            .wait(25)
            .goto(url + '/employee/documents/' + userID_1)
            .wait(1500)
            .exists('.ed-document-tab-content')
            .then(function(result){
                if (result) {
                    return console.log("   + View Employee Documents: PASS")
                } else {
                    console.log('   - View Employee Documents: FAIL - PERMISSIONS ERROR!')
                }
            })
    })

    .then(function() {
        return nightmare
        .goto(url + '/login')
        .wait(500)
        .click('#ed_293610547')
        .wait(25)
        .type('#ed_293610547', 'eddyhr.test1@gmail.com')
        .wait(25)
        .click('#ed_293610546')
        .wait(25)
        .type('#ed_293610546', 'Eddyhr!123')
        .wait(25)
        .click('.ed-btn-sign-in')
        .wait(2000)
        .exists('#ed_293610548')
        .then(function(result){
            console.log(' ')
            console.log('---------------------------------------------------------------------------------------------')
            console.log('/////////////////////////////////////////////////////////////////////////////////////////////')
            console.log('---------------------------------------------------------------------------------------------')
            console.log('   ')
            console.log('  ADMIN - SELF PERMISSIONS TEST:')
            console.log(' ')
            console.log('>>> EMPLOYEE DIRECTORY <<<')
            console.log('       ADMIN VIEW ')
            console.log(' ')
            if(result){
                console.log('   + Invite New Employee: PASS')
            }
            else{
                console.log('   - Invite New Employee: FAIL - PERMISSIONS ERROR!')
            }
        })
    })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('.email-link')
                .then(function(result){
                    if (result) {
                        return console.log('   + Send/View Reminder Enrollment Email: PASS')
                    } else {
                        console.log('   - Send/View Reminder Enrollment Email: FAIL - PERMISSIONS ERROR!')
                    }
                })
        })
        
            .then(function(){ 
                return nightmare
                    .wait(25)
                    .goto(url + '/employee/personal/' + userID_3)
                    .wait('#ed_f_name293610599')
                    .exists("#ed_f_name293610599")
                    .then(function (result) {
                        console.log(' ')
                        console.log('>>> PERSONAL TAB <<<')
                        console.log(' ')
                        console.log('   --- PERSONAL INFORMATION CARD ---')
                        console.log('       ADMIN -> SELF  ')
                        console.log(' ')
                        if (result) {
                            return console.log('   + View First Name: PASS')
                        } else {
                            console.log("   - View First Name: FAIL - PERMISSIONS ERROR!")
                }
            })
        })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_mid_initial293610603')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Middle Name: PASS')
                        } else {
                            console.log("   - View Middle Name: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
        
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_l_name293610606')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Last Name: PASS')
                        } else {
                            console.log("   - View Last Name: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
        
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_pref_name293610600')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Preferred Name: PASS')
                        } else {
                            console.log("   - View Preferred Name: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
        
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists("#ed_gender293610604")
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Legal Gender: PASS')
                        } else {
                            console.log("   - View Legal Gender: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
        
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_gender_iden293610607')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Gender Identity: PASS')
                        } else {
                            console.log("   - View Gender Identity: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
        
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_b_day293610601')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Birthday: PASS')
                        } else {
                            console.log("   - View Birthday: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
        
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_shirt293610602')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Gender Identity: PASS')
                        } else {
                            console.log("   - View Gender Identity: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
        
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_marital_stat293610605')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Marital Status: PASS')
                        } else {
                            console.log("   - View Marital Status: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
        
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_ssn293610608')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Social Security Number: PASS')
                        } else {
                            console.log("   - View Social Security Number: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
        
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_shirt293610602')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Shirt Size: PASS')
                        } else {
                            console.log("   - View Shirt Size: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610579')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Edit Personal Info Button: PASS')
                        } else {
                            console.log("   - View Edit Personal Info Button: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('.ed-crop-edit-icon')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Edit User Image Button: PASS')
                        } else {
                            console.log("   - View Edit User Image Button: FAIL - PERMISSIONS ERROR!")
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
                            return console.log('   + Edit First Name: PASS')
                        } else {
                            console.log("   - Edit First Name: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610581')
                    .then(function(result){
                        if (result) {
                            return console.log('   + Edit Middle Initial: PASS')
                        } else {
                            console.log("   - Edit Middle Initial: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610582')
                    .then(function(result){
                        if (result) {
                            return console.log('   + Edit Last Name: PASS')
                        } else {
                            console.log("   - Edit Last Name: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610583')
                    .then(function(result){
                        if (result) {
                            return console.log('   + Edit Preferred Name: PASS')
                        } else {
                            console.log("   - Edit Preferred Name: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610584')
                    .then(function(result){
                        if (result) {
                            return console.log('   + Edit Gender: PASS')
                        } else {
                            console.log("   - Edit Gender: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610585')
                    .then(function(result){
                        if (result) {
                            return console.log('   + Edit Birthday: PASS')
                        } else {
                            console.log("   - Edit Birthday: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610586')
                    .then(function(result){
                        if (result) {
                            return console.log('   + Edit Marital Status: PASS')
                        } else {
                            console.log("   - Edit Marital Status: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610587')
                    .then(function(result){
                        if (result) {
                            return console.log('   + Edit Social Security Number: PASS')
                        } else {
                            console.log("   - Edit Social Security Number: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610588')
                    .then(function(result){
                        if (result) {
                            return console.log('   + Edit Shirt Size: PASS')
                        } else {
                            console.log("   - Edit Shirt Size: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610589')
                    .then(function(result){
                        if (result) {
                            return console.log('   + Edit Gender Identity: PASS')
                        } else {
                            console.log("   - Edit Gender Identity: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610590')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Save Personal Info Button: PASS')
                        } else {
                            console.log("   - View Save Personal Info Button: FAIL - PERMISSIONS ERROR!")
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
                console.log('       ADMIN -> SELF ')
                console.log(' ')
                return nightmare
                    .wait(25)
                    .exists('#ed_293610626')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Primary Email Address: PASS')
                        } else {
                            console.log("   - View Primary Email Address: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610627')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Secondary Email Address: PASS')
                        } else {
                            console.log("   - View Secondary Email Address: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
        
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610628')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Work Phone Number: PASS')
                        } else {
                            console.log("   - View Work Phone Number: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
        
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610629')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Primary Phone Number: PASS')
                        } else {
                            console.log("   - View Primary Phone Number: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610630')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Address: PASS')
                        } else {
                            console.log("   - View Address: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610631')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View City: PASS')
                        } else {
                            console.log("   - View City: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610632')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View State: PASS')
                        } else {
                            console.log("   - View State: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610633')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Zip Code: PASS')
                        } else {
                            console.log("   - View Zip Code: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610592')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Edit Contact Info Button: PASS')
                        } else {
                            console.log("   - View Edit Contact Info Button: FAIL - PERMISSIONS ERROR!")
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
                            return console.log('   + Edit Primary Email: PASS')
                        } else {
                            console.log("   - Edit Primary Email: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function(){
                return nightmare
                .wait(25)
                    .exists('#ed_293610651')
                    .then(function(result){
                        if(result) {
                            return console.log('   + Edit Secondary Email: PASS')
                        } else {
                            console.log("   - Edit Secondary Email: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function(){
                return nightmare
                .wait(25)
                    .exists('#ed_293610652')
                    .then(function(result){
                        if(result) {
                            return console.log('   + Edit Primary Phone Number: PASS')
                        } else {
                            console.log("   - Edit Primary Phone Number: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function(){
                return nightmare
                .wait(25)
                    .exists('#ed_293610653')
                    .then(function(result){
                        if(result) {
                            return console.log('   + Edit Work Phone Number: PASS')
                        } else {
                            console.log("   - Edit Work Phone Number: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function(){
                return nightmare
                .wait(25)
                    .exists('#ed_293610654')
                    .then(function(result){
                        if(result) {
                            return console.log('   + Edit Work Phone Number EXT: PASS')
                        } else {
                            console.log("   - Edit Work Phone Number EXT: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function(){
                return nightmare
                .wait(25)
                    .exists('#ed_293610655')
                    .then(function(result){
                        if(result) {
                            return console.log('   + Edit Address: PASS')
                        } else {
                            console.log("   - Edit Address: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function(){
                return nightmare
                .wait(25)
                    .exists('#ed_293610656')
                    .then(function(result){
                        if(result) {
                            return console.log('   + Edit City: PASS')
                        } else {
                            console.log("   - Edit City: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function(){
                return nightmare
                .wait(25)
                    .exists('#ed_293610657')
                    .then(function(result){
                        if(result) {
                            return console.log('   + Edit State: PASS')
                        } else {
                            console.log("   - Edit State: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function(){
                return nightmare
                .wait(25)
                    .exists('#ed_293610658')
                    .then(function(result){
                        if(result) {
                            return console.log('   + Edit Zip Code: PASS')
                        } else {
                            console.log("   - Edit Zip Code: FAIL - PERMISSIONS ERROR!")
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
                console.log('       ADMIN -> SELF ')
                console.log(' ')
                return nightmare
                    .wait(25)
                    .exists('#ed_293610634')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Full Name: PASS')
                        } else {
                            console.log("   - View Full Name: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610635')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Relationship: PASS')
                        } else {
                            console.log("   - View Relationship: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610636')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Phone Number: PASS')
                        } else {
                            console.log("   - View Phone Number: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610637')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Email: PASS')
                        } else {
                            console.log("   - View Email: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610593')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Edit Emergency Contact Button: PASS!')
                        } else {
                            console.log("   - View Edit Emergency Contact Button: FAIL - PERMISSIONS ERROR!")
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
                            return console.log('   + Edit Full Name: PASS')
                        } else {
                            console.log("   - Edit Full Name: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610661')
                    .then(function(result){
                        if (result) {
                            return console.log('   + Edit Relationship: PASS')
                        } else {
                            console.log("   - Edit Relationship: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610662')
                    .then(function(result){
                        if (result) {
                            return console.log('   + Edit Phone: PASS')
                        } else {
                            console.log("   - Edit Phone: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610663')
                    .then(function(result){
                        if (result) {
                            return console.log('   + Edit Email: PASS')
                        } else {
                            console.log("   - Edit Email: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610664')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Save Button: PASS')
                        } else {
                            console.log("   - View Save Button: FAIL - PERMISSIONS ERROR!")
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
                console.log('       ADMIN -> SELF ')
                console.log(' ')
                return nightmare
                    .wait(25)
                    .exists('#ed_293610638')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Linkedin Link: PASS')
                        } else {
                            console.log("   + No Linkedin Link Added: PASS")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610639')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Facebook Link: PASS')
                        } else {
                            console.log("   + No Facebook Link Added: PASS")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610640')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Instagram Link: PASS')
                        } else {
                            console.log("   + No Instagram Link Added: PASS")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610641')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Twitter Link: PASS')
                        } else {
                            console.log("   + No Twitter Link: PASS")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610594')
                    .then(function(result){
                        if (result) {
                            return console.log('   + View Edit Social Media Button: PASS')
                        } else {
                            console.log("   - View Edit Social Media Button: PASS")
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
                            return console.log('   + Edit LinkedIn: PASS')
                        } else {
                            console.log("   - Edit LinkedIn: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610666')
                    .then(function(result){
                        if (result) {
                            return console.log('   + Edit Facebook: PASS')
                        } else {
                            console.log("   - Edit Facebook: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610667')
                    .then(function(result){
                        if (result) {
                            return console.log('   + Edit Instagram: PASS')
                        } else {
                            console.log("   - Edit Instagram: FAIL - PERMISSIONS ERROR!")
                        }
                    })
            })
            .then(function() {
                return nightmare
                    .wait(25)
                    .exists('#ed_293610668')
                    .then(function(result){
                        if (result) {
                            return console.log('   + Edit Twitter: PASS')
                        } else {
                            console.log("   - Edit Twitter: FAIL - PERMISSIONS ERROR!")
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
                    .exists("#ed_293610642")
                    .then(function (result) {
                        console.log(' ')
                        console.log('>>> JOB TAB <<<')
                        console.log(' ')
                        console.log('   --- JOB INFORMATION CARD ---')
                        console.log('       ADMIN -> SELF  ')
                        console.log(' ')
                        if (result) {
                            return console.log('   + View Employment Status: PASS')
                        } else {
                            console.log("   - View Employment Status: FAIL - PERMISSIONS ERROR!")
                }
            })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610643')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Location: PASS')
                    } else {
                        console.log("   - View Location: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610644')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Job Title: PASS')
                    } else {
                        console.log("   - View Job Title: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610645')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Department: PASS')
                    } else {
                        console.log("   - View Department: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610646')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Start Date: PASS')
                    } else {
                        console.log("   - View Start Date: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610647')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Reports To: PASS')
                    } else {
                        console.log("   - View Reports To: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610609')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Edit Job Info Button: PASS')
                    } else {
                        console.log("   - View Edit Job Info Button: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            console.log(' ')
            console.log('   --- BONUS CARD ---')
            console.log('       ADMIN -> SELF ')
            console.log(' ')
            return nightmare
                .wait(25)
                .exists('.ed-bonus-info')
                .then(function(result){
                    if (result) {
                        return console.log("   + View Bonus Information: PASS")
                    } else {
                        console.log('   - View Bonus Information:  FAIL - PERMISSIONS ERROR!')
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610610')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Edit Bonus Button: PASS')
                    } else {
                        console.log("   - View Edit Bonus Button: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610619')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Add Bonus Button: PASS')
                    } else {
                        console.log("   - View Add Bonus Button: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            console.log(' ')
            console.log('   --- COMPENSATION CARD ---')
            console.log('       ADMIN -> SELF ')
            console.log(' ')
            return nightmare
                .wait(25)
                .exists('.ed-compensation-info')
                .then(function(result){
                    if (result) {
                        return console.log("   + View Employee Compensation: PASS")
                    } else {
                        console.log('   - View Compensation: FAIL - PERMISSIONS ERROR!')
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610611')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Edit Compensation Button: PASS')
                    } else {
                        console.log("   - View Edit Compensation Button: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            console.log(' ')
            console.log('   --- ASSETS CARD ---')
            console.log('       ADMIN -> SELF ')
            console.log(' ')
            return nightmare
                .wait(25)
                .exists('.ed-asset-info')
                .then(function(result){
                    if (result) {
                        return console.log("   + View Assets: PASS")
                    } else {
                        console.log('   - View Assets: FAIL - PERMISSIONS ERROR!')
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610612')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Edit Assets Button: PASS')
                    } else {
                        console.log("   + No Current Assets: PASS")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610648')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Add Assets Button: PASS')
                    } else {
                        console.log("   - View Add Assets Button: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            console.log(' ')
            console.log('   --- DIRECT REPORTS CARD ---')
            console.log('       ADMIN -> SELF ')
            console.log(' ')
            return nightmare
                .wait(25)
                .exists('.ed-direct-report-info')
                .then(function(result){
                    if (result) {
                        return console.log("   + View Direct Reports: PASS")
                    } else {
                        console.log('   - View Bonus Information: FAIL - PERMISSIONS ERROR!')
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610613')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Edit Direct Reports Button: PASS')
                    } else {
                        console.log("   - View Edit Direct Reports Button: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610649')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Add Direct Reports Button: PASS')
                    } else {
                        console.log("   - View Add Direct Reports Button: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function() {
            console.log(' ')
            console.log('   --- EEO FSLA CARD ---')
            console.log('       ADMIN -> SELF ')
            console.log(' ')
            return nightmare
                .wait(25)
                .exists('.ed-eeo-fsla-info')
                .then(function(result){
                    if (result) {
                        return console.log("   + View EEO And FSLA: PASS")
                    } else {
                        console.log('   - View EEO And FSLA: FAIL - PERMISSIONS ERROR!')
                    }
                })
        })
        .then(function(){ 
            return nightmare
                .wait(500)
                .exists("#ed_293610597")
                .then(function (result) {
                    console.log(' ')
                    console.log('>>> NOTES TAB <<<')
                    console.log(' ')
                    console.log('   --- NOTES CARD ---')
                    console.log('       ADMIN -> SELF  ')
                    console.log(' ')
                    if (result) {
                        return console.log("   + View Notes Tab Disabled: PASS")
                    } else {
                        console.log("   - View Notes Tab Disabled: FAIL - PERMISSIONS ERROR!")
            }
        })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .goto(url + '/employee/notes/' + userID_3)
                .wait(1500)
                .exists('.ed-notes-section')
                .then(function(result){
                    if (result) {
                        return console.log("   + View Employee Notes: PASS")
                    } else {
                        console.log('   - View Employee Notes FAIL - PERMISSIONS ERROR!')
                    }
                })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .exists('#ed_293610625')
                .then(function(result){
                    if (result) {
                        return console.log('   + View Add Notes Button: PASS')
                    } else {
                        console.log("   - View Add Notes Button: FAIL - PERMISSIONS ERROR!")
                    }
                })
        })
        .then(function(){ 
            return nightmare
                .wait(500)
                .exists("#ed_293610598")
                .then(function (result) {
                    console.log(' ')
                    console.log('>>> DOCUMENTS TAB <<<')
                    console.log(' ')
                    console.log('   --- DOCUMENTS CARD ---')
                    console.log('       ADMIN -> SELF  ')
                    console.log(' ')
                    if (result) {
                        return console.log("   + View Documents Tab: PASS")
                    } else {
                        console.log("   - View Documents Tab: FAIL - PERMISSIONS ERROR!")
            }
        })
        })
        .then(function() {
            return nightmare
                .wait(25)
                .goto(url + '/employee/documents/' + userID_3)
                .wait(1500)
                .exists('.ed-document-tab-content')
                .then(function(result){
                    if (result) {
                        return console.log("   + View Employee Documents: PASS")
                    } else {
                        console.log('   - View Employee Documents: FAIL - PERMISSIONS ERROR!')
                    }
                })
        })
        
        
            .then(function(){
                return nightmare
                .end()
                .then(function(){
                    console.log('   ')
                    console.log('   ')
                    console.log('   ')
                    console.log('   ')
                    console.log('////////////////////////////T E S T  C O M P L E T E///////////////////////////////')
                    console.log('   ')
                    console.log('   ')
                    console.log('   ')
                    console.log('   ')
                    console.log('   ')
                })
                .catch(function (error) {
                    console.log(error)
                })
        
            })


