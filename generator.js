const { VuetifyPresetGenerator } = require('@vuetify/cli-plugin-utils');
const { VUETIFY_PRESET_NAME } = require('./config');

module.exports = (api) => VuetifyPresetGenerator(api, VUETIFY_PRESET_NAME);
