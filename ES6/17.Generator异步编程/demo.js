let fs = require("fs");

let http = require("http");
let path = require("path");
let thunkify =  require('thunkify');
let co = require('co');


/**
 * 异步任务的封装
 * @returns {IterableIterator<Promise<any>>}
 */
function* gen() {
    let dataPath = path.normalize(__dirname+"/../data/data.json");

    let result = yield  readFile(dataPath);
    console.log(result);
}

let g = gen.call(this);

let result = g.next().value;

result.then(function (data) {
    return data;
}).then(function (data) {
   g.next(data)
});

/**
 * 异步读取文件
 * @param dataPath
 * @returns {Promise<any>}
 */
function readFile(dataPath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(dataPath, {encoding: 'utf8'}, function (error, data) {
            resolve(data)
        });
    });
    console.log(dataPath);
}

/**
 * Thunkify 模块
 */
let dataPath = path.normalize(__dirname+"/../data/data.json");
var read = thunkify(fs.readFile);
read(dataPath,{encoding:"utf8"})(function (error,data) {
        var re = JSON.parse(data);
       console.log(re.People[213])

});
