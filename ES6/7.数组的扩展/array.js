let arr = [1,"a","c",true];
//for..of循环默认是arr.values()
for(let [key,value] of arr.entries()){
    console.log(key)
}
for (k in arr){
    console.log(k+'ffffffffffff');
    console.log(arr[k]);
}

function test(a,b,c) {
    console.log(arguments);
    
}
test(1,2,3,5);
arr.push(...[1,2,3,4]);
console.log(arr);
/**
 * copyWithin
 */

var q = [].copyWithin.call({length: 5, 3: 1}, 0, 3);
console.log(q);
console.log(Array.from({length: 5, 3: 1}));
/**
 * 数组的空位
 * */
var arr1 = [,'a',undefined,null].join('#');

console.log(arr1);

/**
 * keys();values();entries()
 * @type {string[]}
 */
var arr2 = ['a','b'];
for(let i of arr2.keys()){
    console.log(i);
}
/*for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}*/
for(let [i,e] of arr2.entries()){
    console.log(i,e);
}
/**
 * 数组空位处理
 * entries()、keys()、values()、find()和findIndex()会将空位处理成undefined；
 * for...of循环也会遍历空位；
 */


var arrww = [1,2,3,4,5,6,7,8,9,10].map(parseInt);
console.log(arrww);








