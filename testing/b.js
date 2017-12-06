const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const url = 'http://localhost:3000'

module.exports = {
    runB: function(){
        return nightmare
        .viewport(1200, 1000)
        .goto(url + '/login')
        .wait(2000)
        .exists('#ed_293610551')
        .then(function(result){
            if(result){
                console.log('TEST b')
            } else {
                console.log('FAIL b')
            }
        })
        .then(function(){
            return nightmare
            .end()
        })
          
    }
}