var db = require('../db');


module.exports = {
  messages: {
    get: function (req, res) {
      db.dbConnection.query('SELECT * FROM Messages', function(err, result) {
        if (err) {
          res.end(err);
        } else {
          res.end(JSON.stringify(result));
        }
      });

    }, // a function which produces all the messages

    post: function (req, res) {
      var params = [
        req.body.message,
        req.body.roomname,
        req.body.username
      ];
      console.log('our params are ', params);
      
      var values = 'VALUES(' + params[0] + ',' + params[1] + ',' + params[2] + ')'; 

      //db.dbConnection.query('SELECT id from Users where username = ' + params[2] + ');

      var queryString = 'INSERT INTO Messages (text, roomname, (select id from Users where username = ' + params[2] + ')) ' + values;
      db.dbConnection.query(
        //'INSERT INTO Users SET ?', message, function(err, result) {
        queryString, function(err, result) {
          if (err) {
            console.log('error in post of messages', err);
          } else {
            console.log('we got here');
            res.end('end: models messages post');
          }
        }
      );
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      res.end('end: models users get');
    },

    post: function (req, res) {
      var username = req.body.username;

      db.dbConnection.query(
        //'INSERT INTO Users SET ?', username, function(err, result) {
        'INSERT INTO Users (username) VALUES("' + username + '")', function(err, result) {
          if (err) {
          } else {
          }
        }
      );

      db.dbConnection.query('SELECT * FROM Users', function(err, result) {
        if (err) {
        }
      });

      res.end('end: models users post');
    }
  }
};

