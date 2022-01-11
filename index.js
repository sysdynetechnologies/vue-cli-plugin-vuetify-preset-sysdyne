const { injectSassVariables } = require('@vuetify/cli-plugin-utils');
const { VUETIFY_PRESET_PATH } = require('./config');

module.exports = (api) => {
  injectSassVariables(api, `${VUETIFY_PRESET_PATH}/variables.scss`);
  injectSassVariables(api, `${VUETIFY_PRESET_PATH}/colors.scss`);
};
