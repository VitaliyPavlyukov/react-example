const http = require("http");
const os = require("os");
const greeting = require("./greeting.js");
// функция print представляет функцию из printMessage
const print = require("./greeting.js").printMessage;
// получаем только функцию printMessage
const User = require("./user.js");

// получаем компоненты модуля  по отдельности
const {date, printMessage} = require("./greeting.js");

// получим имя текущего пользователя
const userName = os.userInfo().username;

http.createServer(function(request,response){
     
    //response.end("Hello NodeJS!");
	response.end("userName: " + userName);
     
}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
    console.log(`Дата запроса: ${greeting.date}`);
    greeting.printMessage(userName);
    printMessage(userName);
    print(userName);

    const eugene = new User("Eugene", 22);
    eugene.print();
    eugene.sayHi();
});