  
var cookieParser = require('cookie-parser');
var session      = require('express-session');


exports.link = function (req, res) {
    
    var search = req.param("test");
    
    var data= JSON.stringify(search);
    var str2 = '{"url": '+ data + '}'; 
    console.log(str2);
    


var request = require('request');
var temp = false;
request.post({
        url: 'http://CMPE281-Team1-CP-845690823.us-east-1.elb.amazonaws.com/nano',
         body: str2
         }, function(error, response, body){
            console.log(body);
            var obj = JSON.parse(body);
    console.log(obj.longUrl +":" + obj.shortUrl );
    
    res.render('index1', { "longUrl":obj.longUrl,"shortUrl":obj.shortUrl 
        
             });
    });
    
    



    
    
    
    
}