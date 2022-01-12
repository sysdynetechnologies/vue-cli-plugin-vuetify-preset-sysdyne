const { generatePreset } = require('@vuetify/cli-plugin-utils');

module.exports = (api) =>
  generatePreset(api, `'@sysdyne/vue-cli-plugin-vuetify-preset-sysdyne/preset'`);
