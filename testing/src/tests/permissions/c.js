const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const urls = 'http://localhost:3000'
const url = require('../../../url')

module.exports = {
    runC: function(){
        return nightmare
        .viewport(1200, 1000)
        .goto(url.mainUrl + '/login')
        .wait(2000)
        .exists('#ed_293610551')
        .then(function(result){
            if(result){
                console.log('TEST C')
            } else {
                console.log('FAIL C')
            }
        })
        .then(function(){
            return nightmare
            .end()
        })
          
    }
}