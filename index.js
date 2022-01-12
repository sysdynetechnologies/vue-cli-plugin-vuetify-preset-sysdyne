const { injectSassVariables } = require('@vuetify/cli-plugin-utils');

module.exports = (api) =>
  injectSassVariables(
    api,
    `~@sysdyne/vue-cli-plugin-vuetify-preset-sysdyne/preset/styles/settings/_index.scss`,
  );
