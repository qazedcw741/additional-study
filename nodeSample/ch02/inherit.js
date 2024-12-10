var util = require('util');

function Parent() {

}

Parent.prototype.sayHello = function(){
    console.log('Hello World, from Patent Class!');
}

var obj = new Parent();
obj.sayHello();


function Child() {

}

util.inherits(Child, Parent);

var obj2 = new Child();
obj2.sayHello();