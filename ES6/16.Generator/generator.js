/**
 * yield表达式如果用在另一个表达式之中，必须放在圆括号里面;
 * yield表达式只能用在 Generator 函数里面，用在其他地方都会报错;
 * @returns {IterableIterator<string>}
 */
function* helloGenerator() {
    yield 'hello';
    yield 'world';
    return '薛煜帅';
}

var hw = helloGenerator();
var hwof = helloGenerator();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

/**
 * for...of 遍历
 *
 * next方法的返回对象的done属性为true，for...of循环就会中止，
 * 且不包含该返回对象，所以上面代码的return语句返回的薛煜帅，不包括在for...of循环之中
 */
for (let i of hwof) {
    console.log(i + '1111');
}

function* Fu() {
    yield console.log('Fu'+'=====');
    yield function aa() {
       return 1
    };
    yield Symbol("yield");
}
var fu = Fu();
console.log('==================================');
console.log(fu.next());
console.log(fu.next());
console.log(fu.next());
console.log('==================================');

/**
 * next()  传参数
 * 1、yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数
 *  该参数就会被当作上一个yield表达式的返回值;
 *  2、V8 引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的。
 *     从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数;
 * @returns {IterableIterator<*>}
 * @constructor
 */
function* P() {
    console.log('start');
    console.log(`1.${yield}`);
    console.log(`2.${yield }`);

}

var gp = P();
console.log(gp.next());
gp.next('xue');
gp.next('你好');

/**
 * 斐波那契数列
 * @returns {IterableIterator<number>}
 */
function* fibonacci(n) {
    let [prev, curr] = [1, 1];
    for (let i =0;i<n;i++) {
        yield curr;
        [prev, curr] = [curr, curr + prev]
    }
}
fibonacci = fibonacci(10);
for(let curr of fibonacci){
    if(curr>1000) break;
    console.log(curr);
}

/**
 * 1、除了for...of循环以外，扩展运算符（...）、解构赋值和Array.from方法内部调用的，都是遍历器接口
 * 2、throw方法抛出的错误要被内部捕获，前提是必须至少执行过一次next方法
 * 3、throw方法被捕获以后，会附带执行下一条yield表达式。也就是说，会附带执行一次next方法
 */

function A() {
    this.name = '1'
};
var b = {};
A.call(b);
console.log(b.name);
function B() {

}

/**
 * Generator 上的this
 * ES6 规定这个遍历器是 Generator 函数的实例，也继承了 Generator 函数的prototype对象上的方法
 * @returns {IterableIterator<string>}
 * @constructor
 */

function* F() {
    this.a = 'obj.a+++';
    yield this.b='obj.b+++';
    yield  this.c ='obj.c+++';

}

var obj ={};

var f = F.call(obj);
console.log(f.next());
console.log(f.next());
console.log(obj.a);
console.log(obj.b);

function* gen() {
    this.name = '生产函数';
    yield this.age = 25;
}

function Gen() {
    return gen.call(gen.prototype)
}
var d = new Gen();

console.log(d.next());
console.log(d.name);
console.log(d.age);

/**
 * 含义
 * 
 */

var clock = function* () {
  while (true){
      console.log('Tick');
      yield ;
      console.log('Tock!');
      yield ;
  }
};
var j=clock();
console.log(j.next());
console.log(j.next());
console.log(j.next());

/**
 * 控制流管理
 * @param value1
 * @returns {IterableIterator<*>}
 */
function* longRunTask(value1) {
     var value2 = yield value1+1;
     console.log("value2",value2);
     var value3 = yield value2+2;
    console.log("value3",value3);
};
var task = longRunTask(6);
function scheduler(task) {
    var taskobj = task.next(task.value);
    if(!taskobj.done){
        task.value = taskobj.value;
        scheduler(task)
    }
};
scheduler(task);
/*var res = task.next(task.value);
while (!task.done){
    .value;
    console.log("res",res)
}
console.log(task.value);
console.log(task.next(task.value));*/


/**yield*
 *  如果yield表达式后面跟的是一个遍历器对象，需要在yield表达式后面加上星号，
 *  表明它返回的是一个遍历器对象。这被称为yield*表达式,yield*可以跟一个异步遍历器;
 */
