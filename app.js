

var express = require('express'),
  config = require('./config/config');
  // glob = require('glob');
  // mongoose = require('mongoose');

// mongoose.connect(config.db);
// var db = mongoose.connection;
// db.on('error', function () {
//   throw new Error('unable to connect to database at ' + config.db);
// });

// var models = glob.sync(config.root + '/app/models/*.js');
// models.forEach(function (model) {
//   require(model);
// });
var app = express();

app.get('/', function (req, res, next) {
    var dc = {
        dd: "dd",
        cc: 'cc',
    }
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.json(dc);
    // res.sendfile('expressStudy/index.html');
    // res.text("ddfd");
});

// module.exports = require('./config/express')(app, config);

app.listen(config.port, function () {
  
  console.log('Express server listening on port ' + config.port);
});

