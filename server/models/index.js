var db = require('../db');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('im gonna get messages from the db!');
      res.end('end: models messages get');
    }, // a function which produces all the messages
    post: function (req, res) {
      console.log('im gonna post to the db!');

      var message = req.body.message;
      console.log(message);

      dbConnection = db.connection;
      dbConnection.connect();
      dbConnection.query(
        //'INSERT INTO Users SET ?', message, function(err, result) {
        'INSERT INTO Messages (text) VALUES("' + message + '")', function(err, result) {
          if (err) {
            console.log('err is', err);
          } else {
            console.log('some result from line 35', result);
          }
        }
      );

      dbConnection.query('SELECT * FROM Messages', function(err, result) {
        if (err) {
          console.log('select failed');
        } else {
          console.log('select result from 44', result);
        }
      });


      dbConnection.end();

      res.end('end: models messages post');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      console.log('im gonna get users from the db!');
      res.end('end: models users get');
    },
    post: function (req, res) {

    //   var username = req.body.username;
    //   console.log(username);

    //   dbConnection = db.connection;
    //   dbConnection.connect();
    //   dbConnection.query(
    //     //'INSERT INTO Users SET ?', username, function(err, result) {
    //     'INSERT INTO Users (username) VALUES("' + username + '")', function(err, result) {
    //       if (err) {
    //         console.log('err is', err);
    //       } else {
    //         console.log('some result from line 35', result);
    //       }
    //     }
    //   );

    //   dbConnection.query('SELECT * FROM Users', function(err, result) {
    //     if (err) {
    //       console.log('select failed');
    //     } else {
    //       console.log('select result from 44', result);
    //     }
    //   });


    //   dbConnection.end();

    //   console.log('im gonna post users to the db!');
      res.end('end: models users post');
    }
  }
};

