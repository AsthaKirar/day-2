const dotenv = require('dotenv')
dotenv.config()

config_config = {
    PORT: process.env.PORT
}
const config = Object.freeze(_config)
module.exports = config