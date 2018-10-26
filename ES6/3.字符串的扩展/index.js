/*
* 字符的Unicode表示法
* */
let str = "\u0061";
str = "\u{20BB7}";
let hello = 123;
console.log(hell\u{6f});
console.log(str);
/*
* includes() startsWith() endsWith()
* */
let test1 = 'avdfc';
console.log("includes",test1.includes('a'));
console.log("startsWith",test1.startsWith("a"));
console.log("startsWith",test1.startsWith("b"));
console.log("endsWith",test1.endsWith("b"));
console.log("endsWith",test1.endsWith("c"));
/*
* repeat()
* 参数为小数会取整数
* */
let repeat = "repeat";
repeat0 = repeat.repeat(0);
repeat1 = repeat.repeat(1);
repeat2 = repeat.repeat(2);

console.log("repeat:",repeat0);
console.log("repeat:",repeat1);
console.log("repeat:",repeat2);

/*
* padStart() padEnd()
* */
let padString = "1";
let padString1 = padString.padStart(10,"0");
let padString2 = padString.padEnd(10,"0");
console.log("pad:",padString1);
console.log("pad:",padString2);
/*
* 模板字符
* */
let name = "xueyushuai", sex ="男";
let xue1 =`a${1+1}`;
let xu =  `Hellow ${name},你是一个${sex}人`;
console.log(xue1);
console.log(xu);

for (let i = 0; i <5 ; i++) {
    console.log(`第${i++}个人`)
}
/*
* 阶乘问题
* */
function add(a){
    if(a===1){
        return a;
    }else{
        return a*add(a-1);
    }
}
/*
* 跨台阶问题
* */
function f(n) {
   if(n===1){
       return 1;
   } else if(n===0){
       return 1;
    }else {
       return f(n-2)+f(n-1)
   }

}
let sum = add(5);
console.log(sum);
let f1 = f(10);
console.log(f1);

let jac = 'return'+'`Hello ${name}!`';
let func = new Function('name',jac);
console.log(func('Jack'));
