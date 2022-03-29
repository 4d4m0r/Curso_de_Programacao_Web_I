const http = require('http');
const fs = require('fs');
let arr = [];

const server = http.createServer(function(req,res){
    fs.readdir("./arq_node1", (err, files) => {
      if (err) throw err;
    
      for (let file of files) {
        arr.push(file);
      }
    });
    for(let i = 0;i < arr.length;i++){
      res.write(arr[i]+"\n");
    }
    res.end();
});

server.listen(3000);