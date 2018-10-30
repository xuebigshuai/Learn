/**
 * 每一次调用next方法，都会返回数据结构的当前成员的信息,包含value和done两个属性的对象
 * value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束
 * done 为true 表示已经到结尾,不可以继续遍历，用 for...of 循环遍历时，不会见done为true的显示
 *        false表示可以继续遍历
 * @type {String}
 */
var str = new String("hi");
console.log([...str]);
str[Symbol.iterator]=function () {
    return{
        next(){
            if(this._first){
                this._first = false;
                this._count++;
                return{value:this._count,done:false};
            }else {
                this._count++;
                this._first = true;
                if(this._count>5){
                    return{value:this._count,done:true};
                }else {
                    return{value:this._count,done:false};
                }
            }
        },
        _first:true,
        _count: 1
    }
};
var iterator = str[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
for(let char of str){
    console.log(char+'+++++++++++');
}
console.log(str);
