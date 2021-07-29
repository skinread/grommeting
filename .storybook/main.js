module.exports = {
  stories: [
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.@(js|jsx|ts|tsx)'
  ],
  addons: [
    'storybook-addon-paddings',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
};
