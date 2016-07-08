var hashStr = "A hash string.";
var hash = require("crypto").createHash('sha1').update(hashStr).digest('base64');

require("http").createServer(function(req, res){
    if(req.headers['if-none-match'] == hash||req.headers['Etag']==hash){
        res.writeHead(304);
        res.end();
        return;
    }
    res.writeHead(200, {
        "Etag": hash
    })
    res.write(hashStr);
    res.end();
}).listen(9999);