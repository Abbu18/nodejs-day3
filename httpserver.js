const http = require('http');

const app = http.createServer(function(request,response){
    response.write("Welcome to nodejs training")
    response.end();
})

app.listen(5000,function(){
    console.log("server started with port number 5000")
})

