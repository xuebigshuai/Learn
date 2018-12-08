/* 
*
*@author xueyushuai 
*/

/*
* 1、Object.create(prototype,descriptions)
* */
var person = Object.create({}, {
    name: {
        value: '不可修改的属性',//对象的默认值,默认值为undefined
        writable: false,//,//对象属性是否可修改,flase为不可修改，默认值为true
        configurable: false,//能否使用delete、能否需改属性特性、或能否修改访问器属性、，false为不可重新定义，默认值为true
        enumerable: false,//对象属性是否可通过for-in循环，flase为不可循环，默认值为true
    },
    age: {
        writable: true,
        configurable: true
    },
    _size: {
        value: 27,
        writable: true
    },
    size: {
        //访问器属性getter，setter
        get() {
            return this._size
        },
        set(newValue) {
            this._size *= newValue
        }
    },
    _sex: {

        value: '男',
        writable: true,
        enumerable: true,
        configurable: true
    }
});
console.log(person);//{}
console.log(person.name);//不可修改的属性
person.name = '你好';
person.age = '26';
delete person.name;
console.log(person.name);//不可修改的属性
console.log(person.age);//26
delete  person.age;
console.log(person.age);//undefined
console.log(person.size);//27
person.size = 2;
console.log(person.size);//54=2*27


Object.defineProperty(person, 'sex', {

    set: function (newValue) {
        this._sex = newValue;
    },
    get: function () {
        return this._sex;
    }
});

console.log(person.sex);//男
person.sex='女';
console.log(person.sex);//女
console.log(person._sex);//女
