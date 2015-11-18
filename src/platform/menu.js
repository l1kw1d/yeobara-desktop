const app = require('app');
const appName = app.getName();

module.exports = {
  defaults: [{
    label: appName,
    submenu: [{
      label: `About ${appName}`,
      role: 'about'
    }, {
      label: 'Select a meetup',
      event: 'meetup'
    }]
  }],
  help: [{
      label: 'Help',
      submenu: []
  }]
};
