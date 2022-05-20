const path = require('path');

module.exports = {
  i18n: {
    locales: ['ru', 'uz'],
    defaultLocale: 'ru',
  },
  localePath: path.resolve('./public/locales'),
};
