const injectDevServer = require('@cypress/react/plugins/next')
const clipboardy = require('clipboardy');

module.exports = (on, config) => {
  injectDevServer(on, config)

  on('task', {
    getClipboard () {
      return clipboardy.readSync();
    }
  });
  return config
}
