var express = require('express')
    app = express(),
    port = 4040;

app.use(express.static(__dirname+'/public'));
app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(require('connect-livereload')());

app.all('*', function(req, res) {
    res.render('index');
});

app.listen(port);
console.log('Express app started on port ' + port);