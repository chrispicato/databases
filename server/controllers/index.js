var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('inside controllers messages get');
      models.messages.get(req, res);
      //router.get('/messages', controller.messages.get);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //router.post('/messages', controller.messages.post);
      models.messages.post(req, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req, res);
      //router.get('/users', controller.users.get);
    },
    post: function (req, res) {
      models.users.post(req, res);
      //router.post('/users', controller.users.post);
    }
  }
};