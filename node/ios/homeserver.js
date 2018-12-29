/* 
*
*@author xueyushuai 
*/
var http =require('http');
var fs=require('fs');
http.createServer(function (req,res) {
    fs.createReadStream('./home.html').pipe(res);
}).listen(8083);