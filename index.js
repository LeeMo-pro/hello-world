var express = require('express');
var app = express();

app.get('/', function(req, res){ // '/' 위치에 'get' 요청을 받는 경우,
  res.send('Hello World!'); // "Hello World!"를 보냅니다.
});

var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:' + port);
});
