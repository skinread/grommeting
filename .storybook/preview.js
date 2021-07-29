import React from 'react';
import { addDecorator } from '@storybook/react';
import { Grommet, grommet } from 'grommet';

addDecorator(Story => (
  <Grommet theme={grommet}>
    <Story />
  </Grommet>
));

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // options: {
  //   storySort: {
  //     method: 'alphabetical',
  //     order: ['All'],
  //   },
  // },
  paddings: {
    default: 'Medium',
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
  },
};
