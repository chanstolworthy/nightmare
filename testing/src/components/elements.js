
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

var d = new Date();

module.exports = {
    divider: function(){
            console.log(' ')
            console.log('---------------------------------------------------------------------------------------------')
            console.log('/////////////////////////////////////////////////////////////////////////////////////////////')
            console.log('---------------------------------------------------------------------------------------------')
            console.log('   ')
    },
    header: function(){
            console.log('   ')
            console.log('   ')
            console.log('   ')
            console.log('   ')
            console.log('////////////////////////////P E R M I S S I O N S  T E S T////////////////////////////////////')
            console.log('   ')
            console.log('   ')
            console.log('   ')
            console.log('   ')
            console.log('START - DATE/TIME: ' + d.getMonth() + '/' + d.getDay() + '/' +  d.getFullYear() + ' - ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds())
            console.log(' ')
    },
    completed: function(){
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
    }







}