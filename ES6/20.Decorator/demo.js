/**
 * 一、修饰类
 *  1、修饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，修饰器能在编译阶段运行代码。也就是说，修饰器本质就是编译时
       执行的函数。
 *  2、总之，由于存在函数提升，使得修饰器不能用于函数。类是不会提升的，所以就没有这方面的问题
 *
 */
/*jshint esversion: 6 */
//import { readonly } from 'core-decorators';
function testable(targer) {
    targer.isTest=true;
}

@testable
class MytestClass{


}

console.log(MytestClass.isTest);

