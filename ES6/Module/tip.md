## 一、Module的基本用法
 - 1、一个js文件就是一个模块。  
 - 2、使用 export 命令定义了模块的对外接口以后，其他 JS 文件就可以通过 import 命令加载这个模块。  
 - 3、上面代码的 import 命令，用于加载 profile.js 文件，并从中输入变量。 import 命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面
      的变量名，必须与被导入模块（ profile.js ）对外接口的名称相同；  
   ###例如
   ```javascript
   // main.js
   import {firstName, lastName, year} from './profile';
   function setName(element) {
    element.textContent = firstName + ' ' + lastName;
   }
   ```
   如果想为输入的变量重新取一个名字， import 命令要使用 as 关键字，将输入的变量重命名。
   ````
   import { lastName as surname } from './profile';   
  - 4、import 后面的 from 指定模块文件的位置，可以是相对路径，也可以是绝对路径，.js 后缀可以省略。如果只是模块名，不带有路径，那么必须有配置文
      件，告诉 JavaScript 引擎该模块的位置。  
      import {myMethod} from 'util';  
      上面代码中， util 是模块文件名，由于不带有路径，必须通过配置，告诉引擎怎么取到这个模块。  
      注意， import 命令具有提升效果，会提升到整个模块的头部，首先执行。  
      ```
      foo();
      import { foo } from 'my_module'; 
       ```
   - 5、import 命令会被 JavaScript 引擎静态分析，先于模块内的其他模块执行（叫做”连接“更合适）。  
   import 和 export 命令只能在模块的顶层，不能在代码块之中（比如，在 if 代码块之中，或在函数之中）。  
   - 6、import() 类似于 Node 的 require 方法，区别主要是前者是异步加载，后者是同步加载。  
   ##  二、Module加载的实现  
   - 1、export 语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值  
       这一点与 CommonJS 规范完全不同。CommonJS 模块输出的是值的缓存，不存在动态更新  
   - 2、 ES6 模块与 CommonJS 模块的差异  
      - 1、CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。（总之，CommonJS 输入的是被输出值的拷贝，不是引用。）  
      - 2、CommonJS 模块是运行时加载，ES6 模块是编译时输出接。  
   - 3、在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。