const config = require('config')
const config = require("../config/config")
function connect(){
    mongoose.connect(config.MONGO_URI)
    .then(()=>{
        console.log("connected to DB")
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = connect