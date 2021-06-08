const path = require('path')

module.exports = {
  stories: ['../components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
}
