let fs = require('fs');

/**
 * 一、async 函数
 *
 * 1、正常情况下，await命令后面是一个 Promise 对象。如果不是，就返回对应的值。
 * 2、async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，
 *    才会发生状态改变，除非遇到return语句或者抛出错误。
 * 3、async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖，
 *    和then的效果一样。
 * 4、await命令只能用在async函数之中，如果用在普通函数，就会报错;
 * @returns {Promise<*[]>}
 */
async function getNames() {
    const name1 = await new Promise((resolve, reject) => fs.readFile('/learn/Learn/ES6/data/data.json', {encoding: 'utf8'}, function (error, data) {
        return resolve(data);
    }));
    console.log(name1);
    const name2 = await 65;
    console.log(name2);

    return [1, 2];
}

getNames().then(function (data) {
    console.log(data)
});

/**
 * 二、异步遍历的接口
 *   一个对象的同步遍历器的接口，部署在Symbol.iterator属性上面。
 *   同样地，对象的异步遍历器接口，部署在Symbol.asyncIterator属性上面。
 * 1、异步遍历器的最大的语法特点，就是调用遍历器的next方法，返回的是一个 Promise 对象
 * 2、这个 Promise 对象的状态变为resolve以后的回调函数。回调函数的参数，
 *   则是一个具有value和done两个属性的对象，这个跟同步遍历器是一样的  then({value,done})
 */


/**
 * 三、for await...of循环也可以用于同步遍历器。
 */
//createAsyncIterable(['a','b']);

async function* gen() {
    yield 'a';
    yield await "v";
}
var gen1 = gen();
/*for await (let x of gen1){
     console.log(x);
}*/


/**
 * 四、异步 Generator 函数
 *    异步 Generator 函数的作用，是返回一个异步遍历器对象，调用next()方法，返回Promise对象；
 * 1、异步 Generator 函数的作用，是返回一个异步遍历器对象；
 *  注意：
 *     普通的 async 函数返回的是一个 Promise 对象，而异步 Generator 函数返回的是一个异步 Iterator 对象。
 *     可以这样理解，async 函数和异步 Generator 函数，是封装异步操作的两种方法，都用来达到同一种目的。
 *     区别在于，前者自带执行器，后者通过for await...of执行，或者自己编写执行器。
 */


/**
 * 五、JavaScript 就有了四种函数形式：普通函数、async 函数、Generator 函数和异步 Generator 函数
 */
