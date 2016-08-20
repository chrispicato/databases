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
      var message = req.body.message;
      
      db.dbConnection.query(
        //'INSERT INTO Users SET ?', message, function(err, result) {
        'INSERT INTO Messages (text) VALUES("' + message + '")', function(err, result) {
          if (err) {
          } else {
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

