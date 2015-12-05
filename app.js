
/*
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , link = require('./routes/link');




var text = {"bindings": [
'{ "link":"www.google.com","short":"http://shortlink.nano" }' +
'{ "link":"www.yahoo.com" , "short":"http://shortlink2.nano" }' +
'{ "link":"www.openloop.com" , "short":"http://shortlink3.nano" }']};


var arr =new Array();
//var data = JSON.stringify(a);
var text2 = {'firstName':'vishwas','lastName':'mukund'};
var data = JSON.stringify(text2);
console.log(data);
var obj = JSON.parse(data);
console.log(obj.firstName);
//console.log(text2/firstname);
//console.log(obj[0]);
//console.log(text);
var app = express();
var req = require('request-json');
var request = require("request");

var data = JSON.stringify(text2);

var url = "http://ec2-52-90-246-21.compute-1.amazonaws.com/UrlTrend/rest/trends?size=5";

request({
    url: url,
    json: true
},
function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
        var data = JSON.stringify(body);
        var obj = JSON.parse(data);
        console.log(obj[1].count);
        var st = "rows";
       
       
    
    }
})









// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.post('/link',link.link);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

