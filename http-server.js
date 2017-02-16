var express = require('express');
var app = express();
var port = process.env.PORT || 8182;

app.use(express.static(__dirname + '/app'));

app.use(function(req, res) {
    res.send('404: Page not Found', 404);
});

app.use(function(req, res) {
    res.send('500: Internal Server Error', 500);
});

app.listen(port);

console.log('Web server has been started on port ' + port);
