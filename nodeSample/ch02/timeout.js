function sayHello(){
    console.log('Hello World');
}

setInterval(function(){
    sayHello();
}, 2*1000);