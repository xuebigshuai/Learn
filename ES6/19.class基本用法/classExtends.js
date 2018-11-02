
/**
 * 一、Class 可以通过extends关键字实现继承
 *    1、子类必须在constructor方法中调用super方法，否则新建实例时会报错，如果不调用super方法，子类就得不到this对象
 *      如果子类没有定义constructor方法，这个方法会被默认添加，在子类的构造函数中，
 *      只有调用super之后，才可以使用this关键字，否则会报错；
 *    2、父类的静态方法，也会被子类继承；
 *
 */
class Point {
    constructor(){
        this.father='point';
    }
    static hello(){
        return 'hello';
    }
}

class ColorPoint extends Point{
    constructor(){
        super();
        this.name = 'color';
    }
}
var color = new ColorPoint();

console.log(color.father);
console.log(ColorPoint.hello());
//实例对象cp同时是ColorPoint和Point两个类的实例，这与 ES5 的行为完全一致。
console.log(color instanceof ColorPoint);
console.log(color instanceof Point);


/**
 * 二、Object.getPrototypeOf()
 * Object.getPrototypeOf方法可以用来从子类上获取父类。
 */
console.log(Object.getPrototypeOf(ColorPoint));

/**
 * 三、super
 * 1、super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同；
 *2、作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错
 * 3、super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类
 * 4、由于this指向子类实例，所以如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性；
 * 5、如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象；
 * 6、使用super的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错。
 */

/**
 * 四、ES6 可以自定义原生数据结构（比如Array、String等）的子类，这是 ES5 无法做到的。
 * extends关键字不仅可以用来继承类，还可以用来继承原生的构造函数。因此可以在原生数据结构的基础上，定义自己的数据结构
 */
