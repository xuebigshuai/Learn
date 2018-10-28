/**
 * Proxy的set方法
 * @type {{set(*, *, *=): void}}
 */
var valitor = {

    set(target, property,value) {
        if (property == 'age') {
            if (value > 200) {
                target[property] = 200
            }else {
                target[property] = value;
            }
            if(!Number.isInteger(value)){
                throw new TypeError('The age is not an Integer');
            }
        }else {
            target[property] = value;
        }
        console.log(`${property}:${target[property]}`);

    }
};
var person = new Proxy({},valitor);

person.age = 1000;
person.age = 20;
person.time = 1020;


var handler={
    get(target,property){

        return function () {
            return 35
        }
    }
};
/**
 * Proxy get()拦截
 * @type {{}}
 */
var animal = new Proxy({},handler);

console.log(`animal.age:${animal.age}`);
console.log(`animal.age:${animal.name()}`);

