
console.log("111");
/**
 * 1、const的作用域与let命令相同：只在声明所在的块级作用域内有效;
 * @type {number}
 */
let a = 1 ;

var b = 1;
{
    let a = 2;
     b = 3;

    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);
for (var i = 1;i<10;i++){
    console.log(i+'+++++++++');
}
console.log(i);
for (let j = 1;j<10;j++){
    console.log(j+'---------');
}
console.log( d);
var d;
//console.log( d1);
let d1;
const  a2 = 1;
const  foo={};
foo.name = 'zhangsan';
console.log(foo);
