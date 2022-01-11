require('./fonts.scss');
const { colors } = require('./colors');

const preset = {
  theme: {
    themes: {
      light: {
        primary: {
          base: colors.sysGray.darken4,
          lighten1: colors.sysGray.darken3,
          lighten2: colors.sysGray.darken2,
          lighten3: colors.sysGray.darken1,
          lighten4: colors.sysGray.base,
          lighten5: colors.sysGray.lighten1,
        },
        secondary: {
          darken3: colors.sysOrange.darken4,
          darken2: colors.sysOrange.darken3,
          darken1: colors.sysOrange.darken2,
          base: colors.sysOrange.darken1,
          lighten1: colors.sysOrange.base,
          lighten2: colors.sysOrange.lighten1,
          lighten3: colors.sysOrange.lighten2,
          lighten4: colors.sysOrange.lighten3,
          lighten5: colors.sysOrange.lighten4,
        },
      },
    },
  },
};

module.exports = { preset };
