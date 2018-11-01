/*函数参数的解构赋值Start*/
function f([x,y]) {
    return x+y;
}
//数组解构赋值
let f1 = f([1,2]);
console.log(f1);
let map1 = [[1,3],[3,4]].map(([a,b]) => a+b);
console.log(map1);
//对象解构赋值
let {foo,doo}={foo:1,doo:2};
console.log("foo:"+foo,"doo："+doo);

/*函数参数的解构赋值End*/
/*解构的用途Start*/

/*1、交换变量的值*/
let arr1 = [1,2,3,4,5];
let [a,b,c,d,e] = arr1;
arr1 = [e,d,c,b,a];
console.log(arr1);

/*2、从函数返回多个值*/
function example() {
    return [1,2,3]
};
let [a1,b1,c1] = example();
console.log(a1,b1,c1);


/*解构的用途End*/

function Person(name) {
    this.name =name;
}
Person.prototype.eat =function (apple) {
    this.apple = apple;
    return this;
};
Person.prototype.say =function (good) {
    this.good =good;
    console.log(this.name+"吃了一个"+this.apple+",说"+this.good);
    return this;
};

var p = new Person("Tom");
var na = p.eat("apple").say("good!!").name;
console.log(na);

/**
 *对象的解构赋值
 * 1、对象的解构也可以指定默认值，默认值生效的条件是，对象的属性值严格等于undefined,null与undefined不严格相等;
 */
let {x=3,y=5}={x:6,y:3};
console.log(x);
console.log(y);
let {w=3,u=5}={};
console.log(w);
console.log(u);