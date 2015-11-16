'use strict';

const gcm = require('node-gcm');

module.exports = {
  sendNofification: function(opts, cb) {
    cb = cb || function() {};

    var message = new gcm.Message({
      notification: {
          title: opts.title,
          icon: "ic_launcher",
          body: opts.body
      }
    });

    var sender = new gcm.Sender(process.env.FB_APIKEY);

    sender.send(message, {
      topic: '/topics/global'
    }, cb);
  }
};
