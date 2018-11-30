/* 
*
*@author xueyushuai 
*/
/*
* 1.原型式，继承
*
* */

function inheritObject(o) {
    function F() {}
    //过度对象的原型继承父对象
    F.prototype = o;

    return new F();
}

/*
* 2、寄生式继承
* */
var book ={

};
var bookObj = Object.create({},{
    name:{
        writeable:true,
    }
});