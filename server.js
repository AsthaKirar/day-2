const app = require('./src/app');
const http = require('http');
const config = require("./src/config/config");
const connectToDb = require("./src/db/db");

connectToDb();

const server = http.createServer(app);

server.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});
