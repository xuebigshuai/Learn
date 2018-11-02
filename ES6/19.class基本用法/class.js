/**
 * 一、
 *   1、类的内部所有定义的方法，都是不可枚举的（non-enumerable，这一点与 ES5 的行为不一致。
 *   2、类的属性名，可以采用表达式;
 *   3、类和模块的内部，默认就是严格模式;
 *   4、一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加；
 *   5、constructor方法默认返回实例对象（即this);
 *   6、类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行；
 *   7、模块内部的所有方法都是对外可见的；
 *   8、类相当于实例的原型，所有在类中定义的方法，都会被实例继承；
 */
var divide = 'divide';
class Point{
    constructor({x=1,y=2}={}){
        this.x = x;
        this.y = y;
    }
    add(){
        return this.x+this.y;
    }
    [divide](){
        return (this.x/this.y).toFixed(2)
    }
}
var point = new Point();
console.log(point instanceof Point);
var sum = point .add();
var mode = point[divide]();
console.log(sum);
console.log(mode);


/**
 *二、Class 表达式
 *   1、采用 Class 表达式，可以写出立即执行的 Class；
 */
   var Myclass = new class{
       constructor(name){
           this.name = name;
           console.log(name);
       }
}("张三");
/**
 * 三、不存在变量提升
 *    1、必须保证子类在父类之后定义。
 *    2、类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。
 *    3、如果某个方法之前加上星号（*），就表示该方法是一个 Generator 函数
  */

/**
 * 四、Class 的静态方法
 *    在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
 *    1、静态方法包含this关键字，这个this指的是类，而不是实例
 *    2、静态方法可以与非静态方法重名，父类的静态方法，可以被子类继承。静态方法也是可以从super对象上调用；
 *
 */

/**
 * 五、 new.target 属性
 * 如果构造函数不是通过new命令调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的
 * 1、Class 内部调用new.target，返回当前 Class；
 * 2、子类继承父类时，new.target会返回子类，利用这个特点，可以写出不能独立使用、必须继承后才能使用的类；
 */


