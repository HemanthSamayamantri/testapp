
/*
 * GET home page.
 */
var request = require("request");
var req = require('request-json');
exports.index = function(req, res){
    
    var url = "http://ec2-54-152-88-151.compute-1.amazonaws.com/UrlTrend/rest/trends?size=5";

request({
    url: url,
    json: true
},
function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
        var data = JSON.stringify(body);
        var obj = JSON.parse(data);
        
        var st = "rows";
        console.log("index.js is calling me")
        res.render('index', { "link": data });
        res.render('index1', { "link": data });
       
       
    
    }
})
    
    
    
    
    
    
    var st = "working!!";
  
};