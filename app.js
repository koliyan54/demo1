// получаем модуль Express
var express = require("express");
// создаем приложение
var app = express();
 
// устанавливаем обработчик для маршрута "/"
app.get("/ap", function(request, response){
 // response.write(2222222.toString)
    response.end("Hello from Express!gggggg");
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000);
console.log(777)