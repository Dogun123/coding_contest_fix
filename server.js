var express = require('express');
const https = require('https')
const path = require('path')
const fs = require('fs')

var app = express();
var router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(8080, function(){
    console.log("Express server has started on port 8080")
});

app.use(express.static('public'));

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert:fs.readFileSync(path.join(__dirname,'cert','cert.pem')),
},app)

sslServer.listen(3443,()=> console.log('Secure server 🛠🔑 on port 3443'))