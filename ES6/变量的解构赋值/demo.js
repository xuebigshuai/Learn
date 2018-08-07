/*函数参数的解构赋值Start*/
function f([x,y]) {
    return x+y;
}
let f1 = f([1,2]);
console.log(f1);
let map1 = [[1,3],[3,4]].map(([a,b]) => a+b);
console.log(map1);

/*函数参数的解构赋值End*/
/*解构的用途Start*/
/*1、交换变量的值*/
let arr1 = [1,2,3,4,5];
 [a,b,c,d,e] = arr1;
arr1 = [e,d,c,b,a];
console.log(arr1);
/*解构的用途End*/
