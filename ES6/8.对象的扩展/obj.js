/**
 * Object.assign(target,source)
 * 将source上的可枚举属性复制到target上（方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target））
 *
*/
var obj={a:1};
var a={B:2};
var b={C:3};
var c = 'ghj';
var obj1= Object.assign(obj,a,b,c);
console.log(obj1);
console.log(obj1 === obj);
console.log(Object('add'));
console.log(Object(true));
console.log(Object.assign({ a: 'b' }, { [Symbol('c')]: 'd' }));
/**
 * Object.defineProperty()
 * js中的数据属性和访问器属性
 * Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。
 * @type {{name: string}}
 */
var person={
    name:'人'
};
var descriptor = Object.getOwnPropertyDescriptor(person,'name');
console.log(descriptor);
console.log(person.name);
// delete person.name;
console.log(person.name);
Object.defineProperty(person,"name",{
    configurable:false,
    enumerable:false,
    value:"薛煜帅",
    writable:false
});
console.log(person.name);
delete person.name;
console.log("delete name :"+person.name);
/**
 * getPrototypeOf()  获取原型对象
 * @type {any}
 */
function Man() {
    this.sex="男"
}
var man = new Man();
let peroPrototype=Object.getPrototypeOf(man);
console.log(peroPrototype);

/**
 * super 指向当前对象的原型对象
 * setPrototypeOf(obj,prototype) 用来设置一个对象的prototype对象，返回参数对象本身
 * @type {{foo: string}}
 */
const proto = {
    foo:"hello"
};
var objQ={
    foo:"world",
    find(){
        return super.foo;
    }
};
Object.setPrototypeOf(objQ,proto);
var h = objQ.find();
console.log(h);
/**
 * Object 属性的遍历
 * @type {{name: string, age: number}}
 */
var objkey={
    name:'xue',
    age:26,
    [Symbol()]:'symbol'
};
console.log("keys",Object.keys(objkey));
console.log(Object.getOwnPropertyNames(objkey));
console.log(Object.getOwnPropertySymbols(objkey));
console.log(Reflect.ownKeys(objkey));
for(let attr of Object.keys(objkey)){
console.log(attr)
}

/**
 * call 和 apply  的返回值 取决于 父类函数的返回值
 * @constructor
 */
function Add(){
    //return this.a+this.b;
    this.c = this.a+this.b;
}
var obh = {
    a:1,
    b:2
};

//console.log(Add.call(obh));
console.log(Add.apply(obh));
console.log(obh.c);


