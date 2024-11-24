const http = require("http");
// const app = require("./app");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://Bekk1:9dPaJoBm119T8Vo1@cluster0.gwifw.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) =>{
  if(err) {console.log("Error on connection MongoDB")}
  else{
    console.log("MongoDB connection succed");
    module.exports = client;
  

    const app = require("./app")
    const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
  console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});

  }
})



