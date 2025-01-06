const app = require('./src/app')
const http = require('http')
const config = require("./src/config/config")
const db = require("./src/db/db")


const server = http.createServer(app)



server.listen(config.PORT,()=>{
    console.log("server is runing port 3000")
})