// const mongoose = require('mongoose')
// const config = require("../config/config")
// function connect(){
//     mongoose.connect(config.MONGO_URI)
//     .then(()=>{
//         console.log("connected to DB")
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }
// module.exports = connect
const mongoose = require('mongoose');
const config = require("../config/config");

function connect() {
    if (!config.MONGO_URI) {
        console.error("Error: MONGO_URI is not defined in the configuration.");
        return;
    }

    mongoose.connect(config.MONGO_URI)
        .then(() => {
            console.log("Connected to DB");
        })
        .catch((err) => {
            console.error("Error connecting to the database:", err.message);
        });
}

module.exports = connect;
