const fs = require("fs");

function acessaArq (arq) {
    return new Promise(function (resolve, reject) {
        fs.readFile(arq, function(error, dado) {
            resolve(parseInt(dado));
        });
    });
}

async function Soma () {
    var total = 0;
    total += await acessaArq("1.txt");
    total += await acessaArq("2.txt");
    total += await acessaArq("3.txt");
    console.log(total);
}

Soma();