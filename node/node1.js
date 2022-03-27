const http = require('http');
const fs = require('fs');
let arr = [];

const server = http.createServer(function(req,res){
    fs.readdir("./arq_node1", (err, files) => {
        if (err)
          console.log(err);
        else {
          console.log("\nDiretório:");
          files.forEach(file => {
            arr.push(file);
          })
        }
    });
    res.end();
});

server.listen(3000);