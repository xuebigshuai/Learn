
var str = new String("hi");
console.log([...str]);
str[Symbol.iterator]=function () {
    return{
        next(){
            if(this._first){
                this._first = false;
                return{value:'bye',done:false};
            }else {
                this._first = true;
                return{value:'now',done:true};
            }
        },
        _first:true
    }
};
var iterator = str[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
for(let char of str){
    console.log(char+'+++++++++++');
}
console.log(str);
