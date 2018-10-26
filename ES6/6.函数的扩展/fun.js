'use strict'
/**
 * bind函数用法
 * @returns {string}
 */
let get = function () {
    return this.name;
};
let obj = {
    name: '薛煜帅',
    age: '26',
    set: function (name) {
        this.name = name;
    }
};

var a = get.bind(obj);
console.log(a());
/**
 * 箭头函数
 * @param numbers
 * @returns {*}
 */
const number = (...numbers) => numbers;
console.log(number(1, 2, 3, 4, 5));

var sum = [1, 2, 3].map(x => x + x);
console.log(sum);
/**
 * 箭头函数中的this
 * 作为方法的箭头函数this指向全局window对象，而普通函数则指向调用它的对象;
 * 函数体内的this对象，就是箭头函数所属于的方法定义时所在的对象，而不是使用时所在的对象;
 * @type {{num: number, fn: obj1.fn}}
 */
var obj1 = {
    num: 1,
    fn: function () {
        console.log(this.num);
        var f = () => {
            console.log(this.num);
        };
        f();
    },
    fn2: () => {
        console.log(this, this.num);//这里的this指向window对象
    }
};
this.num = 2;
obj1.fn();
obj1.fn2();
/**
 * 嵌套的箭头函数
 * 部署管道机制,即前一个函数的输出是后一个函数的输入
 * @param funs
 * @returns {function(*=): (*)}
 */
const pipeline = (...funs) => val => funs.reduce((a, b) => b(a), val);
const plus = (a) => a + 1;
const mult = (a) => a * 2;
const addThenMult = pipeline(plus, mult);

function pipeline1(...funs) {
    return function (val) {
        return funs.reduce(function (a, b) {
            return b(a);
        }, val)
    }
}

console.log(addThenMult(5));

function tep() {
    console.log(this.name);
};
/**
 * 双冒号运算符
 * @type {{name: string}}
 */
var tepObj ={
    name:'薛煜帅'
};
var ace = tepObj :: get;
ace();
