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
      accelerator: 'Cmd+M',
      event: 'meetup'
    }, {
      label: 'Quit',
      accelerator: 'Cmd+Q',
      click() {
        app.quit();
      }
    }]
  }],
  help: [{
      label: 'Help',
      submenu: []
  }]
};
