const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3001;

app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
   
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
   
    next();
   
    });
    
const server = http.createServer(app);

server.listen(port);
console.log("Server started on port "+ port);