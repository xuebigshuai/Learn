/**
 * Object.assign()
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
 * setPrototypeOf() 用来设置一个对象的prototype对象，返回参数对象本身
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


