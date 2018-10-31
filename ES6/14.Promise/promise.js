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

/**
 * Promise.prototype.then()
 * 1、then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。
 *    因此可以采用链式写法，即then方法后面再调用另一个then方法。
 * 2、第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。
 * @type {Promise<any>}
 */
let thenObj = new Promise(function (resolve, reject) {
   return resolve("6666")
});
   thenObj.then(function (data) {
      console.log(data)
   }).then(function () {
       return "end";
       //console.log("end")
   }).then(function (data) {
       console.log(data+'------------')
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

