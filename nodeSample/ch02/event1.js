process.on('uncaughtException', function(){
    console.log('uncaughtException')
});

sayHello();
