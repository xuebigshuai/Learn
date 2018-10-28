/**
 * then 方法返回的是一个新的Promise实例
 * @type {Promise<any>}
 */
var promise = new Promise(function (resolve,reject) {

    return resolve(2)
});
promise.then(function (data) {
   return new Promise(function (resolve,reject) {
       resolve(data*2)
   })
}).then(function (data) {
    console.log(data)
});

var pr = new Promise(function (resolve,reject) {
    setTimeout(() =>reject(new Error('fail')),3000,);
});

var pr2 = new Promise(function (resolve,reject) {
   setTimeout(()=>resolve(pr),1000);
});
pr2.then(function (fn) {
   console.log(fn);
});


var p1 = new Promise(function (resolve,reject) {
    resolve('p1');
});

var p2 = new Promise(function (resolve,reject) {
    resolve('p2');
});
/**
 * Promise.all().then(function(data)) then里面获取的值为每一个promises实力resolve传的值 组成的数组
 */
Promise.all([p1,p2]).then(function (data) {
    console.log(data instanceof Array);
    for (let i of  data){
        console.log(`AllData:${i}`);
    }
    console.log(`AllData:${data}`);
});